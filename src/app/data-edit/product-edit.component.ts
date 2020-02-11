import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GetDateType } from "../model/date-model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DateServiceService} from '../service/date-service.service'
import { first } from "rxjs/operators";
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  value: any
  user: any;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,private DateServiceService:DateServiceService) { }

  ngOnInit() {
    this.value = { name: this.route.snapshot.params['id'] };
    this.editForm = this.formBuilder.group({
      day: [],
      dateTime: ['', Validators.required],
    });
    this.DateServiceService.getData()
    .subscribe(data => {
      if(data['day'] == this.value.name){
        this.editForm.setValue(data['day'],data['dateTime']);
      }     
    });

  }

  onSubmit() {
    this.DateServiceService.updateData(this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['']);
      },
  );
  }

}
