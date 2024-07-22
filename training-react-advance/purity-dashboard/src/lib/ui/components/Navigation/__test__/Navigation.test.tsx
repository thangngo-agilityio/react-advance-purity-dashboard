import { PhoneIcon } from "@chakra-ui/icons";
import Navigation from "..";
import { render } from "@testing-library/react";

describe('Navigation test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Navigation leftIcon={<PhoneIcon />} isActive={false} >
        Content1
      </Navigation>
    )

    expect(container).toMatchSnapshot();
  })

  it('When Navigation active', () => {
    const { container } = render(
      <Navigation leftIcon={<PhoneIcon />} isActive={true} >
        Content1
      </Navigation>
    )

    expect(container).toMatchSnapshot();
  })
});
