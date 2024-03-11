import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent  implements OnInit {
  isModalOpen = false;
  lien:any;
  constructor() { }

  ngOnInit() {}


  setOpen(isOpen: boolean,lien:any) {
    this.isModalOpen = isOpen;
    this.lien=lien;
  }

}
