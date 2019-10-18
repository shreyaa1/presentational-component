import React from "react";
import { StoryCard } from "../Storycard/index";
import { SuggestedSource } from "../Source";
import { Button } from "../Button";
import { Banner } from "../Banner";
import { Search } from "../Search";

export const Home = () => {
  return (
    <div className="page-wrapper">
      <Banner />
      <Search placeholder="Search for Companies, Investors, Keywords" />
      <div className="btn-wrapper">
        <Button name="Today" bgColor="#333" />
        <Button name="Yesterday" />
        <Button name="All" />
        <Button name="Popular" />
        <Button name="Trending" />
        
          <Button name="Unread" />
       
      </div>
      <div className="app">
        <div className="card-wrapper">
          <StoryCard />
          <StoryCard />
          <div className="end-of-feed">End of Feed</div>
          <div className="boxShadow text">MARK All AS READ</div>
        </div>

        <SuggestedSource />
      </div>
    </div>
  );
};
