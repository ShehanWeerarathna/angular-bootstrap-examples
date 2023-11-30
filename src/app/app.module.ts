import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImagesUploadComponent } from './pages/images-upload/images-upload.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from "./components/child/child.component";
import { OnChangeChildComponent } from './components/on-change-child/on-change-child.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ConfirmationBoxComponent } from './components/confirmation-box/confirmation-box.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductComponent,
        ProfileComponent,
        ImagesUploadComponent,
        ParentComponent,
        SearchBoxComponent,
        ConfirmationBoxComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ChildComponent,
        OnChangeChildComponent
    ]
})
export class AppModule { }
