import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useReactTable, getCoreRowModel, SortingState } from '@tanstack/react-table';

import { QueryParams } from '../types';
import { Search } from './components/Search';
import { Pagination } from './components/Pagination';
import { EmptyData } from './components/EmptyData';
import { THead } from './components/THead';
import { TBody } from './components/TBody';
import styles from './Table.module.css';
import { ColGroup } from './components/ColGroup';

interface TableProps {
  data: {
    data: Array<object>;
    count: number;
  };
  isLoading: boolean;
  onChange: Dispatch<SetStateAction<QueryParams>>;
  initialState: QueryParams;
  template?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  search?: string;
  components?: {
    Pagination?: (props: {
      pageCount: number;
      pageIndex: number;
      setPageIndex: ({ selected }: { selected: number }) => void;
    }) => React.ReactElement;
    EmptyData?: (props: { isLoading: boolean; isEmpty: boolean }) => React.ReactElement;
    Search?: (props: { openFilters: () => void }) => React.ReactElement;
    Filters?: () => React.ReactElement;
  };
}

export const Table = ({
  data,
  isLoading: _isLoading,
  onChange,
  columns,
  search,
  components,
  initialState,
  template,
}: TableProps) => {
  const [sorting, setSorting] = useState<SortingState>(initialState.sort || []);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    pageCount: data?.count ? Math.ceil(data.count / initialState.limit) : 0,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    enableSortingRemoval: false,
    manualPagination: true,
  });

  const rows = table.getRowModel().rows;

  const isEmpty = rows.length === 0 && !_isLoading;
  const isLoading = rows.length === 0 && _isLoading;

  let content = (
    <div className={styles.tableWrapper}>
      <table>
        <ColGroup template={template} />
        <THead headerGroups={table.getHeaderGroups()} onChange={onChange} />
        <TBody rows={rows} />
      </table>
    </div>
  );

  if (isEmpty || isLoading) {
    const title = isLoading ? 'Loading...' : 'No matching results found';
    const subtitle = isLoading ? 'Please wait' : 'Try adjusting your search or filter to find what you are looking for';
    content = components?.EmptyData ? (
      components.EmptyData({ isLoading, isEmpty })
    ) : (
      <EmptyData title={title} subtitle={subtitle} />
    );
  }

  const paginationComponent = components?.Pagination ? (
    components.Pagination({
      pageCount: table.getPageCount(),
      pageIndex: table.getState().pagination.pageIndex,
      setPageIndex: ({ selected }) => table.setPageIndex(selected),
    })
  ) : (
    <Pagination
      pageCount={table.getPageCount()}
      initialPage={table.getState().pagination.pageIndex}
      onPageChange={({ selected }) => {
        onChange((prev) => ({ ...prev, skip: initialState.limit * selected }));
        table.setPageIndex(selected);
      }}
    />
  );

  const searchComponent = components?.Search ? (
    components.Search({
      openFilters: () => setOpenFilters(!openFilters),
    })
  ) : (
    <Search
      search={search}
      enableFilters={!!components?.Filters}
      onChange={(value) => {
        onChange((prev) => ({
          ...prev,
          search: value,
          skip: 0,
        }));
      }}
      open={() => setOpenFilters(!openFilters)}
    />
  );

  useEffect(() => {
    table.setPageIndex(0);
  }, [initialState.filter, initialState.search]);
  return (
    <>
      {searchComponent}
      {components?.Filters && openFilters && components.Filters()}
      {content}
      {table.getPageCount() > 0 && paginationComponent}
    </>
  );
};
