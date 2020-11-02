import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'serviceWorkerExample';
  showButtonInstall = false;
  deferredPrompt;
  
  constructor(private serviceWorker: SwUpdate) {

    window.addEventListener('appinstalled', (evt) => {
      // Log install to analytics
      console.log('INSTALL: Success');
    });

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
      this.showButtonInstall = true;
    });

    if (serviceWorker.isEnabled) {

      serviceWorker.available.subscribe(() => {

        if (confirm("Existe una nueva version.")) {

          window.location.reload();
        }
      });
    }
  }

  installApp() {
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });

  }
}
