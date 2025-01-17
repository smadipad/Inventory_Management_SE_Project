import { Component, OnInit } from '@angular/core';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.css'],
})
export class SupplierTableComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  displayedColumns = [
    'supplierId',
    'name',
    'address',
    'phone',
    'email',
    'fax',
    'otherDetails',
  ];

  add_supplier() {
    this.dialog.open(AddSupplierComponent, {
      width: '40%',
    });
  }

  datasource = supplierData;
}

export interface suppliers {
  supplierId: number;
  name: string;
  address: string;
  phone: number;
  email: string;
  fax: number;
  otherDetails: string;
}

const supplierData: suppliers[] = [
  {
    supplierId: 1,
    name: 'ABC',
    address: 'abcaddress',
    phone: 12345,
    email: 'abc@gmail.com',
    fax: 123456,
    otherDetails: 'nothing',
  },
  {
    supplierId: 1,
    name: 'ABC',
    address: 'abcaddress',
    phone: 12345,
    email: 'abc@gmail.com',
    fax: 123456,
    otherDetails: 'nothing',
  },
  {
    supplierId: 1,
    name: 'ABC',
    address: 'abcaddress',
    phone: 12345,
    email: 'abc@gmail.com',
    fax: 123456,
    otherDetails: 'nothing',
  },
  {
    supplierId: 1,
    name: 'ABC',
    address: 'abcaddress',
    phone: 12345,
    email: 'abc@gmail.com',
    fax: 123456,
    otherDetails: 'nothing',
  },
];
