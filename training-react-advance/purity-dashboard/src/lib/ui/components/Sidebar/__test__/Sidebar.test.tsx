import { render } from "@testing-library/react";

// Component
import Sidebar from "..";

// Mocks
import { SIDEBAR_LIST_MOCK } from "@/lib/mocks";

describe('Sidebar test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Sidebar listItem={[]} />
    )

    expect(container).toMatchSnapshot()
  })

  it('Render when data is available', () => {
    const { container } = render(
      <Sidebar listItem={SIDEBAR_LIST_MOCK} />
    )

    expect(container).toMatchSnapshot()
  })
});
