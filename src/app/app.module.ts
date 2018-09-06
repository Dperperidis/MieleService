import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "../../node_modules/@auth0/angular-jwt";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { TabsModule } from "ngx-bootstrap/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { routes } from "./routes";
import { TechMieleComponent } from "./tech-miele/tech-miele.component";
import { MieleproductsComponent } from "./mieleproducts/mieleproducts.component";
import { WashingmachineComponent } from "./mieleproducts/washingmachine/washingmachine.component";
import { DrymachineComponent } from "./mieleproducts/drymachine/drymachine.component";
import { IronmachineComponent } from "./mieleproducts/ironmachine/ironmachine.component";
import { DishwasherComponent } from "./mieleproducts/dishwasher/dishwasher.component";
import { KitchenComponent } from "./mieleproducts/kitchen/kitchen.component";
import { PotsComponent } from "./mieleproducts/pots/pots.component";
import { CoffemakerComponent } from "./mieleproducts/coffemaker/coffemaker.component";
import { VacuumComponent } from "./mieleproducts/vacuum/vacuum.component";
import { ToysComponent } from "./mieleproducts/toys/toys.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthService } from "./_services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { ErrorInterceptor } from "./_services/error.interceptor";
import { AuthGuard } from "./_guards/auth.guard";
import { CreateTechComponent } from "./tech-miele/create-tech/create-tech.component";
import { AgentComponent } from "./agent/agent.component";
import { AgentCardComponent } from "./agent-card/agent-card.component";
import { AgentCardResolver } from "./_resolvers/agent-card.resolver";
import { UsersService } from "./_services/users.service";
import { ExternalTechsComponent } from "./tech-miele/external-techs/external-techs.component";
import { TechService } from "./_services/tech.service";
import { AgentAuthResolver } from "./_resolvers/agent-auth.resolver";
import { TechFotiadisComponent } from "./tech-miele/tech-fotiadis/tech-fotiadis.component";
import { TechMakrakisComponent } from "./tech-miele/tech-makrakis/tech-makrakis.component";
import { EtapartnersComponent } from "./etapartners/etapartners.component";
import { EtaPartnersService } from "./_services/eta-partners.service";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { ArticlesComponent } from './articles/articles.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TechMieleComponent,
    MieleproductsComponent,
    WashingmachineComponent,
    DrymachineComponent,
    IronmachineComponent,
    DishwasherComponent,
    KitchenComponent,
    PotsComponent,
    CoffemakerComponent,
    VacuumComponent,
    ToysComponent,
    LoginComponent,
    RegisterComponent,
    CreateTechComponent,
    AgentComponent,
    AgentCardComponent,
    ExternalTechsComponent,
    TechFotiadisComponent,
    TechMakrakisComponent,
    EtapartnersComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ModalModule.forRoot(),
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    TabsModule.forRoot(),
    MatTableModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    HttpClientModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:61646"],
        blacklistedRoutes: [
          "localhost:61646/api/auth",
          "localhost:61646/api/techs"
        ]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptor,
    AuthGuard,
    AgentCardResolver,
    UsersService,
    TechService,
    AgentAuthResolver,
    EtaPartnersService,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
