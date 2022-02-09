import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa, PessoasService } from '../pessoas.service';
import { ModaldeleteComponent } from './modaldelete/modaldelete.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private pessoaService: PessoasService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  pessoa: Pessoa;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.pessoaService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }

  // DELETE ESTA NO MODAL
  deletar() {
    this.pessoaService.delete(this.pessoa.id as string).subscribe(() => {
      this.pessoaService.showMessage(
        'Pessoa deletada do sistema com sucessso!'
      );
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  openDialog(id: any) {
    const modalRef = this.dialog.open(ModaldeleteComponent);
    modalRef.componentInstance.id = id;
  }
}
