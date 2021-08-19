import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent, HeaderComponent, FooterComponent } from './index'
import { DropdownComponent } from './components/dropdown/dropdown.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarModule} from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SneakerDetailOverviewComponent } from './components/sneaker-detail-overview/sneaker-detail-overview.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    SneakerDetailOverviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToolbarModule,
    MenuModule,
    ButtonModule,
    AutoCompleteModule,
    OverlayPanelModule,
    CardModule,
    DataViewModule,
    BreadcrumbModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToolbarModule,
    MenuModule,
    ButtonModule,
    AutoCompleteModule,
    OverlayPanelModule,
    CardModule,
    DataViewModule,
    BreadcrumbModule,
    ProgressSpinnerModule,
    SneakerDetailOverviewComponent,
    DropdownModule
  ]
})
export class SharedModule { }
