// Libs
import { render, fireEvent, act, waitFor } from '@testing-library/react';

// Components
import { UserForm } from '../..';

describe('UserForm component', () => {
  const mockProps = {
    onCloseModal: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should match with snapshot', () => {
    const { container } = render(<UserForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit when submit form', async () => {
    const mockNewUserData = {
      name: 'Shoe',
      email: 'shoe@gmail.com',
      avatar: 'asdasd.png',
      password: 'Abcd@1234',
      location: 'vietnam',
      phone: '',
    };

    const { getByLabelText, getByRole } = render(<UserForm {...mockProps} />);

    act(() => {
      fireEvent.change(getByLabelText('Name'), {
        target: { value: mockNewUserData.name },
      });
      fireEvent.change(getByLabelText('Email'), {
        target: { value: mockNewUserData.email },
      });
      fireEvent.change(getByLabelText('Avatar'), {
        target: { value: mockNewUserData.avatar },
      });
      fireEvent.change(getByLabelText('Password'), {
        target: { value: mockNewUserData.password },
      });
      fireEvent.change(getByLabelText('Location'), {
        target: { value: mockNewUserData.location },
      });
      fireEvent.change(getByLabelText('Phone'), {
        target: { value: mockNewUserData.phone },
      });
    });

    const saveBtn = getByRole('button', { name: 'Save' });
    fireEvent.click(saveBtn);

    waitFor(() => {
      expect(mockProps.onSubmit).toHaveBeenCalledWith(mockNewUserData, []);
      expect(mockProps.onCloseModal).toHaveBeenCalled();
    });
  });
});
