import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddAssignmentService } from './add-assignment.service';

import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GradePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AddAssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


