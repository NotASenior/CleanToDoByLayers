import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MaterializeHelper} from '../../../materialize-helper';

declare var M;

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  @Input() title: string;
  @Output() noClick = new EventEmitter();
  @Output() yesClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    MaterializeHelper.initModal();
  }

  ngAfterViewInit(): void {
    MaterializeHelper.initModal();
  }

  onYesClick() {
    this.yesClick.emit();
  }

  onNoClick() {
    this.noClick.emit();
  }
}
