import BaseAPI from '../utils/baseApi';

export interface ICreateChat {
  title: string;
}

export interface IAddUserChat {
  users: string[];
  chatId: string;
}

class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats() {
    return this.http.get('');
  }

  createChat(data: ICreateChat) {
    return this.http.post('', { data });
  }

  getChatToken(id: string) {
    return this.http.post<{token: string}>(`/token/${id}`);
  }

  addUserInChat(data: IAddUserChat) {
    return this.http.put(`/users`, { data });
  }

  removeUserInChat(data: IAddUserChat) {
    return this.http.delete(`/users`, { data });
  }
}

export default new ChatAPI();
