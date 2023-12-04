import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { DialogContentExample } from './dialogue/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCardModule,
  MatChipsModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MatIconRegistry],
})
export class AppModule {}
