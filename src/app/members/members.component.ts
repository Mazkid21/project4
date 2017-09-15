import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
topics: FirebaseListObservable<any[]>;
	user = null;


constructor(private auth: AuthService, public db: AngularFireDatabase,  private router: Router) { }

ngOnInit() {
	this.auth.getAuthState().subscribe(
		(user) => this.user = user);
	this.topics = this.db.list('https://backbyfire.firebaseio.com/');

		console.log(this.user);

	}
}