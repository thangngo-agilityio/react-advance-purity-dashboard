import { render } from "@testing-library/react";

// Component
import ButtonIcon from "..";
import { PhoneIcon } from "@chakra-ui/icons";


describe('ButtonIcon test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <ButtonIcon icon={<PhoneIcon />} />
    )

    expect(container).toMatchSnapshot();
  });

  it('ButtonIcon displays when inactive', () => {
    const { container } = render(
      <ButtonIcon icon={<PhoneIcon />} isActive={false} />
    )
    expect(container).toMatchSnapshot();
  })

  it('ButtonIcon displays when active', () => {
    const { container } = render(
      <ButtonIcon icon={<PhoneIcon />} isActive={true} />
    )
    expect(container).toMatchSnapshot();
  })
});
