import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Errors } from "./interfaces";
import { ContactAttributes } from "./resources/ContactAttributes";
import { Contacts } from "./resources/Contacts";
import { Conversations } from "./resources/Conversations";
import { Messages } from "./resources/Messages";

export class ApiClient {
  protected readonly endpoint: string = "https://api.acn-cloud.nl/api/v1";
  protected readonly apiKey: string;
  protected readonly organizationId: string;
  protected readonly axiosClient: AxiosInstance;

  /**
   * Construct the API client
   * @param apiKey
   * @param organizationId
   * @param endpoint
   * @param client
   */
  constructor(
    apiKey: string,
    organizationId: string,
    endpoint?: string,
    client?: AxiosInstance
  ) {
    this.apiKey = apiKey;
    this.organizationId = organizationId;

    if (endpoint) {
      this.endpoint = endpoint;
    }

    if (client) {
      this.axiosClient = client;
    } else {
      this.axiosClient = axios.create({
        baseURL: `${this.endpoint}/${this.organizationId}/communiqate`,
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
   * Get the API key
   */
  public getOrganizationId(): string {
    return this.organizationId;
  }

  /**
   * Get the axios client instance
   */
  public getAxiosClient(): AxiosInstance {
    return this.axiosClient;
  }

  public contacts() {
    return new Contacts(this);
  }

  public contactAttributes() {
    return new ContactAttributes(this);
  }

  public conversations() {
    return new Conversations(this);
  }

  public messages() {
    return new Messages(this);
  }
}
