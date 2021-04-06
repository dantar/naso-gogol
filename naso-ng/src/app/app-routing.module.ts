import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalePremioComponent } from './components/main/finale-premio/finale-premio.component';
import { SanPietroburgoComponent } from './components/main/san-pietroburgo/san-pietroburgo.component';
import { PaninoComponent } from './components/panino/panino.component';

const routes: Routes = [
  {path: '', component: PaninoComponent},
  {path: 'intro', component: PaninoComponent},
  {path: 'sanpietroburgo', component: SanPietroburgoComponent},
  {path: 'finale', component: FinalePremioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
