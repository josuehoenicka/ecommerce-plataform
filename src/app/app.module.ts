import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class AppModule { }
