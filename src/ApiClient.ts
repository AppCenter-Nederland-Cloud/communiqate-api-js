import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Errors } from "./interfaces";
import { Conversations } from "./resources/Conversations";
import { Contacts } from "./resources/Contacts";

export class ApiClient {
  protected readonly endpoint: string = "https://api.communiqate.nl/api/v1";
  protected readonly apiKey: string;
  protected readonly axiosClient: AxiosInstance;

  /**
   * Construct the API client
   * @param apiKey
   * @param endpoint
   * @param client
   */
  constructor(apiKey: string, endpoint?: string, client?: AxiosInstance) {
    this.apiKey = apiKey;

    if (endpoint) {
      this.endpoint = endpoint;
    }

    if (client) {
      this.axiosClient = client;
    } else {
      this.axiosClient = axios.create({
        baseURL: this.endpoint,
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey.startsWith("Bearer")
            ? apiKey
            : `Bearer ${apiKey}`,
        },
      });
    }

    this.registerAxiosResponseInterceptor();
  }

  /**
   * Intercepts the response object and parses the errors (if there are any)
   */
  public registerAxiosResponseInterceptor(): void {
    this.axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        const errorObject: Errors = {};

        if (response.data?.errors) {
          Object.keys(response.data?.errors).forEach((err) => {
            errorObject[err] = Object.keys(response.data?.errors[err]);
          });
        }

        return {
          ...response.data,
          errors: errorObject,
        };
      },
      (error: any) => {
        if (error.response) {
          const response = error.response;
          const errorObject: Errors = {};

          if (response.data?.errors) {
            Object.keys(response.data?.errors).forEach((err) => {
              errorObject[err] = Object.keys(response.data?.errors[err]);
            });
          }
          return {
            ...response.data,
            errors: errorObject,
          };
        }
        return error;
      }
    );
  }

  /**
   * Set a custom header for the axios client
   * @param headerName
   * @param headerValue
   * @param group
   */
  public setHeader(
    headerName: string,
    headerValue: string | number | null,
    group = "common"
  ): void {
    // @ts-ignore
    this.axiosClient.defaults.headers[group][headerName] = headerValue;
  }

  /**
   * Get the api endpoint
   */
  public getEndPoint(): string {
    return this.endpoint;
  }

  /**
   * Get the API key
   */
  public getApiKey(): string {
    return this.apiKey;
  }

  /**
   * Get the axios client instance
   */
  public getAxiosClient(): AxiosInstance {
    return this.axiosClient;
  }

  /**
   * Conversations resource
   */
  public conversations() {
    return new Conversations(this);
  }

  /**
   * Contacts resource
   */
  public contacts() {
    return new Contacts(this);
  }
}
