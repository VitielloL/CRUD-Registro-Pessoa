import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  displayedColumns = ['nome', 'prof', 'local', 'detal', 'action'];
  pessoas: Pessoa[] = [];

  constructor(private pessoa: PessoasService, private router: Router) {}

  ngOnInit(): void {
    this.pessoa.read().subscribe((pessoas) => {
      this.pessoas = pessoas;
    });
  }
}
