import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/service/product.service';
import { UserData } from '../product';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: UserData ={} as UserData;
  showerror: boolean = false;
  constructor(private userService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.showerror= false
  }

  register(){

    this.userService.getUsers().subscribe(data=>
      {
        if(data.length > 0)
        {
          let dataob = data.filter(data => data.name.trim().toLowerCase() == this.userData.name.toLowerCase())
          if(dataob.length > 0)
          {
            this.showerror= true
          }
          else
          {
            this.userService.addUser(this.userData).subscribe(data=>
              {
                this.router.navigate(['login']);
              })
              this.showerror= false
          }
        }
      })

  }

}
