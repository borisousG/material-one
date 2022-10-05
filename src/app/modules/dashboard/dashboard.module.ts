import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { IndexComponent } from './components/index/index.component';
import { MaterialModule } from 'src/app/components/shared/material.module';
import { DialogOverviewExampleDialogComponent } from './components/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    IndexComponent,
    DialogOverviewExampleDialogComponent,
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    FormsModule,
  ]
})
export class DashboardModule { }
