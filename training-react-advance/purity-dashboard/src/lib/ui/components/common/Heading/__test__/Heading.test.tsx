import { render } from "@testing-library/react"

// Component
import { Heading } from "../.."

describe('Heading test cases', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Heading title={"Test"}>
      </Heading>
    );
    expect(container).toMatchSnapshot();
  })
});
