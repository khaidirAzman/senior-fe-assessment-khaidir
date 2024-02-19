import {Injectable, OnInit} from '@angular/core';
import datasource from "../assets/data.json";


@Injectable({
  providedIn: 'root'
})
export class StateService implements OnInit {
  private _imagesUrl: string[] = datasource;
  private _assignUrl: string[] = [];
  constructor() {
    this._imagesUrl.forEach((img,index)=>{
      if(!localStorage.getItem('assign'+img.slice(-9))){
        localStorage.setItem("img"+img.slice(-9), img);
      }
    });
    this._assignUrl.forEach((assign,index)=>{
      if(!localStorage.getItem('img'+assign.slice(-9))){
        localStorage.setItem("assign"+assign.slice(-9), assign);
      }
    })
  }

  getUrls(){
    // return this._imagesUrl;
    let localData: string[]=[];
    this._imagesUrl.forEach((img, index)=>{
      if(localStorage.getItem('img'+img.slice(-9))){
        localData.push(localStorage.getItem('img'+img.slice(-9)) || '');
      }
    })
    this.setUrl(localData);
    return localData;
  }
  setUrl(imgUrl:string[]){
    imgUrl.forEach((img,index)=>{
      if(!localStorage.getItem('img'+img.slice(-9))){ //if it doesn't exist, add into local storage
        localStorage.setItem('img'+img.slice(-9), img);
        localStorage.removeItem('assign'+img.slice(-9));
      }
    });
  }
  getAssignUrl(){
    let localData: string[]=[];
    this._imagesUrl.forEach((img, index)=>{
      if(localStorage.getItem('assign'+img.slice(-9))){
        localData.push(localStorage.getItem('assign'+img.slice(-9)) || '');
      }
    })
    this._assignUrl=localData;
    return localData;
  }
  setAssign(assignImage:string[]){
    assignImage.forEach((assign,index)=>{
      if(!localStorage.getItem('assign'+assign.slice(-9))){ //if it doesn't exist, add into local storage
        localStorage.setItem('assign'+assign.slice(-9), assign);
        localStorage.removeItem('img'+assign.slice(-9));
      }
    })
  }

  ngOnInit(): void {
  }
}
