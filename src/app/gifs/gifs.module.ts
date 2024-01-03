import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    GifCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }