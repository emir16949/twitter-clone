package com.javalanguagezone.interviewtwitter.service.dto;

import static lombok.AccessLevel.PRIVATE;

import com.javalanguagezone.interviewtwitter.domain.Tweet;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class TweetDTO {

  private Long id;
  private String content;
  private UserDTO author;

  public TweetDTO(Tweet tweet) {
    this.id = tweet.getId();
    this.content = tweet.getContent();
    this.author = new UserDTO(tweet.getAuthor());
  }
}
