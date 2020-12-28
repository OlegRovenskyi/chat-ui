import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageFormData } from './create-message.models';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-message',
  templateUrl: 'create-message.component.html',
  styleUrls: ['create-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateMessageComponent implements OnInit {
  public form!: FormGroup;

  @Output()
  public dataChange = new EventEmitter<MessageFormData>();

  public constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    const config: any = {
      message: [''],
    };

    this.form = this.fb.group(config as any);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      if (_.isEmpty(this.form.value.message)) { return; }

      this.dataChange.emit({
        message: this.form.value.message,
        time: new Date().getTime(),
      });
      this.resetForm();
    }
  }

  private resetForm(): void {
    this.form.get('message')?.patchValue('');
  }
}
