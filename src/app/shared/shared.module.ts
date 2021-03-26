import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import { SharedRoutingModule } from "./shared-routing.module";
// import { SharedComponent } from "./components/shared/shared.component";
import { MaterialModule } from './material.module';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
  //   SharedComponent,
  // FileUploadComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule,
  ],
  exports: [
  //   SharedComponent
  MaterialModule,
  // FileUploadComponent
  ]
})
export class SharedModule {}