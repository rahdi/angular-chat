export class Message {
  message_id: number;
  message_From_user_id: number;
  message_to_user_id: number;
  message_text: string;
  message_date: Date;

  constructor(
    message_id: number,
    message_From_user_id: number,
    message_to_user_id: number,
    message_text: string,
    message_date: Date
  ) {
    this.message_id = message_id;
    this.message_From_user_id = message_From_user_id;
    this.message_to_user_id = message_to_user_id;
    this.message_text = message_text;
    this.message_date = message_date;
  }

}
