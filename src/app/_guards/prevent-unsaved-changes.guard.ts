import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { TechFotiadisComponent } from "../tech-miele/tech-fotiadis/tech-fotiadis.component";



@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<TechFotiadisComponent> {

  canDeactivate(component: TechFotiadisComponent) {
    if (component) {
      return confirm(
        "Are you sure you want to continue? Any unsaved changes will be lost"
      );
    } else {
      return true;
    }
  }
}