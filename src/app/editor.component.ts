import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmailEditorComponent } from "angular-email-editor";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit{
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.emailEditor.minHeight = "250px";
  }

  saveMessage() {
    this.emailEditor.exportHtml((data) => {
      console.log(data);
      this.ngZone.run(() => this.router.navigate(['']));
    });
  }

  cancelEdit() {
    this.router.navigate([""]);
  }
}
