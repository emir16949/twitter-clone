import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TweetService } from '../services/tweet/tweet.service';
import { UserService } from '../services/user/user.service';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TwitterRoutingModule } from './twitter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TwitterRoutingModule,
  ],
  declarations: [
    MainComponent
  ],
  providers: [TweetService, UserService]
})
export class TwitterModule {
}
