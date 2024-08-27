import { render } from "@testing-library/react";
import Header from "..";


describe('Header test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Header />
    )
    expect(container).toMatchSnapshot()
  })
});
