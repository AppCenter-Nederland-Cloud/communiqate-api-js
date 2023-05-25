import { BaseResource } from "./BaseResource";
import {
  ApiResponse,
  Contact,
  ContactAttribute,
  CreateContact,
  SetContactAttribute,
  UpdateContact,
} from "../interfaces";

export class Contacts extends BaseResource {
  public async get(phoneOrContactId: string): Promise<ApiResponse<Contact>> {
    return this.api.getAxiosClient().get(`/contacts/${phoneOrContactId}`);
  }

  public async list(): Promise<ApiResponse<Contact[]>> {
    return this.api.getAxiosClient().get(`/contacts`);
  }

  public async create(data: CreateContact): Promise<ApiResponse<Contact>> {
    return this.api.getAxiosClient().post(`/contacts`, data);
  }

  public async update(
    phoneOrContactId: string,
    data: UpdateContact
  ): Promise<ApiResponse<Contact>> {
    return this.api
      .getAxiosClient()
      .patch(`/contacts/${phoneOrContactId}`, data);
  }

  public async delete(phoneOrContactId: string): Promise<ApiResponse<null>> {
    return this.api.getAxiosClient().delete(`/contacts/${phoneOrContactId}`);
  }

  public async getAttributes(
    contactId: string
  ): Promise<ApiResponse<ContactAttribute[]>> {
    return this.api.getAxiosClient().get(`/contacts/${contactId}/attributes`);
  }

  public async setSingleAttribute(
    contactId: string,
    contactAttributeId: string,
    value?: string
  ): Promise<ApiResponse<ContactAttribute>> {
    return this.api
      .getAxiosClient()
      .post(`/contactAttributes/set/${contactAttributeId}/${contactId}`, {
        value: value,
      });
  }

  public async setMultipleAttributes(
    contactId: string,
    data: SetContactAttribute[]
  ): Promise<ApiResponse<ContactAttribute[]>> {
    return this.api
      .getAxiosClient()
      .post(`/contactAttributes/set/${contactId}`, { items: data });
  }
}
