// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// swiper
import { SwiperModule } from 'swiper/angular';
// interceptor
import { TimeInterceptor } from './interceptors/time.interceptor'
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// components
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        ProductComponent,
        ProductsComponent,
        NavComponent,
        ReversePipe,
        TimeAgoPipe,
        HighlightDirective
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SwiperModule
    ]
})
export class AppModule { }
