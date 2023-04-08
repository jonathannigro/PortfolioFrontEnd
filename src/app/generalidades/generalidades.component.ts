import { Component } from '@angular/core';
import { persona } from '../Modelo/persona.modelo';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-generalidades',
  templateUrl: './generalidades.component.html',
  styleUrls: ['./generalidades.component.css']
})
  
export class GeneralidadesComponent {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}
