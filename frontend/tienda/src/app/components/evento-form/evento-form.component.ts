import { Component } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTACIÓN CORRECTA

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css'],
    standalone: true,
imports: [CommonModule, FormsModule]

})
export class EventoFormComponent {
  nuevoEvento: Evento = { titulo: '', descripcion: '', fecha: '', lugar: '', precio: 0, imagen: '' };

  constructor(private eventoService: EventoService) {}

  agregar() {
    this.eventoService.addEvento(this.nuevoEvento).subscribe(() => {
      alert('Evento agregado');
      this.nuevoEvento = { titulo: '', descripcion: '', fecha: '', lugar: '', precio: 0, imagen: '' };
    });
  }
}
