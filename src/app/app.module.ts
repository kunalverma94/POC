import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FilterComponent } from './components/filter/filter.component';
import { GenericFilterComponent } from './components/filter/generic-filter/generic-filter.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MaterialUIModule } from './modules/material-module';
import { BooleanEmojiPipe } from './pipes/boolean-Emoji-pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialUIModule, HttpClientModule],
  exports: [MaterialUIModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
