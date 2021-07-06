import { ComputadorService } from './../../../../services/computador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Computador } from 'src/app/model/Computador';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  dono! : String;
  placamae! : String;
  processador! : String;
  memoria! : Number;
  armazenamento! : String;
  fonte! : String;

  cadastros = new MatTableDataSource<Computador>();
  
  constructor(
    private service: ComputadorService, 
    private router: Router,
    private snack: MatSnackBar
    ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let cadastrar = new Computador();
    cadastrar.dono = this.dono;
    cadastrar.placamae = this.placamae;
    cadastrar.processador = this.processador;
    cadastrar.memoria = this.memoria;
    cadastrar.armazenamento = this.armazenamento;
    cadastrar.fonte = this.fonte;
    

    this.service.cadastrar(cadastrar).subscribe((cadastrar) => {
      console.log(cadastrar);
      this.snack.open("Novo cadastro", "Cadastro", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
    });
    this.router.navigate([""]);
    });
  }
}
