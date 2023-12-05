# BlackLightBurn Table

BlackLightBurn table component

## Installation

```
npm install --save blb-table
```

## Import styles

Import styles in `app.js`

```
import 'blb-table/dist/variables.css';

export default function App({ Component, pageProps }: any) {
	return <Component {...pageProps} />;
}
```

## Usage

```
// index.tsx

import { useState, useEffect } from 'react';
import { Table, QueryParams, ColumnDef } from 'blb-table';
import { EmptyData } from '@/components/EmptyData';
import { Pagination } from '@/components/Pagination';
import { Search } from '@/components/Search';
import { FilterForm } from '@/components/FilterForm';

interface InitialDataProps {
  title: string;
  subscribers: number;
  views: number;
}

const initialData = {
  data: [
    {
      title: 'One',
      subcribers: 1000,
      views: 123,
    },
    {
      title: 'Two',
      subcribers: 2000,
      views: 544,
    },
    {
      title: 'Three',
      subcribers: 3000,
      views: 56626,
    },
  ],
  count: 3
};

export default function Home() {
    const [data, setData] = useState(() => initialData)
    const [queryParams, setQueryParams] = useState<QueryParams>({
        limit: 3,
        sort: [{
          id: 'title',
          desc: false,
        }],
    });

	const columns: ColumnDef<InitialDataProps>[] = [
		{
			accessorKey: 'title',
			header: () => <span>Name</span>,
			cell: (info) => info.getValue(),
			enableSorting: false,
		},
		{
			accessorKey: 'subscribers',
			header: () => <span>Subscribers</span>,
			cell: (info) => info.getValue(),
			enableSorting: true,
		},
		{
			accessorKey: 'views',
			header: () => <span>Views</span>,
			cell: (info) => info.getValue(),
			enableSorting: true,
		},
	];
	
     useEffect(() => {
        setData((prevData) => {
          const filtered = !queryParams.search
            ? initialData.data
            : prevData.data.filter((itm) => itm.title.includes(queryParams.search || ''));
          return {
            data: filtered,
            count: filtered.length,
          };
        });
      }, [queryParams]);

	return (
	  <Table
	    data={data}
		columns={columns}
		isLoading={false}
		onChange={setQueryParams}
		initialState={queryParams}
		template={['50%', '30%', '20%']}
		components={{
          EmptyData: ({ isLoading, isEmpty }) => (
            <EmptyData isLoading={isLoading} isEmpty={isEmpty} />
          ),
          Pagination: ({ pageCount, pageIndex, setPageIndex }) => (
            <Pagination
              pageCount={pageCount}
              onChange={({ selected }) => {
                setQueryParams((prev) => ({ ...prev, skip: queryParams.limit * selected }));
                setPageIndex({ selected });
              }}
            />
          ),
          Search: ({ resetPagination, openFilters }) => (
            <Search
              onChange={(value) => {
                setQueryParams((prev) => ({
                  ...prev,
                  search: value,
                  skip: 0,
                }));
                resetPagination();
              }}
              openFilters={openFilters}
            />
          ),
          Filters: ({ resetPagination }) => (
            <FilterForm
              onSubmit={(data) => {
                setQueryParams((prev) => ({
                  ...prev,
                  filter: {
                    ...prev.filter,
                    ...data,
                  },
                  skip: 0,
                }));
                resetPagination();
              }}
            />
          ),
        }}
      />
	)
}
```

```
// Example FilterForm.tsx

export const FilterForm = ({ onSubmit: _onSubmit }) => {
  const onSubmit = (data) => {
    let _data = {};
    let viewsFrom;
    let viewsTo;
    if (data.target.name === 'viewsFrom') {
      viewsFrom = data.target.value;
    }
    if (data.target.name === 'viewsTo') {
      viewsTo = data.target.value;
    }
    _data = {
      views: [viewsFrom ? Number(viewsFrom) : null, viewsTo ? Number(viewsTo) : null],
    };

    if (_onSubmit) _onSubmit(_data);
  };
  return (
    <form onChange={onSubmit}>
      <input name="viewsFrom"  />
      <input name="viewsTo" />
    </form>
  );
};
```

```
// Example Search.tsx

import { useState } from "react";

interface SearchProps {
  onChange: (value: string) => void;
  openFilters: () => void;
}

export const Search = ({ onChange, openFilters }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
    <input
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
        onChange(e.target.value);
      }}
    />
    <button type="button" onClick={openFilters}>open filters</button>
    </>
  )
}
```

```
// Example Pagination.tsx

interface PaginationProps {
  pageCount: number;
  onChange: ({ selected }: { selected: number }) => void;
}

export const Pagination = ({ pageCount, onChange }: PaginationProps) => {
  return (
    <>
      {Array.from({ length: pageCount }, (_, index) => 0 + index).map((item) => (
        <button type="button" key={item} onClick={() => onChange({ selected: item })}>{item + 1}</button>
      ))}
    </>
  );
};
```

```
// Example EmptyData.tsx

interface EmptyDataProps {
  isLoading: boolean;
  isEmpty: boolean;
}

export const EmptyData = ({ isLoading, isEmpty }: EmptyDataProps) => {
  if (isLoading) {
    return 'Loading...'
  }
  return 'Empty';
};
```

## API

- **data**: _{ data: Array<object\>; count: number; }_
  > Count is a total count of elements
- **isLoading**: _boolean_
- **onChange**: _Dispatch<SetStateAction<QueryParams\>>_
- **initialState**: _{ limit: number; sort?: QueryParams['sort']}_
  > Limit for pagination page size and for number of elements to display
  > and default sort state
- **columns**: _any[]_
- **search**?: _string_
- **template**?: _string[]_
  > Defines the width of each column (in %). For example ['50%', '30%', '20%']
- **components**?: _{ components API }_
  > For your custom components

### Components API

- **Pagination**?: _(props: { pageCount: number; pageIndex: number; setPageIndex: ({ selected }: { selected: number }) => void; }) => React.ReactElement;_

  > pageCount - total page count

  > pageIndex - current index of page

  > setPageIndex - function for set the page number

- **EmptyData**?: _(props: { isLoading: boolean; isEmpty: boolean }) => React.ReactElement;_
- **Search**?: _(props: { resetPagination: () => void; openFilters: () => void; }) => React.ReactElement;_

  > resetPagination - for reset pagination on first page

  > openFilter - open/close filters

- **Filters**?: _(props: { resetPagination: () => void }) => React.ReactElement;_

## Contributing

This project is open for improvements and maintenance. Feel free to fork and make your own modifications.

## License

MIT
