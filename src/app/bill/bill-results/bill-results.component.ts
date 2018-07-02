import { Component, OnInit } from '@angular/core';

import { BillService } from '../bill.service';
import { BillData } from '../bill-data.model';

import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-bill-results',
  templateUrl: './bill-results.component.html',
  styleUrls: ['./bill-results.component.css']
})
export class BillResultsComponent implements OnInit {
  billData: BillData[] = [];
  didFail = false;
  user: BillData;
  lowerIsBetter = false;
  filter = 'days';

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.user = this.billService.userData;
    this.billService.dataEdited.subscribe(
      () => this.user = this.billService.userData
    );
    this.billService.dataLoaded.subscribe(
      (data: BillData[]) => {
        this.billData = data;
      }
    );
    this.billService.dataLoadFailed.subscribe(
      (didFail: boolean) => this.didFail = didFail
    );
  }

  onFilter(filter: string) {
    this.filter = filter;
  }

  onSelectLower(isBetter: boolean) {
    this.lowerIsBetter = isBetter;
  }

  getListGroupItemClass(item: BillData) {
    if (+item[this.filter] === +this.user[this.filter]) {
      return 'list-group-item-warning';
    }
    if (this.lowerIsBetter) {
      return this.user[this.filter] < item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
    } else {
      return this.user[this.filter] > item[this.filter] ? 'list-group-item-success' : 'list-group-item-danger';
    }
  }

  onStartSetData () {
    this.billService.dataEdited.next(false);
  }

  onGetResults() {
    this.billService.onRetrieveData();
  }
  onClearData() {
    this.billService.onDeleteData();
  }

   makePDF() {

     var element = document.getElementById('main');
     html2pdf(element);


}
