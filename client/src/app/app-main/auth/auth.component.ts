import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import  {DataService} from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    response:String;

    @ViewChild('firstName') firstNameInputRef : ElementRef;
    @ViewChild('lastName') lastNameInputRef : ElementRef;
    @ViewChild('email') emailInputRef : ElementRef;
    @ViewChild('pass') passInputRef : ElementRef;

  constructor(private dataService : DataService,
  private router:Router) { }

  ngOnInit() {
  }

  createUser(){
            console.log(`createUser()->
            ${this.firstNameInputRef.nativeElement.value},
            ${this.lastNameInputRef.nativeElement.value},
            ${this.emailInputRef.nativeElement.value},
            ${this.passInputRef.nativeElement.value}`);

           this.dataService.createUser(this.firstNameInputRef.nativeElement.value,
               this.lastNameInputRef.nativeElement.value,
               this.emailInputRef.nativeElement.value,
               this.passInputRef.nativeElement.value,result=>{
                console.log(`response=${result}`);
                if(result == "data saved"){
                    this.router.navigateByUrl('/enter');
                }
                else{
                    document.getElementById('res').innerHTML='ישנה שגיאה,אנא נסה שנית';
                }              

            })
        };
  }

