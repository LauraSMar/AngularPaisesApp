import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
 
})


export class VerPaisComponent {

  constructor(
    private activateRoute:ActivatedRoute,
    private CountryService:CountryService
    ) { }

     pais! : Country;
  ngOnInit():void {
  
   this.activateRoute.params
    .pipe(
       switchMap(( {id}) => this.CountryService.getCountrybyId( id)),
       tap ( console.log) 
    )
    .subscribe( pais => this.pais! = pais);
          
   
  }
}


