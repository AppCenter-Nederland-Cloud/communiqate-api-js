import { BaseResource } from "./BaseResource";
import {
  ApiResponse,
  ContactAttributeValue,
  SetContactAttributeRequest,
  UnsetContactAttributeRequest,
} from "../interfaces";

export class Contacts extends BaseResource {
  /**
   * Get all contact attribute values for the contact.
   * @param phoneOrContactId
   */
  public async getContactAttributeValues(
    phoneOrContactId: string
  ): Promise<ApiResponse<ContactAttributeValue[]>> {
    return this.api
      .getAxiosClient()
      .get(`/contacts/${phoneOrContactId}/attributes`);
  }

  /**
   * Set a contact attribute value for the contact.
   * @param phoneOrContactId
   * @param data
   */
  public async setContactAttributeValue(
    phoneOrContactId: string,
    data: SetContactAttributeRequest
  ): Promise<ApiResponse<any>> {
    return this.api
      .getAxiosClient()
      .post(`/contacts/${phoneOrContactId}/attributes`, data);
  }

  /**
   * Unset a contact attribute value for the contact.
   * @param phoneOrContactId
   * @param data
   */
  public async unsetContactAttributeValue(
    phoneOrContactId: string,
    data: UnsetContactAttributeRequest
  ): Promise<ApiResponse<any>> {
    return this.api
      .getAxiosClient()
      .delete(`/contacts/${phoneOrContactId}/attributes`, { params: data });
  }
}
