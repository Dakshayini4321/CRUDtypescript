import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  countriesApi: string ='https://restcountries.com/v3.1/all';

  countries: any;

  constructor ( private abc: HttpClient) {}
  ngOnInit(): void {
    this.countries = this.abc.get(this.countriesApi).subscribe((res) => {
      this.countries = res;
      console.log (this.countries);
    })
   
  }
 
}
