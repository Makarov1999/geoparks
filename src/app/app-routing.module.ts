import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@core';
import { GeoobjectDetailViewComponent } from 'src/view/geoobject-detail-view/geoobject-detail-view.component';
import { GeoobjectFormComponent } from 'src/view/geoobject-form/geoobject-form.component';
import { LoginFormComponent } from 'src/view/login-form/login-form.component';
import { MainViewComponent } from 'src/view/main-view/main-view.component';
import { MainGuard } from './guards/main.guard';
import { GeoparksComponent } from 'src/view/geoparks/geoparks.component';
import { MatIconModule } from '@angular/material/icon';
import { RoutesComponent } from 'src/view/routes/routes.component';

const routes: Routes = [
  {
    path: '',
    component: GeoparksComponent,
  },
  {
    path: 'geopark/:id',
    component: MainViewComponent,
  },
  {
    path: 'detail/:geoobjectUid',
    component: GeoobjectDetailViewComponent,
  },
  {
    path: AppRoutes.LOGIN,
    component: LoginFormComponent,
  },
  {
    path: `${AppRoutes.EDIT_FORM}/:geoobjectUid`,
    component: GeoobjectFormComponent,
    canActivate: [MainGuard],
  },
  {
    path: AppRoutes.CREATE_FORM,
    component: GeoobjectFormComponent,
    canActivate: [MainGuard],
  },
  {
    path: AppRoutes.ROUTES,
    component: RoutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
