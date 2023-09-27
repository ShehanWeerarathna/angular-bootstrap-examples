import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import { ImagesUploadComponent } from './pages/images-upload/images-upload.component';
import { ParentComponent } from './pages/parent/parent.component';

const routes: Routes = [
  { path: "products/:id",component: ProductComponent },
  { path:"products",component: ProductListComponent },
  { path:"profile",component: ProfileComponent },
  { path:'upload',component: ImagesUploadComponent},
  { path:'parent',component: ParentComponent},
  { path: "", redirectTo: "/products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
