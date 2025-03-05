import React from "react";
import Article from "./Article";
import { articles } from "./common/Helper";

function WarmemacherMission() {
  return (
    <div className="max-w-[860px] xl:max-w-[1140px] 4xl:max-w-[1400px] flex justify-center items-center mx-auto mt-20 sm:mt-28 lg:mt-[150px]">
      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-4 md:gap-6 justify-between">
        <div className="w-full h-full">
          <div className="!h-full sm:!h-[590px] md:!h-[600px] lg:!h-[760px] xl:!h-[850px]">
            <Article
              image={articles[0].img}
              id={articles[0].id}
              description={articles[0].description}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-6 w-full h-full">
          <div className="h-full">
            <Article
              image={articles[1].img}
              id={articles[1].id}
              description={articles[1].description}
            />
          </div>
          <div className="h-full">
            <Article
              image={articles[2].img}
              id={articles[2].id}
              description={articles[2].description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarmemacherMission;
