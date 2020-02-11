import { Component, OnInit } from '@angular/core';
import {DateServiceService} from '../service/date-service.service';
import { Router } from "@angular/router";
import { GetDateType} from '../model/date-model'
@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  users =[
    {
        "day": "Monday",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "Tuesday",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "Wednsday",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "th",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "friday",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "sat",
        "urlParameter": false,
        "dateTime": 1580554311616
    },
    {
        "day": "sunday",
        "urlParameter": false,
        "dateTime": 1580554311616
    }
];
  constructor(private router: Router,private dateSerivce: DateServiceService) { }
  ngOnInit() {

     this.dateSerivce.getData().subscribe(responseData=>{
      //this.users = responseData;
     })
  }
  editData(user): void {
    let id = user.day;
    this.router.navigate(['edit', { id }]);
    
  };

}
