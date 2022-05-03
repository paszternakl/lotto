import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './toaster/toasts.component';
import { ShuffleSvgComponent } from './svg/shuffle-svg/shuffle-svg.component';
import { TrashSvgComponent } from './svg/trash-svg/trash-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameBoardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ToastsComponent,
    ShuffleSvgComponent,
    TrashSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
