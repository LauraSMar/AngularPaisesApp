import { Component, Input } from '@angular/core';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
 
})
export class PaisTableComponent {
  @Input () countries : Country[] = [];
  constructor( private CountryService:CountryService) { }

  ngOnInit(): void {
  }

}
