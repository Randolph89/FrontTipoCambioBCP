import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private apiServive: ApiService, private router: Router) {}

  ngOnInit(): void {}

  ingresar() {
    //localStorage.setItem("Nombre", nom);
    console.log(this.model);

    var flagStatus = 0;

    this.apiServive.login(this.model).subscribe(
      (result: any) => {
        console.log(result.token);
        localStorage.setItem('token', result.token);
        flagStatus = 1;
      },
      (err) => {},
      () => {
        this.router.navigate(['/tipoCambio']);
      }
    );
  }
}
