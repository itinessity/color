import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from "./main/page.component";
import {HomeComponent} from "./home/home.component";
import {MovieComponent} from "./movies/MovieComponent";
import {InfoComponent} from "./info/InfoComponent";
import {CastComponent} from "./cast/CastComponent";

export const routes: Routes =
  [
    {
      path: '', component: PageComponent,
      children: [
        {
          path: '', component: HomeComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'info', component: InfoComponent,
        },
        {
          path: 'movie', component: MovieComponent,
        },
        {
          path: 'cast', component: CastComponent,
        },
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
