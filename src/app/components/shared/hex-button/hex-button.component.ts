import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hex-button',
  templateUrl: './hex-button.component.html',
  styleUrls: ['./hex-button.component.scss']
})
export class HexButtonComponent {
  @Input () text: string = ''; 
  @Input () bgColor: string = '#fbd000'; 
  @Input () color: string = '#ffffff'; 
  @Output () click: EventEmitter<string> = new EventEmitter();

  @Input()
  set background(value :string) {
    this.bgColor = value;
  }
}
