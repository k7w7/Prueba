import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/Servicios/cargo.service';
import { DepartamentoService } from 'src/app/Servicios/departamento.service';
import { Cargo, Departamento } from 'src/app/Type/Type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public c: Cargo[] = []
  public d: Departamento[] = []

  constructor(private cargo: CargoService, private departamento: DepartamentoService){
  }
  ngOnInit(){
    this.cargo.getCargo().subscribe(data => this.c = data )
    this.departamento.getDepartamento().subscribe(data => this.d  = data)
  }

}
