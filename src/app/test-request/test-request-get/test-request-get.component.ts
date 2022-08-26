import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { postmodel, products } from './getPosts.model';


@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.scss']
})
export class TestRequestGetComponent implements OnInit {
  indexs: number = 0;
  productItems: products[] = [];

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  status = false;

  showModal() {
    this.status = !this.status;
  }

  setModal(s: boolean) {
    this.status = s;
  }

  addItems() {
    this.productItems.push({name:`มาม่า${this.indexs}`})
    this.indexs++;
    console.log(this.productItems);
  }

  delItem(indexs: number) {
    this.productItems.splice(indexs,1);
  }


}
