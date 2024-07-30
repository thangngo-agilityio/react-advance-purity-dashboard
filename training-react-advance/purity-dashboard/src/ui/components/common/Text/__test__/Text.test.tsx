import { render } from "@testing-library/react"
import { Text } from "../.."

describe('Text test cases', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Text content="Text" />
    )
    expect(container).toMatchSnapshot();
  })
});
