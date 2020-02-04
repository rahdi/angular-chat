export class User {
  user_id: number;
  user_name:string;
  user_password: string;

  constructor(user_id: number, user_name: string, user_password: string) {
     this.user_id = user_id;
     this.user_name = user_name;
     this.user_password = user_password
  }
}