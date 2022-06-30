import { NgModule } from "@angular/core";
import { MatButtonModule  } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const myModules:any=[
MatButtonModule,
MatSnackBarModule
];
@NgModule({
    imports:[...myModules],
    exports:[...myModules]
})
export class MaterialModule{ }