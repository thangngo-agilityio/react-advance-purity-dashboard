import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Pagination from '..';

const onPageChangeMock = jest.fn();

describe('Pagination render', () => {
  test('Should render match with snapshot.', () => {
    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });

  it('Handle click page', async () => {
    const { getByTestId } = render(
      <Pagination onPageChange={onPageChangeMock} />,
    );

    const nextPage = getByTestId('next-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalled();
  });

  it('Handle next page', async () => {
    const { getByTestId } = render(
      <Pagination onPageChange={onPageChangeMock} />,
    );

    const nextPage = getByTestId('next-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalled();
  });

  it('Handle prev page', async () => {
    const { getByTestId } = render(
      <Pagination
        currentPage={2}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextPage = getByTestId('prev-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
});
