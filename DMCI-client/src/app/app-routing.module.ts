import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, HomeComponent } from './modules/index';

const routes: Routes = [
	// {	path: '', 	}
	{	path: 'Home', component: HomeComponent	},
	{	path: 'About', component: AboutComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
