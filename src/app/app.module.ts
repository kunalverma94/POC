import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SpaceXDataService } from 'src/app/services/space-x-data-service/space-x-data.service';
import { environment } from '../environments/environment';
import { AppComponent } from './components/app/app.component';
import { FilterComponent } from './components/filter/filter.component';
import { GenericFilterComponent } from './components/filter/generic-filter/generic-filter.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BooleanEmojiPipe } from './pipes/boolean-Emoji-pipe';
import { FilterPipe } from './pipes/filter-pipe';
import { FilterService } from './services/filter-service/filter.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavComponent,
    FooterComponent,
    ItemComponent,
    ListComponent,
    FilterComponent,
    BooleanEmojiPipe,
    GenericFilterComponent,
    LoadingComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'POC' }),
    LazyLoadImageModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [HttpClientModule, FilterService, SpaceXDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
