import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MenuComponent } from './menu/menu.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
  declarations: [
    PanelComponent,
    MenuComponent,
    ContenedorComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ],
 exports:[
  PanelComponent,
  MenuComponent,
  ContenedorComponent,
  PieComponent

 ]
})
export class ContenedorPrincipalModule { }

