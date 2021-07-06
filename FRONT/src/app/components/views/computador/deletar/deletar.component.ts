import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ComputadorService } from 'src/app/services/computador.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {
  id! : string;

  constructor(
    private service: ComputadorService,
    private router: Router,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {}

  deletar(id: string): void{
    console.log(this.deletar);
    this.service.deletar(id).subscribe((id) => {
      console.log(id);
      this.snack.open("deletado ", "",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
    });
    this.router.navigate([""]);
      this.ngOnInit
    });
  }


}
