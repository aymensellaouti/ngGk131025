import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './communication/pere/pere.component';
import { FilsComponent } from './communication/fils/fils.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { AmpouleComponent } from './directives/ampoule/ampoule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './templateDrivenForm/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { SliderComponent } from "./rxjs/slider/slider.component";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { CvModule } from './cv/cv.module';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
        SliderComponent,
        ReactiveFormsModule, FirstComponent,
        SecondComponent,
        ColorComponent,
        TwoComponent,
        CardComponent,
        PereComponent,
        FilsComponent,
        //cv
        NgstyleComponent,
        MiniWordComponent,
        AmpouleComponent,
        HighlightDirective,
        RainbowDirective,
        Btc2usdPipe,
        NavbarComponent,
        NF404Component,
        TestFormComponent,
        LoginComponent,
        TestObservableComponent], providers: [AuthInterceptorProvider, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
