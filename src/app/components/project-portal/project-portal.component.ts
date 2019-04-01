import { Component, OnInit } from '@angular/core';
import {Sticker} from '../../models/Sticker';

import { StickerService } from 'src/app/services/sticker.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-project-portal',
  templateUrl: './project-portal.component.html',
  styleUrls: ['./project-portal.component.css']
})
export class ProjectPortalComponent implements OnInit {

  stickers: Sticker[];
  selectedStickerId : number;

  wbTitle: String = 'Whiteboard Lesson 02';

  constructor(private stickerService: StickerService) {}

  newSticker() {
    this.stickerService.createNewSticker();
    this.stickers = this.stickerService.getStickers();
  }

  onStickerSelected(s) {
    this.selectedStickerId = s.stickerID;
  }

  deleteSelectedSticker() {
    this.stickerService.deleteStickerWithStickerID(this.selectedStickerId);
  }

  ngOnInit() {
    this.stickers = this.stickerService.getStickers();
  }

  tiles: Tile[] = [
    // { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  ];

  addSwimlane() {
    this.tiles.push({ 'text': 'new', 'cols': 1, 'rows': 1, 'color': 'yellow' });
  }

}
