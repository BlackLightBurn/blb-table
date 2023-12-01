# BlackLightBurn Table

BlackLightBurn table component


## Installation

```
npm install --save blb-table
```

## Import styles and use react-query
Import styles in ``app.js`` and use ``QueryClientProvider``.

```
import  'blb-table/dist/variables.css';
import  'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: any) {
	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
```

## Usage

```
import { Table } from 'blb-table';
import { useQuery } from 'react-query';
import { influencersQuery } from  '@/queries/influencersQuery';

interface QueryParams {
	limit: number;
	filter?: {
		[key: string]: string | number | Array<number | null> | boolean;
	};
	search?: string;
	skip: number;
	sort: {
		id: string;
		desc: boolean;
	}[];
}

export  default  function  Home() {
	const [queryParams, setQueryParams] = useState<QueryParams>({
		limit: 10,
	});

	const { data, isFetching } = useQuery(influencersQuery(queryParams));

	const columns: = [
		{
			accessorKey: 'title',
			header: () => <span>Influencer</span>,
			cell: (info) => info.getValue(),
			enableSorting: false,
		}
	];

	return (
		<Table
			data={data}
			columns={columns}
			isLoading={isFetching}
			onChange={setQueryParams}
			limit={queryParams.limit}
		/>
	)
}
```

## API

- **data**: *{ data:  Array<object\>; count:  number; }*
	 > Count is a total count of elements
- **isLoading**: *boolean*
- **onChange**:  *Dispatch<SetStateAction<QueryParams\>>*
- **limit**: *number*
	> Limit for pagination page size and for number of elements to display
- **columns**: *any[]*
- **search**?: *string*
- **components**?: *{ components API }*
	> For your custom components

### Components API

- **Pagination**?: *(props: { pageCount:  number; pageIndex:  number; setPageIndex: ({ selected }: { selected:  number }) =>  void; }) =>  React.ReactElement;*
- **EmptyData**?: *(props: { isLoading:  boolean; isEmpty:  boolean }) =>  React.ReactElement;*
- **Search**?: *(props: { resetPagination: () =>  void; openFilters: () =>  void; }) =>  React.ReactElement;*
- **Filters**?: *(props: { resetPagination: () =>  void }) =>  React.ReactElement;*


## Contributing

This project is open for improvements and maintenance. Feel free to fork and make your own modifications.

## License

MIT
