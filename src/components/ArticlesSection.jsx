import React from "react";
import Article from "./Article";
import { articles } from "./common/Helper";

function WarmemacherMission() {
  
  return (
    <div className="max-w-[1140px] mx-auto mt-40">
      <div className="flex gap-6">
        <div className="max-w-[558px]">
          <Article
            image={articles[0].img}
            height={articles[0].height}
            id={articles[0].id}
            description={articles[0].description}
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <Article
            image={articles[1].img}
            height={articles[1].height}
            id={articles[1].id}
            description={articles[1].description}
          />
          <Article
            image={articles[2].img}
            height={articles[2].height}
            id={articles[2].id}
            description={articles[2].description}
          />
        </div>
      </div>
    </div>
  );
}

export default WarmemacherMission;
