import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  
})
export class PorCapitalComponent{

  constructor(private CountryService:CountryService) { }

  error:boolean = false;
  query:string = "";
  countries : Country[] = [];
  
  capital( query :string) {
     this.error = false;
     this.query = query;

     this.CountryService.searchCapital( this.query)
      .subscribe( paises => {
         if( !this.error) {
          this.countries = paises;
          console.log (this.countries);
         
         }
         
      }, (err) => {
        this.error = true;
        this.countries = [];
      });

  }

  sugerencias(query :string){
     this.error = false;
     // create method
  }

}
