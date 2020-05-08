import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'libro',
    loadChildren: () => import('./libro/libro.module').then( m => m.LibroPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'fragmentos',
    loadChildren: () => import('./fragmentos/fragmentos.module').then( m => m.FragmentosPageModule)
  },
  {
    path: 'palabras',
    loadChildren: () => import('./palabras/palabras.module').then( m => m.PalabrasPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'stripe',
    loadChildren: () => import('./stripe/stripe.module').then( m => m.StripePageModule)
  },
  {
    path: 'card/:status',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'applepay',
    loadChildren: () => import('./applepay/applepay.module').then( m => m.ApplepayPageModule)
  },
  {
    path: 'subscribe/:status',
    loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then( m => m.PaypalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
