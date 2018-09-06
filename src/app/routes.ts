import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { TechMieleComponent } from "./tech-miele/tech-miele.component";
import { MieleproductsComponent } from "./mieleproducts/mieleproducts.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./_guards/auth.guard";
import { CreateTechComponent } from "./tech-miele/create-tech/create-tech.component";
import { AgentComponent } from "./agent/agent.component";
import { AgentCardComponent } from "./agent-card/agent-card.component";
import { AgentCardResolver } from "./_resolvers/agent-card.resolver";
import { WashingmachineComponent } from "./mieleproducts/washingmachine/washingmachine.component";
import { CoffemakerComponent } from "./mieleproducts/coffemaker/coffemaker.component";
import { DishwasherComponent } from "./mieleproducts/dishwasher/dishwasher.component";
import { DrymachineComponent } from "./mieleproducts/drymachine/drymachine.component";
import { IronmachineComponent } from "./mieleproducts/ironmachine/ironmachine.component";
import { KitchenComponent } from "./mieleproducts/kitchen/kitchen.component";
import { PotsComponent } from "./mieleproducts/pots/pots.component";
import { ToysComponent } from "./mieleproducts/toys/toys.component";
import { VacuumComponent } from "./mieleproducts/vacuum/vacuum.component";
import { ExternalTechsComponent } from "./tech-miele/external-techs/external-techs.component";
import { AgentAuthResolver } from "./_resolvers/agent-auth.resolver";
import { TechFotiadisComponent } from "./tech-miele/tech-fotiadis/tech-fotiadis.component";
import { TechMakrakisComponent } from "./tech-miele/tech-makrakis/tech-makrakis.component";
import { EtapartnersComponent } from "./etapartners/etapartners.component";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { ArticlesComponent } from "./articles/articles.component";

export const routes: Routes = [
  { path: "", component: LoginComponent },

  { path: "register", component: RegisterComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "mieletech", component: TechMieleComponent },
      { path: "products", component: MieleproductsComponent },
      { path: "home", component: HomeComponent },
      { path: "newtech", component: CreateTechComponent },
      { path: "agents", component: AgentComponent },
      {
        path: "agents-card/:id",
        component: AgentCardComponent,
        resolve: { agent: AgentCardResolver }
      },
      { path: "products/washingmachine", component: WashingmachineComponent },
      { path: "products/coffeemaker", component: CoffemakerComponent },
      { path: "products/dishwasher", component: DishwasherComponent },
      { path: "products/drymachine", component: DrymachineComponent },
      { path: "products/ironmachine", component: IronmachineComponent },
      { path: "products/kitchen", component: KitchenComponent },
      { path: "products/pots", component: PotsComponent },
      { path: "products/toys", component: ToysComponent },
      { path: "products/vacuum", component: VacuumComponent },
      { path: "external/techs", component: ExternalTechsComponent },
      { path: "eta/partners", component: EtapartnersComponent },
      { path: "articles", component: ArticlesComponent },

      {
        path: "external/tech/fot",
        component: TechFotiadisComponent,
        resolve: { agent: AgentAuthResolver }
      },
      {
        path: "external/tech/fot/:id",
        component: TechFotiadisComponent,
        resolve: { agent: AgentAuthResolver }
      },
      {
        path: "external/tech/fot/new",
        component: TechFotiadisComponent,
        resolve: { agent: AgentAuthResolver }
      },
      
      {
        path: "external/tech/mak",
        component: TechMakrakisComponent,
        resolve: { agent: AgentAuthResolver }
      }
    ]
  }
];
