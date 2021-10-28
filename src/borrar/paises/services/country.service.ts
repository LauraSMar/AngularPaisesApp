
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl : string = "https://restcountries.com/v3.1";
  
  constructor( private http: HttpClient) {}

   
   searchCountry( query:string) : Observable <Country[]> {
  
    const url:string = `${ this.apiUrl }/name/${ query }` ;
    console.log(url);
    
    return  this.http.get <Country[]>( url );
       
   }
   
   searchCapital( query:string) : Observable <Country[]> {
  
    const url:string = `${ this.apiUrl }/capital/${ query }` ;
    console.log(url);
    
    return  this.http.get <Country[]>( url );
       
   }
   getCountrybyId( id:string) : Observable <Country[]> {
  
    const url:string = `${ this.apiUrl }/capital/${ id }` ;
    console.log(url);
    
    return  this.http.get <Country[]>( url );
       
   }

}
