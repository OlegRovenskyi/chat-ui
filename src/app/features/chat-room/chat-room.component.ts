import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ChatRoomService } from './chat-room.service';
import { MessageFormData } from './create-message/create-message.models';
import { UserIdentifier } from './chat-room.models';

@Component({
  selector: 'app-chat-room',
  templateUrl: 'chat-room.component.html',
  styleUrls: ['chat-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChatRoomComponent implements OnInit {
  public isAddedUser = false;
  public identifier!: { symbol: string };
  public screenHeight!: number;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenHeight = window.innerHeight;
  }

  public constructor(
    public chatRoomService: ChatRoomService,
  ) {}

  ngOnInit() {
    this.screenHeight = window.innerHeight;
  }

  public sendMessage(messageInfo: MessageFormData): void {
    this.chatRoomService.sendMessage(messageInfo);
  }

  public addUserName(username: string): void {
    this.isAddedUser = true;
    this.chatRoomService.addUser(username);

    this.chatRoomService.getListOfUsers();
  }

  public addUserIdentifier(identifier: UserIdentifier): void {
    this.identifier = identifier;
  }
}
