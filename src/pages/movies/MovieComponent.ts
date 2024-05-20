import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'app-pages-movie',
  templateUrl: './movie.html',
  styleUrls: ['./movie.css']
})
export class MovieComponent {
  submitted = false;
  mailChimpEndpoint = 'https://the-banished.us21.list-manage.com/subscribe/post-json?u=aa13a26086f34e69f3e1a6c85&amp;id=9c172380ae&amp;f_id=007ef0e6f0';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  // reactive form components
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  durationInSeconds = 3;

  async submit() {
    if (this.emailControl.status === 'VALID') {
      const params = new HttpParams()
        .set('EMAIL', this.emailControl.value ?? "")
        .set('b_aa13a26086f34e69f3e1a6c85_9c172380ae', '');

      const mailChimpUrl = this.mailChimpEndpoint + "&"+ params.toString();

      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c')
        .subscribe(response => {
          if (response.result && response.result !== 'error') {
            this.submitted = true;
            this.emailControl.setValue("");

            this._snackBar.open(response.msg, "Close", {
              duration: this.durationInSeconds * 1000,
            });
          }
          else {
            this._snackBar.open(response.msg, "Close", {
              duration: this.durationInSeconds * 1000,
            });
          }
        });
    }
  }
}

interface MailChimpResponse {
  result: string;
  msg: string;
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
