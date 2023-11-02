import { Component, OnInit  } from '@angular/core';
import { Cargo, Departamento, Usuario } from '../Type/Type';
import { CargoService } from '../Servicios/cargo.service';
import { DepartamentoService } from '../Servicios/departamento.service';
import { UsuarioService } from '../Servicios/usuario.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit {
  
  public u: Usuario[] = [];
  public c: Cargo[] = []
  public d: Departamento[] = []
  
  displayedColumns: string[] = ['nombreUsuario', 'primerNombre', 'primerApellido', 'departamento.nombre', 'cargo.nombre', 'Acciones']
  
  constructor(private cargo: CargoService, private departamento: DepartamentoService, private usuario: UsuarioService 
    , public dialog: MatDialog){
    
  }
  ngOnInit(){
    this.cargo.getCargo().subscribe(data => this.c = data )
    this.departamento.getDepartamento().subscribe(data => this.d  = data)
    this.usuario.getUsuario().subscribe(data => this.u = data)
    
    setTimeout(() => {
      console.log(this.u)
    }, 3000);
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: "auto",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

} 