import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanPietroburgoComponent } from './components/main/san-pietroburgo/san-pietroburgo.component';
import { PaninoComponent } from './components/panino/panino.component';

const routes: Routes = [
  {path: '', component: PaninoComponent},
  {path: 'intro', component: PaninoComponent},
  {path: 'sanpietroburgo', component: SanPietroburgoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
