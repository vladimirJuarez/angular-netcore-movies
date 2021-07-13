import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  @Input()  
  titulo : String;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;

  timer: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    console.log('On afeter View Init');
    this.ratingComponent.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();    
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('On Check');
  }
  ngOnChanges(changes: SimpleChanges): void {    
    console.log('On changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('On Init');        
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }

}
