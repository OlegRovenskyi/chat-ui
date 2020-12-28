import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatRoomService } from './chat-room.service';
import { MessageFormData } from './create-message/create-message.models';

@Component({
  selector: 'app-chat-room',
  templateUrl: 'chat-room.component.html',
  styleUrls: ['chat-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChatRoomComponent {
  public isAddedUser = false;

  public constructor(
    public chatRoomService: ChatRoomService,
  ) {}

  public sendMessage(messageInfo: MessageFormData): void {
    this.chatRoomService.sendMessage(messageInfo);
  }

  public addUserName(username: string): void {
    this.isAddedUser = true;
    this.chatRoomService.addUser(username);

    this.chatRoomService.getListOfUsers();
  }
}
