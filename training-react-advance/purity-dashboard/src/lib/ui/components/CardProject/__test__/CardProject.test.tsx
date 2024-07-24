import { render } from "@testing-library/react";
import CardProject from "..";

describe('CardProject component test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <CardProject />
    )

    expect(container).toMatchSnapshot();
  })
  it('Render when data is available', () => {
    const { container } = render(
      <CardProject
        src="https://cdnphoto.dantri.com.vn/Sc0fkdclY1YFlbStFH1H6BRmqy8=/thumb_w/1020/2023/09/23/11-captivating-living-room-interiors-that-showcase-the-contemporary-american-style-in-la-houses-edited-1695456072855.jpeg'" alt='living room'
        projectNumber={1}
        projectName='Modern'
        description='As Uber works through a huge amount of internal management turmoil'
      />
    )

    expect(container).toMatchSnapshot();
  })
});
