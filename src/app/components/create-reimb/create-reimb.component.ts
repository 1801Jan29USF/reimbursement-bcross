import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';
import { Reimbursement } from '../../beans/reimbursement';

@Component({
  selector: 'app-create-reimb',
  templateUrl: './create-reimb.component.html',
  styleUrls: ['./create-reimb.component.css']
})
export class CreateReimbComponent implements OnInit {

  reimbursement = {
    amount: 0,
    description: '',
    type: Number
  };


  constructor(private client: HttpClient, private cookie: CookieService, private router: Router) { }

  ngOnInit() {
  }

  submitReimbursement() {
    this.client.post('http://localhost:8080/Reimbursement-System/reimbursement', this.reimbursement,
      { withCredentials: true })
      .subscribe(
        (succ) => {
          alert('submit successful');
          this.router.navigateByUrl('reimbs');
        },
        (err) => {
          alert('failed to submit reimbursement');
        }


      );

  }

}
