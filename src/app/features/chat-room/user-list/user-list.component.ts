import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserIdentifier } from '../chat-room.models';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserListComponent {
  @Input()
  public listOfUsers!: string[];

  @Output()
  public setUserIdentifier = new EventEmitter<UserIdentifier>();

  public userIdentifier(): void {
    this.setUserIdentifier.emit({ symbol: '@' });
  }
}
