import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginButtonComponent } from './components/user-home/login-button/login-button.component';
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './service/interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    LoginButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
