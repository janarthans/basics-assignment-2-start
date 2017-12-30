import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName: string = '';
  isEditable: boolean = false;

  calculateButton(event : Event) {
    if((<HTMLInputElement>event.target).value.length > 0) {
      this.isEditable = true;
    }
    else {
      this.isEditable = false;
    }
  }

  resetInputAndDisableButton() {
    this.userName = '';
    this.isEditable = false;
  }
}
