import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DilogComponent } from '../dilog/dilog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listdatas = [
    {
      name: 'Hello',
      date: '20-10-2020'
    },
    {
      name: 'naruto',
      date: '20-10-2020'
    }
  ]
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DilogComponent, {
      width: '250px',
      height: 'auto'
    });
  }
}
