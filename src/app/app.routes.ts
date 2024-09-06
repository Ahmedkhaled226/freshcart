import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';

export const routes: Routes = [
  // Auth routes
  {
    path: '',
    canActivate: [logedGuard],
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot',
        loadComponent: () => import('./components/forgotpassword/forgotpassword.component').then(m => m.ForgotpasswordComponent)
      },
    ],
  },

  // Main app routes
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'product',
        loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent)
      },
      {
        path: 'cart/:id',
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
      },
      {
        path: 'brands',
        loadComponent: () => import('./components/brands/brands.component').then(m => m.BrandsComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('./components/categories/categories.component').then(m => m.CategoriesComponent)
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./core/components/wishlist/wishlist.component').then(m => m.WishlistComponent)
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./components/details/details.component').then(m => m.DetailsComponent)
      },
      {
        path: 'allorders',
        loadComponent: () => import('./components/allorders/allorders.component').then(m => m.AllordersComponent)
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent)
      },
    ],
  },

  // Not Found route
  {
    path: '**',
    loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent)
  }
];
