import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { ModalCreateComponent } from './modal-create/modal-create.component';



@NgModule({
  declarations: [
    TestRequestGetComponent,
    ModalCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestRequestGetComponent,
    ModalCreateComponent
  ]
})
export class TestRequestModule { }
