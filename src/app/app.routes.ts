import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageComponent} from "../pages/main/page.component";

export  const routes: Routes =
  [
    {
      path: '', component: PageComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false , anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
