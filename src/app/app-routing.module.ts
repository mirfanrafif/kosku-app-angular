import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "add", component: FormComponent },
  { path: "detail/:id", component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
