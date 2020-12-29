import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateMessageConfig, MessageFormData } from './create-message.models';
import * as _ from 'lodash';
import { FormGroupConfig, UserIdentifier } from '../chat-room.models';

@Component({
  selector: 'app-create-message',
  templateUrl: 'create-message.component.html',
  styleUrls: ['create-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CreateMessageComponent implements OnInit, OnChanges {
  public form!: FormGroup;

  @Input()
  public identifier!: UserIdentifier;

  @Output()
  public dataChange = new EventEmitter<MessageFormData>();

  @ViewChild('messageInput', { static: true }) public messageInput!: ElementRef;

  public constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    const config: FormGroupConfig<CreateMessageConfig> = {
      message: [''],
    };

    this.form = this.fb.group(config);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (_.isEmpty(changes.identifier.currentValue)) { return; }

    const formControl = this.form.get('message');
    formControl?.patchValue(`${formControl?.value} ${this.identifier.symbol}`);
    this.messageInput.nativeElement.focus();
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
