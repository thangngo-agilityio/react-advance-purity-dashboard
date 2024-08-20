import { act, renderHook } from '@testing-library/react';

// Hooks
import { usePagination } from '@/lib/hooks';


describe('usePagination hook', () => {
  it('should initialize with the correct default values', () => {
    const { result } = renderHook(() => usePagination([]));

    expect(result.current.data.limit).toBe(5);
    expect(result.current.data.currentPage).toBe(1);
    expect(result.current.filterData).toEqual([]);
  });

  it('should update currentPage when handleChangePage is called', () => {
    const { result } = renderHook(() => usePagination([]));

    act(() => {
      result.current.handleChangePage(2);
    });

    expect(result.current.data.currentPage).toBe(2);
    expect(result.current.data.limit).toBe(5);
  });

  it('should reset currentPage when resetPage is called', () => {
    const { result } = renderHook(() => usePagination([]));

    act(() => {
      result.current.handleChangePage(2);
      result.current.resetPage();
    });

    expect(result.current.data.currentPage).toBe(1);
    expect(result.current.data.limit).toBe(5);
  });
});
