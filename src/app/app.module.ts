import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { GamesComponent } from './views/games/games.component';
import { HardwareComponent } from './views/hardware/hardware.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { RegisterComponent } from './views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GamesComponent,
    HardwareComponent,
    PcGamerComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
