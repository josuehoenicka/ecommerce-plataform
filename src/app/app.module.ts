// import @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
// import app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import components
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent,
        ProductsComponent,
        NavComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ]
})
export class AppModule { }
