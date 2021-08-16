import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent, HeaderComponent, FooterComponent } from './index'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToolbarModule,
    MenuModule,
    ButtonModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    CardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToolbarModule,
    MenuModule,
    ButtonModule,
    AutoCompleteModule,
    OverlayPanelModule,
    CardModule
  ]
})
export class SharedModule { }
