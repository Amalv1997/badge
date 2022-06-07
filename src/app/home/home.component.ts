import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peopledata=[{
    slno:"",
    name:"",
    review:"",
    imageurl:""
  }]

  constructor(private peopleservice:PeopleService) { }

  ngOnInit(): void {

    this.peopleservice.getpeople()
    .subscribe((data)=>{
        this.peopledata=JSON.parse(JSON.stringify(data))

    })
  }

}
