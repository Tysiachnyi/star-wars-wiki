import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {InfoPageComponent} from './pages/info-page/info-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {SharePageComponent} from './pages/share-page/share-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {
    path: 'index',
    component: MainPageComponent,
  },
  {
    path: 'info',
    component: InfoPageComponent,
  },
  {
    path: 'share',
    component: SharePageComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
