import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { ClientlayoutComponent } from './layouts/clientlayout/clientlayout.component';
import { DetailComponent } from './pages/admin/products/detail/detail.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
          {
            path: 'products/list',
            component: ListComponent,
          },
        ],
      },
      {
        path: '',
        component: HomeLayoutComponent,
        children: [
          {
            path: 'products/list',
            component: ListComponent,
          },
        ],
      },
      {
        path: 'admin',
        component: ClientlayoutComponent,
        children: [
          {
            path: 'products/:id',
            component: DetailComponent,
          },
        ],
      },
];

