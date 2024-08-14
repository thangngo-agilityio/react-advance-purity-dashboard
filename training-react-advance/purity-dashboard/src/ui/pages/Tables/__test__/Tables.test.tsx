import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
// import dayjs from "dayjs";

// Components
import TablePage from "..";

// Hooks
// import { useAuthor } from "@/lib/hooks";

// Mocks
import { AUTHORS, PROJECT } from "@/lib/mocks";

// Constants
// import { SUCCESS_MESSAGE } from "@/lib/constants/message";

// Types
// import { TRecordAuthor } from "@/lib/types";

const mockCreateAuthor = jest.fn()
const mockUpdateAuthor = jest.fn()
const mockUpdateProject = jest.fn()

jest.mock('@/lib/hooks', () => ({
  useAuthor: () => ({
    authorData: AUTHORS,
    isLoading: false,
    isFetching: false,
    createAuthor: mockCreateAuthor,
    updateAuthor: mockUpdateAuthor
  }),
  useProject: () => ({
    projectData: PROJECT,
    isLoading: false,
    isFetching: false,
    updateProject: mockUpdateProject,
  }),
  useDebounce: jest.fn(),

}));

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

const mockToast = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: () => mockToast,
}));


describe('Tables page', () => {

  beforeEach(() => {
    jest.clearAllMocks();

  })
  test('Should render match with snapshot.', () => {
    const { container } = render(<TablePage />);

    expect(container).toMatchSnapshot();
  });

  test('should open add modal when clicking add button', () => {
    render(<TablePage />);

    // Find the button that opens the modal
    const addButton = screen.getByText(/Add New/i);

    // Ensure the modal is not open initially
    expect(screen.queryByText(/Add Author/i)).not.toBeInTheDocument();

    // Click the button to open the modal
    fireEvent.click(addButton);

    // Check if the modal is now open
    expect(screen.getByText(/Add Author/i)).toBeInTheDocument();
  });

  // it('should create an author successfully and show a success toast', async () => {
  //   const mockData: TRecordAuthor[] = [{
  //     id: '1',
  //     createdTime: '2024-08-14',
  //     fields: {
  //       _id: 1,
  //       name: 'John Doe',
  //       email: 'john.doe@example.com',
  //       avatar: 'avatar_url',
  //       role: 'Admin',
  //       job: 'Software Engineer',
  //       employed: '2024-08-14',
  //       status: undefined, // Assuming this is optional
  //     },
  //   }];

  //   (dayjs as unknown as jest.Mock).mockReturnValue({
  //     format: jest.fn().mockReturnValue('2024-08-14'),
  //   });

  //   (mockCreateAuthor as jest.Mock).mockResolvedValue({}); // Mock the API call to resolve

  //   const { result } = renderHook(() => useAuthor());

  //   await act(async () => {
  //     await result.current.createAuthor(mockData);
  //   });

  //   expect(mockCreateAuthor).toHaveBeenCalledWith({ "records": [{ "fields": { "avatar": "avatar_url", "email": "john.doe@example.com", "employed": "2024-08-14", "job": "Software Engineer", "name": "John Doe", "role": "Admin" } }] });

  //   expect(mockToast).toHaveBeenCalledWith({
  //     title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Author'),
  //     description: SUCCESS_MESSAGE.AUTHOR_SUCCESS,
  //     status: 'success',
  //     duration: 2000,
  //     isClosable: true,
  //   });
  // });
})
