import { UserDataModel } from './user-data.model';

export interface TweetModel {
  id: number;
  content: string;
  author: UserDataModel;
}
