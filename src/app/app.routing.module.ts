import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EditorComponent } from "./editor.component";
import { EmailEditorModule } from "angular-email-editor";
import { DashboardComponent} from "./dasboard.component";

@NgModule({
  declarations: [AppComponent, EditorComponent, DashboardComponent],
  imports: [
    EmailEditorModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'editor', component: EditorComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
