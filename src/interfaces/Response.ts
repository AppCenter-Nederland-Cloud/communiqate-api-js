export interface Errors {
  [key: string]: string | string[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: Errors;
}
