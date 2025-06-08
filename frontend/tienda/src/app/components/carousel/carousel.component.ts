import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    {
      img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=800&q=80',
      alt: 'Futuro tecnológico',
      title: 'Tecnología del Futuro',
      text: 'Descubre las innovaciones que están transformando el mañana, hoy.'
    },
    {
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      alt: 'Conferencia tech',
      title: 'Conferencias y Hackathons',
      text: 'Conecta con mentes brillantes y crea soluciones disruptivas.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      alt: 'Innovación colaborativa',
      title: 'Innovación Colaborativa',
      text: 'Impulsa proyectos que fusionan creatividad y tecnología para cambiar el mundo.'
    }
  ];
}
