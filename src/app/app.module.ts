import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrameTopComponent } from './components/frame/frame-top/frame-top.component';
import { FrameFooterComponent } from './components/frame/frame-footer/frame-footer.component';
import { FrameMessageModalComponent } from './components/frame/frame-message-modal/frame-message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameTopComponent,
    FrameFooterComponent,
    FrameMessageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
