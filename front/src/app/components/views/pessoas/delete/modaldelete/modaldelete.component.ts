import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, PessoasService } from '../../pessoas.service';

@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.scss'],
})
export class ModaldeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private pessoaService: PessoasService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ModaldeleteComponent>
  ) {}

  pessoa: Pessoa;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.pessoaService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }

  deletar() {
    this.pessoaService.delete(this.pessoa.id as string).subscribe(() => {
      this.pessoaService.showMessage(
        'Pessoa deletada do sistema com sucessso!'
      );
      this.router.navigate(['/']);
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
