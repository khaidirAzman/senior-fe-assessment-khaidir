import {Component, inject, Input, OnInit} from '@angular/core';
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ButtonModule} from "primeng/button";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {RouterLink} from "@angular/router";
import {StateService} from "../state.service";

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    LazyLoadImageModule,
    ButtonModule,
    GalleriaModule,
    ImageModule,
    PaginatorModule,
    RouterLink
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit{
  _stateService = inject(StateService);
  startPage=0;
  endPage=12;
  assignUrl: string[] = this._stateService.getAssignUrl();
  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(event: PaginatorState){
    this.startPage = event.page!*12;
    this.endPage = this.startPage+ 12;
  }
  getTotalRecords(){
    return Math.ceil(this.assignUrl.length/12);
  }
}
