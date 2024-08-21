import { render } from "@testing-library/react";
import CardProject from "..";
import { PROJECT_DATA_MOCK } from "@/lib/mocks";
import { TRecordProject } from "@/lib/types";

describe('CardProject component test case', () => {
  it('Render when data is available', () => {
    const mockData: TRecordProject = PROJECT_DATA_MOCK
    const { container } = render(
      <CardProject
        id={mockData.id}
        projectId={mockData?.fields._id}
        image={mockData?.fields.image}
        name={mockData?.fields.projectName}
        description={mockData?.fields.description}
      />
    )

    expect(container).toMatchSnapshot();
  })
});
