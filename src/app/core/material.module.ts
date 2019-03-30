import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatSnackBarModule, MatDividerModule,} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
imports: [MatNativeDateModule,MatSnackBarModule,MatGridListModule,
        MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, 
        MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,
        MatInputModule,MatListModule,MatRadioModule,MatDividerModule],
 
exports: [MatNativeDateModule,MatSnackBarModule,MatGridListModule,FormsModule,
            MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,
            MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
            MatListModule,MatRadioModule,MatDividerModule],
 
})

export class MaterialModule { }