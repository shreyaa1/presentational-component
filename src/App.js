import React from "react";
import "../src/stylesheets/styles.scss";
import { StoryCard } from "./Storycard/index";
import { SuggestedSource } from "./Source";
import { Button } from "./Button";
import { Banner } from "./Banner";
import { Search } from "./Search";

function App() {
  return (
    <div className="page-wrapper">
      <Banner />
      <Search />
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
}

export default App;
