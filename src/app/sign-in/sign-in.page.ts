import { Component, OnInit } from '@angular/core';
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss'],
})
export class SignInPage {
  public loginForm: FormGroup;

  constructor(private signInWithApple: SignInWithApple, private formBuilder: FormBuilder) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * signIn
   */
  signIn(){
    if(!this.loginForm.valid){
      return false;
    } else {
      return true;
    }
  }

  /**
   * btnSignInWithApple
   */
  btnSignInWithApple(){
    this.signInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
      ]
    })
    .then((res: AppleSignInResponse) => {
      // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
      alert('Send token to apple for verification: ' + res.identityToken);
      console.log(res);
    })
    .catch((error: AppleSignInErrorResponse) => {
      alert(error.code + ' ' + error.localizedDescription);
      console.error(error);
    });
  }

}
