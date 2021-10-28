import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/pais.interface';
import { query } from '@angular/animations';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent  {

  constructor( private CountryService:CountryService) { }
  error:boolean = false;
  query:string = "";
  countries : Country[] = [];
  
  search( query :string) {
     this.error = false;
     this.query = query;

     this.CountryService.searchCountry( this.query)
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

  sugerencias( query:string){

  }
}
