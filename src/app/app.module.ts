import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { EditorComponent } from "./editor.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
