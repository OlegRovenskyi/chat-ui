import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeaderComponent {
  @Input()
  public title = '';
}
