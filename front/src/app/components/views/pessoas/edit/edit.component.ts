import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private router: Router,
    private pessoaService: PessoasService,
    private route: ActivatedRoute
  ) {}

  pessoa: Pessoa;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.pessoaService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }

  update() {
    this.pessoaService.update(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage(
        'Dados da pessoa atualizados com sucesso!'
      );
      this.router.navigate(['/']);
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
