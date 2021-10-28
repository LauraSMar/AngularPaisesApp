import { Component, Output, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string > = new EventEmitter();
  @Output() onDebounce :EventEmitter<string > = new EventEmitter();

  @Input() placeholder : string =""
  debouncer : Subject<string> = new Subject();

  query:string = "";

  ngOnInit() {
    this.debouncer
     .pipe(debounceTime(300))
     .subscribe( valor => {
      this.onDebounce.emit(valor);
      console.log("debouncer",valor);
    });
  }

  search () {
    this.onEnter.emit( this.query );
  }
  
  teclaPresionada() {
    
     this.debouncer.next(this.query);

  }
  
  

 
}
