import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor';
import {ActoresService} from "../actores.service";
import {Router} from "@angular/router";
import {parsearErroresAPI} from "../../utilidades/utilidades";

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router,private actoreService: ActoresService) { }

  ngOnInit(): void {
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
    this.actoreService.createActor(actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, error => this.errors = parsearErroresAPI(error));
  }

}
