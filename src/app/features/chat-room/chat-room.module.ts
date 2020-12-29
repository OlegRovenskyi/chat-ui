import { NgModule } from '@angular/core';
import { ChatRoomComponent } from './chat-room.component';
import { components } from './components';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppHeaderModule } from '../../shared/ui/app-header';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatRoomService } from './chat-room.service';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {}
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

    FlexLayoutModule,

    AppHeaderModule,

    PickerModule,
    EmojiModule,

    SocketIoModule.forRoot(config),
  ],
  exports: [
    ChatRoomComponent
  ],
  declarations: [
    ...components,
    ChatRoomComponent,
  ],
  providers: [ChatRoomService],
})
export class ChatRoomModule {
}
