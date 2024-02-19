import {AfterViewInit, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ImageComponent} from "../image/image.component";
import {ImageModule} from "primeng/image";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {RouterLink} from "@angular/router";
import {StateService} from "../state.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    SlicePipe,
    NgClass,
    NgIf,
    LazyLoadImageModule,
    ImageComponent,
    ImageModule,
    PaginatorModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  _stateService = inject(StateService);
  // imagesUrl: string[] = this._stateService.getUrls();
  imagesUrl: string[] = [];
  // taskAssignedImage: string[] = this._stateService.getAssignUrl();
  taskAssignedImage: string[] = [];
  startPage=0;
  endPage=12;
  constructor() {
    this.imagesUrl = this._stateService.getUrls();
    this.taskAssignedImage = this._stateService.getAssignUrl();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
  }
  assignTask(imageUrl: any){
    let index = this.imagesUrl.indexOf(imageUrl);
    this.taskAssignedImage.push(this.imagesUrl[index]); //add into assign
    this._stateService.setAssign(this.taskAssignedImage); //save to local storage
    this.imagesUrl.splice(index, 1); //remove from home
  }
  onPageChange(event: PaginatorState){
    this.startPage = event.page!*12;
    this.endPage = this.startPage+ 12;
  }
  getTotalRecords(){
    return Math.ceil(this.imagesUrl.length/12);
  }
}
