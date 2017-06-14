import {Component} from '@angular/core';
// import '../../../node_modules/jquery/dist/jquery';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../public/css/styles.css';

@Component({
    selector: 'sg-my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    title: string = 'Tour of Heroes';
}