import {Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from '@angular/router';
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
// import {NavComponent} from "../nav/nav.component";

@Component({
    selector: 'app-door-size',
    templateUrl: './door-size.component.html',
    styleUrls: ['./door-size.component.less']
})
export class DoorSizeComponent implements OnInit {

    @ViewChild('florida') modal1:ModalComponent;
    showMeasure:boolean = false;

    constructor(private appComponent:AppComponent, private route:Router) {
    }

    // private navComponent:NavComponent
    ngOnInit() {
        this.appComponent.currScreen = 3;
        // this.navComponent.screen = 3;
    }

    navigateTo(path) {
        //this.appComponent.currScreen = this.appComponent.navElems.indexOf(path); 
        // this.route.navigateByUrl(path);
        this.appComponent.currScreen = 3;
    }

    floridaClose() {
        this.showMeasure = true;
        this.modal1.close();
    }

}
