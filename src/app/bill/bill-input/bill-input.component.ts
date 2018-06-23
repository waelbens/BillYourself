import { Component, OnInit, ViewChild } from '@angular/core';
import { BillData } from '../bill-data.model';
import { NgForm } from '@angular/forms';

import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-input',
  templateUrl: './bill-input.component.html',
  styleUrls: ['./bill-input.component.css']
})
export class BillInputComponent implements OnInit {
  @ViewChild('billForm') form: NgForm;
  isLoading = false;
  couldNotLoadData = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.billService.dataIsLoading.subscribe(
      (isLoading: boolean) => this.isLoading = isLoading
    );
    this.billService.dataLoadFailed.subscribe(
      (didFail: boolean) => {
        this.couldNotLoadData = didFail;
        this.isLoading = false;
      }
    );
  }

  onSubmit() {
    const data: BillData = {
      days: this.form.value.days as number,
      income: this.form.value.income as number
    };
    this.billService.onStoreData(data);
  }

//  onFetchStoredData() {
//    this.billService.onRetrieveData(false);
//  }
}
