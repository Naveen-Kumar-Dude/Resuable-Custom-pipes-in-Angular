import { DescriptionTabComponent } from './description-tab/description-tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesPageComponent } from './custom-pipes-page/custom-pipes-page.component';

const routes: Routes = [
{ path: 'home', component: DescriptionTabComponent },
{ path: 'pipes', component: CustomPipesPageComponent },
// { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
