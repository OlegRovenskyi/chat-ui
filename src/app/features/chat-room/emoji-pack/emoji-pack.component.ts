import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-pack',
  templateUrl: 'emoji-pack.component.html',
  styleUrls: ['emoji-pack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EmojiPackComponent {
  public toggled = false;
  public displayEmoji = 'grinning';

  @Output()
  public selectedEmoji = new EventEmitter<any>();

  @HostListener('document:click', ['$event'])
  clickout(event: Event): void {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.toggled = false;
    }
  }

  public addEmoji(data: any): void {
    this.displayEmoji = data.emoji;
    this.selectedEmoji.emit(data.emoji);
  }

  constructor(private eRef: ElementRef) {
  }
}
