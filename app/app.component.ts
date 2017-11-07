import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <StackLayout>
      <Label text="&#xe909;" class="icomoon my-icon"></Label>
    </StackLayout>
  `
})
export class AppComponent {}
