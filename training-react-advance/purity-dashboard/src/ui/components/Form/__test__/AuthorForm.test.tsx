// Libs
import { render, fireEvent, act, waitFor } from '@testing-library/react';

// Components
import { AuthorForm } from '../..';

describe('AuthorForm component', () => {
  const mockProps = {
    onCloseModal: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should match with snapshot', () => {
    const { container } = render(<AuthorForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit when submit form', async () => {
    const mockNewUserData = {
      name: 'Shoe',
      email: 'shoe@gmail.com',
      avatar: 'asdasd.png',
      role: 'Dev',
      job: 'FE',
      employed: '2024-07-01',
    };

    const { getByLabelText, getByRole } = render(<AuthorForm {...mockProps} />);

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
      fireEvent.change(getByLabelText('Role'), {
        target: { value: mockNewUserData.role },
      });
      fireEvent.change(getByLabelText('Job'), {
        target: { value: mockNewUserData.job },
      });
      fireEvent.change(getByLabelText('Employed'), {
        target: { value: mockNewUserData.employed },
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
