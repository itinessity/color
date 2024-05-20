import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {PageComponent} from "./main/page.component";
import {PagesRoutingModule} from "./pages.routing";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {FootComponent} from "./foot/foot.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InfoComponent} from "./info/InfoComponent";
import {CastComponent} from "./cast/CastComponent";
import {MovieComponent} from "./movies/MovieComponent";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

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
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        MatButtonModule,
        MatIcon,

    ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }

