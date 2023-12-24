import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Config } from '../config';
import { LocalStorageService } from 'src/app/common/localstorage.srvice';

@Component({
  selector: 'app-giftbox',
  templateUrl: './giftbox.component.html',
  styleUrls: ['./giftbox.component.scss']
})
export class GiftboxComponent implements OnInit, OnChanges {
  @ViewChild('gift', { static: false }) giftBox!: ElementRef;
  @Input() clicked = false

  countArray: number[] = [];

  ngOnInit(): void {
    for (let i = 0; i <= 40; i++) {
      this.countArray.push(i);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (this.clicked == true) {
        this.onClickGiftBox()
      }
  }

  onClickGiftBox() {
    const element = this.giftBox.nativeElement as HTMLElement;
    element.classList.add('grow-fade-out');
    
    element.addEventListener('animationend', () => {
      element.style.display = 'none';
    });
  }
}
