import { render } from "@testing-library/react";
import CardProject from "..";
import { PROJECT_DATA_MOCK } from "@/lib/mocks";
import { TRecordProject } from "@/lib/types";

describe('CardProject component test case', () => {
  it('Render when data is available', () => {
    const mockData: TRecordProject = PROJECT_DATA_MOCK
    const { container } = render(
      <CardProject
        projectData={mockData}
        src="https://cdnphoto.dantri.com.vn/Sc0fkdclY1YFlbStFH1H6BRmqy8=/thumb_w/1020/2023/09/23/11-captivating-living-room-interiors-that-showcase-the-contemporary-american-style-in-la-houses-edited-1695456072855.jpeg'" alt='living room'
        projectNumber='1'
        projectName='Modern'
        description='As Uber works through a huge amount of internal management turmoil'
      />
    )

    expect(container).toMatchSnapshot();
  })
});
