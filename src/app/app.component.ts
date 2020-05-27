import {Component, OnInit, ViewChild} from '@angular/core';
import {SimplemdeComponent} from 'ngx-simplemde';
import {SimplemdeOptions} from 'ngx-simplemde/src/config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('simplemde', { static: true }) private readonly simplemde: SimplemdeComponent;

  options: SimplemdeOptions = {
    toolbar: true
  };

  demo = `# This one is bare
You can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also checks for misspelled words as you type!`;

  ngOnInit(): void {
    this.simplemde.setOptions('lineNumbers', true);
  }
}
