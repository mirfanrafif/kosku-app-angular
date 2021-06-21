import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SigninCallbackComponent } from "./signin-callback/signin-callback.component";

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signin-callback", component: SigninCallbackComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AccountRouterModule { }