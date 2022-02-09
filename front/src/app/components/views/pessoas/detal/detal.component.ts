import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, PessoasService } from '../pessoas.service';
@Component({
  selector: 'app-detal',
  templateUrl: './detal.component.html',
  styleUrls: ['./detal.component.scss'],
})
export class DetalComponent implements OnInit {
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

  voltar(): void {
    this.router.navigate(['/']);
  }
}
