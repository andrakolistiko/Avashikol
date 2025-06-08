import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
   imports: [
      ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class ContactComponent {
  contact: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]*$/)]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contact.valid) {
      const { email, usuario, mensaje } = this.contact.value;
      console.log('Usuario:', usuario);
      console.log('Correo:', email);
      console.log('Mensaje:', mensaje);
      this.submitted = true;
      this.contact.reset();
    } else {
      alert('Por favor completa todos los campos correctamente 🛑');
    }
  }
}
