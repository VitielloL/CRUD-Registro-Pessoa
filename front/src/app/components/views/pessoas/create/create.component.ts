import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  pessoas: Pessoa = {
    nome: '',
    prof: '',
    local: '',
  };
  constructor(private pessoa: PessoasService, private router: Router) {}

  ngOnInit(): void {}

  createPessoa() {
    this.pessoa.create(this.pessoas).subscribe(() => {
      this.pessoa.showMessage('Pessoa cadastrada!');
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
