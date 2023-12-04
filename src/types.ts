export interface QueryParams {
  limit: number;
  filter?: {
    [key: string]: string | number | Array<number | null> | boolean;
  };
  search?: string;
  skip?: number;
  sort?: {
    id: string;
    desc: boolean;
  }[];
}