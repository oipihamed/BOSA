import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule  } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginRoutingModule } from "./pages/auth/login/login-routing.module";

const myModules:any=[
MatButtonModule,
MatSnackBarModule,
ReactiveFormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule
];
@NgModule({
    imports:[...myModules],
    exports:[...myModules]
})
export class MaterialModule{ }