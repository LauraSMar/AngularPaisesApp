import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button { margin-right:5px;}`
  ]
})

export class PorRegionComponent {

 regiones: string [] = ["EU","EFTA","CARICOM","PA","AU","USAN","EEU","AL","ASEAN","CAIS","CEFTA","NAFTA","SAARC"];
 regionActiva : string = "";
 paises : Country [] = [];

 constructor(private PaisService:PaisService) { }
 getClassCSS( region :string):string {
  return (region === this.regionActiva) ? ' btn-primary':  ' btn-outline-primary'
}

activarRegion( region:string){
  this.regionActiva = region;
  this.paises = [];
  console.log(region);

  // if( region === this.regionActiva) { return ;} 

  this.PaisService.getPaisPorRegion( region )
    .subscribe( (paises) => {
      this.paises = paises;
      console.log (paises);
    }  );
  

}



}