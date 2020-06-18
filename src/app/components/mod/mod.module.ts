import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModRoutingModule } from './mod-routing.module';
import { Comp1Component } from '../comp1/comp1.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    ModRoutingModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  
   
  ]
})
export class ModModule { }
