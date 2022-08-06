import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin/admin';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm = new FormGroup({
    adminId: new FormControl(''),
    adminName: new FormControl('')
  });

  constructor(private router:Router,private route:ActivatedRoute,private service:AdminServiceService) { }

  ngOnInit(): void {
  }

  doLogin(){
    let aId = this.loginForm.controls['adminId'].value;
    let aName = this.loginForm.controls['adminName'].value;
    this.service.findAdmin(aId).subscribe((data: Admin) => {
      console.log(data + 'Done');
      if (data && data.adminName === aName){
        this.router.navigate(['/admin-home']);
      } else{
        this.router.navigate(['/admin-login']);
      }
    });
  }
}
