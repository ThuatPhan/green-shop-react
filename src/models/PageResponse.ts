export type PageResponse<T> = {
  hasNext: boolean;
  data: T[];
};
