import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-layout/home',
    pathMatch: 'full',
  },
  {
    path: 'main-layout',
    loadComponent: () =>
      import('./pages/main-layout/main-layout.page').then(m => m.MainLayoutPage),
    children: [
      
    ],
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then(m => m.FolderPage),
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./product-details/product-details.page').then(m => m.ProductDetailsPage),
  }
];
