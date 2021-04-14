import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { FinalePremioComponent } from './components/main/finale-premio/finale-premio.component';
import { PrivacyPolicyComponent } from './components/main/privacy-policy/privacy-policy.component';
import { SanPietroburgoComponent } from './components/main/san-pietroburgo/san-pietroburgo.component';
import { PaninoComponent } from './components/panino/panino.component';

const routes: Routes = [
  {path: '', component: PaninoComponent},
  {path: 'intro', component: PaninoComponent},
  {path: 'sanpietroburgo', component: SanPietroburgoComponent},
  {path: 'finale', component: FinalePremioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
