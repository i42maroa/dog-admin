import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { DogsListPageComponent } from './page/dogs-list/dogs-list.component';
import { DogDetailPageComponent } from './page/dog-detail/dog-detail.component';
import { DogCardComponent } from './shared/components/dog-card/dog-card.component';
import { DogDetailCardComponent } from './shared/components/dog-detail-card/dog-detail-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DogsListPageComponent,
    DogDetailPageComponent,
    DogCardComponent,
    DogDetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // StoreModule.forRoot(ROOT_REDUCERS),
    // StoreDevtoolsModule.instrument({
    //   maxAge:25,
    //   logOnly:true,
    //   autoPause:true
    // }),
    // EffectsModule.forRoot([WordEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
