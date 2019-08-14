package com.javalanguagezone.interviewtwitter.service.dto;

import static lombok.AccessLevel.PRIVATE;

import com.javalanguagezone.interviewtwitter.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class UserDTO {

  private Long id;
  private String username;
  private String name;
  private String surname;
  private int numberOfTweets;
  private int numberOfFollowers;
  private int numberOfPersonsFollowing;

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.name = user.getName();
    this.surname = user.getSurname();
    this.numberOfTweets = 0;
    this.numberOfFollowers = 0;
    this.numberOfPersonsFollowing = 0;
  }

  public void setNumberOfTweets(int numberOfTweets) {
    this.numberOfTweets = numberOfTweets;
  }

  public void setNumberOfFollowers(int numberOfFollowers) {
    this.numberOfFollowers = numberOfFollowers;
  }

  public void setNumberOfPersonsFollowing(int numberOfPersonsFollowing) {
    this.numberOfPersonsFollowing = numberOfPersonsFollowing;
  }
}
