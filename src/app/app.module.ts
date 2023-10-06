import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './pages/product-list/product-list.effects';
import { reducers } from './store';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductComponent,
        ProfileComponent,
        ImagesUploadComponent,
        ParentComponent
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
        OnChangeChildComponent,
        StoreModule.forRoot(reducers, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([ProductEffects])
    ]
})
export class AppModule { }
