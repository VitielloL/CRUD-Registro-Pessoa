import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/views/book/book.component';
import { PessoasComponent } from './components/views/pessoas/pessoas.component';

const routes: Routes = [
  {
    path: '',
    component: PessoasComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
