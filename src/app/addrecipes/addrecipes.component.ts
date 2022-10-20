import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipes',
  templateUrl: './addrecipes.component.html',
  styleUrls: ['./addrecipes.component.css']
})
export class AddrecipesComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  dishes=""
  items=""
  price=""

  readValue=()=>{

    let data={
      "dishes":this.dishes,
  "items":this.items,
  "price":this.price
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (responce)=>{
        console.log(responce)
      }
    )
    alert("ADDED")
    this.dishes=""
this.items=""
this.price=""
  }





  ngOnInit(): void {
  }

}
