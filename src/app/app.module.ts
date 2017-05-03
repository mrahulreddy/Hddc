import {BrowserModule} from '@angular/platform-browser';
import {NgModule, animate} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {ToastrModule} from 'toastr-ng2';

import {AppComponent} from './app.component';
import {appRoutes} from './routes';
import {NavComponent} from './nav/nav.component';
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {TrendingNowComponent} from './trending-now/trending-now.component';
import {ApiStoreService} from "./shared/api-store.service";
import {ZipResultsComponent} from './zip-results/zip-results.component';
import {CategoryComponent} from './category/category.component';
import {ServiceRepairComponent} from './modals/service-repair/service-repair.component';
import {DoorSizeComponent} from './door-size/door-size.component';
import {CollectionComponent} from './collection/collection.component';
import {HomeComponent} from './home/home.component';
import {NavigateService} from "./shared/navigate.service";
import {ConfigModule} from "./config/config.module";
import {ZipResults} from "./shared/zipresults";
import {AppUtilities} from "./shared/appUtilities";
import {ZipResolver} from "./zip-results/zip-resolver.service";
import {LangEnglishService} from "./shared/english";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HeaderComponent,
        BannerComponent,
        TrendingNowComponent,
        ZipResultsComponent,
        CategoryComponent,
        ServiceRepairComponent,
        DoorSizeComponent,
        CollectionComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2Bs3ModalModule,
        RouterModule.forRoot(appRoutes),
        ConfigModule,
        ToastrModule.forRoot()
    ],
    providers: [
        ApiStoreService,
        NavigateService,
        ZipResults,
        AppUtilities,
        ZipResolver,
        LangEnglishService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
