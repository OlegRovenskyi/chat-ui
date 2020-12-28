import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';
import { MessageFormData } from './create-message/create-message.models';
import { FullMessageInfo } from './chat-room.models';

@Injectable()
export class ChatRoomService {

  constructor(private socket: Socket) { }

  public sendMessage(messageInfo: MessageFormData): void {
    this.socket.emit('message', messageInfo);
  }

  public addUser(username: string): void {
    this.socket.emit('add-user', username);
  }

  public getMessage(): Observable<FullMessageInfo> {
    return this.socket
      .fromEvent('message');
  }

  public getListOfUsers(): void {
    this.socket.emit('get-list-of-users');
  }

  public listOfUsers(): Observable<string[]> {
    return this.socket
      .fromEvent('list-of-users');
  }
}
