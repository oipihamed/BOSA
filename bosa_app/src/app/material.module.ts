import { NgModule } from "@angular/core";
import { MatButtonModule  } from "@angular/material/button";
const myModules:any=[
MatButtonModule
];
@NgModule({
    imports:[...myModules],
    exports:[...myModules]
})
export class MaterialModule{ }