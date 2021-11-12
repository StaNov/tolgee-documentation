import React from "react";

export const TechnologyLove: React.FC<{
  technologyImgUrl: string;
  technologyName: string;
}> = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={props.technologyImgUrl} alt={props.technologyName} />
      </div>
      <div style={{ fontSize: 50, lineHeight: "50px" }}>+</div>
      <div>
        <img src="/img/favicon.svg" alt="love" />
      </div>
      <div style={{ fontSize: 50, lineHeight: "50px" }}>=</div>
      <div>
        <img src="/img/heart.svg" alt="love" />
      </div>
    </div>
  );
};
