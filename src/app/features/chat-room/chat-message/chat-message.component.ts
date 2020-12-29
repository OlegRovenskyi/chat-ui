import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FullMessageInfo } from '../chat-room.models';

import * as _ from 'lodash';

@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.component.html',
  styleUrls: ['chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ChatMessageComponent {
  @Input()
  public messageInfo!: FullMessageInfo;

  @Input()
  public index = 0;

  public transformMillisecond(millisecond: number): string {
    if (_.isUndefined(millisecond)) { return ''; }

    const date = new Date(millisecond);

    return `${date.getHours()} : ${date.getMinutes()}`;
  }
}
