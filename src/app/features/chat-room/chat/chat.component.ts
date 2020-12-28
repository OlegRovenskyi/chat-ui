import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ChatMessageComponent } from '../chat-message';
import { FullMessageInfo } from '../chat-room.models';

import * as _ from 'lodash';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChatComponent implements OnChanges {
  @Input()
  public message!: FullMessageInfo | null;

  @Output()
  public setUserIdentifier = new EventEmitter<string>();

  @ViewChild('chatMessage', {read: ViewContainerRef}) target!: ViewContainerRef;
  private componentRef?: ComponentRef<ChatMessageComponent>;

  private messageIndex = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!_.isEmpty(changes.message.currentValue)) {
      this.addMessage(changes.message.currentValue);
    }
  }

  public addMessage(messageInfo: FullMessageInfo): void {
    const chatMessageComponent = this.componentFactoryResolver.resolveComponentFactory(ChatMessageComponent);
    this.componentRef = this.target.createComponent(chatMessageComponent);
    this.componentRef.instance.index = this.messageIndex;
    this.componentRef.instance.messageInfo = messageInfo;
    this.messageIndex++;
  }
}
