import { BaseResource } from "./BaseResource";
import { ApiResponse, Conversation, UpdateConversation } from "../interfaces";

export class Conversations extends BaseResource {
  public async get(conversationId: string): Promise<ApiResponse<Conversation>> {
    return this.api.getAxiosClient().get(`/conversations/${conversationId}`);
  }

  public async update(
    conversationId: string,
    data: UpdateConversation
  ): Promise<ApiResponse<Conversation>> {
    return this.api
      .getAxiosClient()
      .patch(`/conversations/${conversationId}`, data);
  }
}
