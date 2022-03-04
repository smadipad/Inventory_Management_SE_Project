import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}
  addSupplierForm!: FormGroup;

  ngOnInit(): void {
    this.addSupplierForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNum: ['', Validators.required],
      emailId: ['', Validators.required],
    });
  }
}
