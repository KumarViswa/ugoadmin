import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Drivers',
      url: '/drivers',
      icon: 'car'
    },
    {
      title: 'Passengers',
      url: '/passengers',
      icon: 'people'
    },
    {
      title: 'Trips',
      url: '/trips',
      icon: 'compass'
    },
    {
      title: 'Withdrawl',
      url: '/withdraws',
      icon: 'card'
    },
    {
      title: 'Coupons',
      url: '/promos',
      icon: 'cut'
    },
    {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    },
    {
      title: 'Cars & Currency',
      url: '/cars',
      icon: 'car'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router,
    private afAuth: AngularFireAuth,
    private common: CommonService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.afAuth.onAuthStateChanged(auth => {
      console.log(auth);
      if (auth == null) {
        this.router.navigateByUrl('/login');
        this.menuCtrl.enable(false)
      }
      else {
        if (auth.email == environment.adminEmail) {
          this.router.navigateByUrl('/home');
          this.menuCtrl.enable(true);
        }
        else {
          this.common.showToast("Not an admin!")
          this.logout();
        }
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.afAuth.signOut()
  }
  ngOnInit() { }
}
