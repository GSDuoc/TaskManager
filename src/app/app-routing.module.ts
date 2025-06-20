import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'tasks', 
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule) 
  },
  { 
    path: 'settings', 
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule) 
  },
  { 
    path: 'about', 
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}