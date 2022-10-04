import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { IndexComponent } from './components/index/index.component';
import { MaterialModule } from 'src/app/components/shared/material.module';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
