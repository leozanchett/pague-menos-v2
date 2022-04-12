import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
  { path: 'nova-compra', component: PurchaseComponent },
  { path: 'home', component: SearchProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
