import { ApiClient } from "../ApiClient";

export class BaseResource {
  protected readonly api: ApiClient;

  constructor(client: ApiClient) {
    this.api = client;
  }
}
