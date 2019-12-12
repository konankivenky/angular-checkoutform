import { Component } from "@angular/core";

@Component({
    selector:'app-checkout',
    templateUrl:'checkout.component.html',
    styleUrls:['checkout.component.css']
})
export class CheckoutComponent{

    public firstname:string="venkateswarlu"
    public lastname:string="konanki"
    public username:string="konankichinnni"
    public email:any="konankivenky09@gmail.com"
    public address:any="lingareddypalli"
    public address2:any="6-23, lingareddypalli"
    public country:any;
    public state:any;
    public zip:any;
    public checkbox:any;
    public checkbox2:any;
    public radio:any;
    public radio1:any;
    public radio2:any;
    public nameoncard:any;
    public creditcardnumber:any;
    public expiration:any;
    public cvv:any;
    public promocode:any;

    public json:any;

    continuedata(){
        var json={
            "firstname":this.firstname,
            "lastname":this.lastname,
            "username":this.username,
            "email":this.email,
            "address":this.address,
            "address2": this.address2,
            "country":this.country,
            "state":this.state,
            "zip":this.zip,
            "checkbox":this.checkbox,
            "checkbox2":this.checkbox2,
            "radio":this.radio,
            "radio1":this.radio1,
            "radio2":this.radio2,
            "nameoncard":this.nameoncard,
            "creditcardnumber":this.creditcardnumber,
            "expiration":this.expiration,
            "cvv":this.cvv,
            "promocode":this.promocode
        }
        console.log(json)
    }

}