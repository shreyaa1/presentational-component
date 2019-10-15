import React from "react";
import "../src/stylesheets/styles.scss";
import { StoryCard } from "./Storycard/index";
import { SuggestedSource } from "./Source";

function App() {
  return (
    <div className="page-wrapper">
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
