import {NgModule} from "@angular/core";
import {PageComponent} from "./main/page.component";
import {PagesRoutingModule} from "./pages.routing";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {FootComponent} from "./foot/foot.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InfoComponent} from "./info/InfoComponent";
import {CastComponent} from "./cast/CastComponent";
import {MovieComponent} from "./movies/MovieComponent";

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    MenuComponent,
    FootComponent,
    InfoComponent,
    CastComponent,
    MovieComponent
  ],
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }

