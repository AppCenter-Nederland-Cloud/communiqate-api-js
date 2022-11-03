import { BaseResource } from "./BaseResource";
import { ApiResponse } from "../interfaces/Response";
import {
  AssignOperatorRequest,
  CheckAutoPilotEnabledResponse,
  DeleteMessageRequest,
  SendMessageRequest,
  ToggleAutoPilotRequest,
  UpdateMessageRequest,
} from "../interfaces/Conversations";
import { Message } from "../interfaces/Messages";

export class Conversations extends BaseResource {
  /**
   * Check if the autopilot is currently enabled for the conversation
   * @param phoneOrConversationId
   */
  public async checkAutoPilotEnabled(
    phoneOrConversationId: string
  ): Promise<ApiResponse<CheckAutoPilotEnabledResponse>> {
    return this.api
      .getAxiosClient()
      .get(`/conversations/${phoneOrConversationId}/autopilot`);
  }

  /**
   * Toggle the autopilot for the conversation
   * @param phoneOrConversationId
   * @param data
   */
  public async toggleAutoPilot(
    phoneOrConversationId: string,
    data: ToggleAutoPilotRequest
  ): Promise<ApiResponse<any>> {
    return this.api
      .getAxiosClient()
      .patch(`/conversations/${phoneOrConversationId}/autopilot`, data);
  }

  /**
   * Assign an operator to the conversation
   * @param phoneOrConversationId
   * @param data
   */
  public async assignOperator(
    phoneOrConversationId: string,
    data: AssignOperatorRequest
  ): Promise<ApiResponse<any>> {
    return this.api
      .getAxiosClient()
      .post(`/conversations/${phoneOrConversationId}/operator/assign`, data);
  }

  /**
   * Send a template message in the conversation
   * @param phoneOrConversationId
   * @param data
   */
  public async sendMessage(
    phoneOrConversationId: string,
    data: SendMessageRequest
  ): Promise<ApiResponse<Message>> {
    return this.api
      .getAxiosClient()
      .post(`/conversations/${phoneOrConversationId}/messages`, data);
  }

  /**
   * Update the given message.
   *  - Only works for messages with the status PENDING_QUEUE.
   * @param phoneOrConversationId
   * @param data
   */
  public async updateMessage(
    phoneOrConversationId: string,
    data: UpdateMessageRequest
  ): Promise<ApiResponse<Message>> {
    return this.api
      .getAxiosClient()
      .patch(`/conversations/${phoneOrConversationId}/messages`, data);
  }

  /**
   * Delete the given message.
   * - Only works for messages that have the status PENDING_QUEUE
   * @param phoneOrConversationId
   * @param data
   */
  public async deleteMessage(
    phoneOrConversationId: string,
    data: DeleteMessageRequest
  ): Promise<ApiResponse<any>> {
    return this.api
      .getAxiosClient()
      .delete(`/conversations/${phoneOrConversationId}/messages`, {
        params: data,
      });
  }
}
