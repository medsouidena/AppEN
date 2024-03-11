import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetectionSignalementComponent } from './detection-signalement/detection-signalement.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'DetectionSignalement',component:DetectionSignalementComponent},

  //Les programmes
  {path:"resume", redirectTo: '/assets/مراكز المساعة الإجتماعية.pdf' },


  //Par default
  {path: '',redirectTo: 'home',pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
