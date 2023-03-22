import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { RouterModule } from '@angular/router';
import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';



@NgModule({
  declarations: [
    NgifComponent,
    NgforComponent,
    NgswitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DirectivasRoutingModule,NgifComponent,NgforComponent,NgswitchComponent]
})
export class DirectivasModule { }
