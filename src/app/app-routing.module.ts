import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { GamesComponent } from './views/games/games.component';
import { HardwareComponent } from './views/hardware/hardware.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'games', component: GamesComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pc-gamer', component: PcGamerComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
