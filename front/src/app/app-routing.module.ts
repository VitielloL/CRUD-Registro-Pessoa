import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/views/book/book.component';
import { PessoasComponent } from './components/views/pessoas/pessoas.component';
import { CreateComponent } from './components/views/pessoas/create/create.component';
import { EditComponent } from './components/views/pessoas/edit/edit.component';
import { DeleteComponent } from './components/views/pessoas/delete/delete.component';
import { DetalComponent } from './components/views/pessoas/detal/detal.component';
const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'createpessoa',
    component: CreateComponent,
  },
  {
    path: 'editpessoa',
    component: EditComponent,
  },
  {
    path: 'editpessoa/:id',
    component: EditComponent,
  },

  {
    path: 'deletepessoa',
    component: DeleteComponent,
  },

  {
    path: 'deletepessoa/:id',
    component: DeleteComponent,
  },

  {
    path: 'detal',
    component: DetalComponent,
  },

  {
    path: 'detal/:id',
    component: DetalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
