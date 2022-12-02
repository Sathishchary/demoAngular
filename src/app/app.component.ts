import { Component, OnInit } from '@angular/core';
import { RefService } from './ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Demo';
  isValid = true;
  countries:any[] = [];
  constructor(public refService: RefService) {

  }
  ngOnInit(){
    this.getCountries();
  }

  getCountries(){
     this.refService.getCountries().subscribe((result:any)=>{
        console.log(result);
        this.countries = result.data;
     }, error=>{
       console.error(error);
     })
  }
}
