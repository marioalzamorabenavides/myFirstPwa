import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'serviceWorkerExample';

  constructor(private serviceWorker: SwUpdate) {

    if (serviceWorker.isEnabled) {

      serviceWorker.activated.subscribe(
        resp => {
          console.log(resp);

        },
        error => {
          console.log(error);

        }
      );

      serviceWorker.available.subscribe(() => {

        if (confirm("Existe una nueva version.")) {

          window.location.reload();
        }
      });
    }
  }
}
