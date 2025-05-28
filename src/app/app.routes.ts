import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav-tabs',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'nav-tabs',
    loadComponent: () => import('./nav-tabs/nav-tabs.page').then( m => m.NavTabsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./nav-tabs/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./nav-tabs/categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./nav-tabs/account/account.page').then( m => m.AccountPage)
  },
  {
  path: 'product-details/:id',
  loadComponent: () => import('./product-details/product-details.page').then(m => m.ProductDetailsPage)
}

];
