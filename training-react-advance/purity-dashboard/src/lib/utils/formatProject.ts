// Types
import { TFiledProject } from '../types';

// Utils
import { formatDecimalNumber } from './formatNumber';

export const formatProjectResponse = (projects: TFiledProject[] = []) =>
  projects.map((project) => {
    const { fields } = project || {};
    const { projectName, avatar, budget, status, completion } = fields || {};

    return {
      projectName,
      avatar,
      budget: `$${formatDecimalNumber(budget)}`,
      projectStatus: status,
      completion,
    };
  });
