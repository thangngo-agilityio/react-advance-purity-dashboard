import { renderHook } from '@testing-library/react';

// Hooks
import { useDebounce } from '@/hooks';

// Constants
import { DEBOUNCE_TIME } from '@/constants';

jest.useFakeTimers();
describe('useDebounce', () => {
  it('Work', () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useDebounce(mockFn, []));

    result.current();
    expect(mockFn).not.toHaveBeenCalled();

    result.current();
    jest.advanceTimersByTime(DEBOUNCE_TIME);
    expect(mockFn).toHaveBeenCalled();
  });
});
