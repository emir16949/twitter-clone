import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ProfileComponent
      }
    ]),
    CommonModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule {
}
