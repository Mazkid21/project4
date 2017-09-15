import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'app';
	topics: FirebaseListObservable<any[]>;
	user = null;


constructor(private auth: AuthService, public db: AngularFireDatabase) { }

ngOnInit() {
	this.auth.getAuthState().subscribe(
		(user) => this.user = user);
	this.topics = this.db.list('https://backbyfire.firebaseio.com/');
}

loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  isLoggedIn() {
  	return this.auth.isLoggedIn();
  }

}