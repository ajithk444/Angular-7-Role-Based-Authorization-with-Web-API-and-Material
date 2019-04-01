import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent {
  @Input() stickerID: number;
  @Input() stickerText: string;
  @Input() topValue: number;
  @Input() leftValue: number;
  @Output() selected = new EventEmitter();


  onSelected(){
    this.selected.emit({stickerID: this.stickerID});
    console.log("Selected stickerID" + this.stickerID);
  }

}