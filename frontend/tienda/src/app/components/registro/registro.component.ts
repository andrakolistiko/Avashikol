import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistroService } from '../../services/registro.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent]
})
export class RegistroComponent {
  usuariosRegistrados: any[] = [];
  registro: FormGroup;
  previewImg: string | null = null;
  imagenFile: File | null = null;
  imagenError: string = '';

  constructor(private fb: FormBuilder, private userService: RegistroService) {
    this.registro = this.fb.group({
      nombres: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      cedula: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      username: ['', [Validators.pattern(/^[a-zA-ZÀ-ÿ\s]*$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      birthDate: [''],
      gender: [''],
      location: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
      foto: ['']
    }, { validators: this.matchPasswords });
  }

  matchPasswords(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  soloLetras(event: KeyboardEvent) {
    const char = String.fromCharCode(event.charCode);
    if (!/^[a-zA-ZÀ-ÿ\s]$/.test(char)) event.preventDefault();
  }

  soloNumeros(event: KeyboardEvent) {
    const char = String.fromCharCode(event.charCode);
    if (!/^\d$/.test(char)) event.preventDefault();
  }

  onFileSelected(event: any) {
    this.imagenError = '';
    const file: File = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        this.imagenError = 'Solo se permiten imágenes JPG o PNG 🚫';
        this.imagenFile = null;
        this.previewImg = null;
        return;
      }
      this.imagenFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImg = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  enviar() {
    if (this.registro.valid) {
      const formData = new FormData();
     Object.entries(this.registro.value).forEach(([key, value]) => {
  if (key !== 'foto') {
    formData.append(key, value?.toString() ?? '');
  }
});
    } else {
      alert('Hay errores en el formulario ⚠️');
    }
  }
}
