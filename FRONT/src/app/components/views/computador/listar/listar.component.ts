import { Computador } from './../../../../model/Computador';
import { ComputadorService } from '../../../../services/computador.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  cadastros: Computador[] = [];

  _cadastros!: MatTableDataSource<Computador>;
  displayedColumns: string[] = ['id', 'dono', 'placamae', 'processador', 
  'memoria', 'armazenamento', 'fonte'];

  constructor(private service: ComputadorService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaComputadores) => {
      this.cadastros = listaComputadores;
      console.log(this.cadastros);
    });
  }

}
