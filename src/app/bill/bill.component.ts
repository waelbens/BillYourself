import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  doInput = true;
  constructor(private billService: BillService) {}
  ngOnInit() {
    this.billService.dataEdited.subscribe(
      (edited: boolean) => this.doInput = !edited
    );
  }
}
