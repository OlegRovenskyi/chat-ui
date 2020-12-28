import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserListComponent {
  @Input()
  public listOfUsers!: string[];
}
