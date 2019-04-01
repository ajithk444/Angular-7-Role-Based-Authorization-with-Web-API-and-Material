import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatBadgeModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatSnackBarModule, MatDividerModule, MatChipsModule, MatTableModule, MatTabsModule,} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
imports: [MatNativeDateModule,MatTableModule,MatChipsModule,MatSnackBarModule,MatGridListModule,
        MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, 
        MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,
        MatInputModule,MatListModule,MatRadioModule,MatDividerModule,MatTabsModule,MatBadgeModule],
 
exports: [MatNativeDateModule,MatTableModule,MatChipsModule,MatSnackBarModule,MatGridListModule,FormsModule,
            MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,
            MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
            MatListModule,MatRadioModule,MatDividerModule,MatTabsModule,MatBadgeModule],
 
})

export class MaterialModule { }