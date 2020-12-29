import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormGroupConfig } from '../chat-room.models';
import { UserConfig } from './add-user.models';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AddUserComponent implements OnInit {
  public form!: FormGroup;

  @Output()
  public addUser = new EventEmitter<any>();

  public constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    const config: FormGroupConfig<UserConfig> = {
      username: [''],
    };

    this.form = this.fb.group(config);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      if (_.isEmpty(this.form.value.username)) { return; }

      this.addUser.emit(this.form.value.username);
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.form.get('user-name')?.patchValue('');
  }
}
