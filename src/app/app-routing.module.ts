import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './components/demos/text/text.component';
import { LabelsComponent } from './components/demos/labels/labels.component';
import { ButtonsComponent } from './components/demos/buttons/buttons.component';
import { TablesComponent } from './components/demos/tables/tables.component';
import { FormsComponent } from './components/demos/forms/forms.component';
import { ComponentFormsComponent } from './components/demos/component-forms/component-forms.component';
import { NavigationComponent } from './components/demos/navigation/navigation.component';
import { AlertsComponent } from './components/demos/alerts/alerts.component';
import { TimeSelectionComponent } from './components/demos/time-selection/time-selection.component';
import { ProgressComponent } from './components/demos/progress/progress.component';
import { ListGroupsComponent } from './components/demos/list-groups/list-groups.component';
import { DialogsComponent } from './components/demos/dialogs/dialogs.component';
import { ContainersComponent } from './components/demos/containers/containers.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/text',
		pathMatch: 'full'
	},
	{
		path: 'text', 
		component: TextComponent
	},
	{
		path: 'labels', 
		component: LabelsComponent
	},
	{
		path: 'buttons', 
		component: ButtonsComponent
	},
	{
		path: 'tables', 
		component: TablesComponent
	},
	{
		path: 'forms', 
		component: FormsComponent
	},
	{
		path: 'component-forms', 
		component: ComponentFormsComponent
	},
	{
		path: 'navigation', 
		component: NavigationComponent
	},
	{
		path: 'alerts', 
		component: AlertsComponent
	},
	{
		path: 'time-selection', 
		component: TimeSelectionComponent
	},
	{
		path: 'progress', 
		component: ProgressComponent
	},
	{
		path: 'list-groups', 
		component: ListGroupsComponent
	},
	{
		path: 'dialogs', 
		component: DialogsComponent
	},
	{
		path: 'containers', 
		component: ContainersComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
