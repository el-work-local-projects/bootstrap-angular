import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrameTopComponent } from './components/frame/frame-top/frame-top.component';
import { FrameFooterComponent } from './components/frame/frame-footer/frame-footer.component';
import { FrameMessageModalComponent } from './components/frame/frame-message-modal/frame-message-modal.component';
import { TextComponent } from './components/demos/text/text.component';
import { LabelsComponent } from './components/demos/labels/labels.component';
import { ButtonsComponent } from './components/demos/buttons/buttons.component';
import { TablesComponent } from './components/demos/tables/tables.component';
import { FormsComponent } from './components/demos/forms/forms.component';
import { NavigationComponent } from './components/demos/navigation/navigation.component';
import { AlertsComponent } from './components/demos/alerts/alerts.component';
import { TimeSelectionComponent } from './components/demos/time-selection/time-selection.component';
import { ProgressComponent } from './components/demos/progress/progress.component';
import { ListGroupsComponent } from './components/demos/list-groups/list-groups.component';
import { DialogsComponent } from './components/demos/dialogs/dialogs.component';
import { ContainersComponent } from './components/demos/containers/containers.component';
import { NestedModalOneComponent } from './components/demos/dialogs/nested-modal-one/nested-modal-one.component';
import { NestedModalTwoComponent } from './components/demos/dialogs/nested-modal-two/nested-modal-two.component';
import { ValidatedModalComponent } from './components/demos/dialogs/validated-modal/validated-modal.component';
import { SizedModalComponent } from './components/demos/dialogs/sized-modal/sized-modal.component';
import { ButtonlessModalComponent } from './components/demos/dialogs/buttonless-modal/buttonless-modal.component';
import { ScrollableModalComponent } from './components/demos/dialogs/scrollable-modal/scrollable-modal.component';
import { ComponentFormsComponent } from './components/demos/component-forms/component-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameTopComponent,
    FrameFooterComponent,
    FrameMessageModalComponent,
    TextComponent,
    LabelsComponent,
    ButtonsComponent,
    TablesComponent,
    FormsComponent,
    NavigationComponent,
    AlertsComponent,
    TimeSelectionComponent,
    ProgressComponent,
    ListGroupsComponent,
    DialogsComponent,
    ContainersComponent,
    NestedModalOneComponent,
    NestedModalTwoComponent,
    ValidatedModalComponent,
    SizedModalComponent,
    ButtonlessModalComponent,
    ScrollableModalComponent,
    ComponentFormsComponent
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
