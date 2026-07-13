import React from 'react';
import { OutreachImage } from '../../types/customDataTypes';
import Classes from "../styles/Global.module.css";

interface CustomImageGridProps {
  outreachImages: OutreachImage[];
}

const CustomImageGrid: React.FC<CustomImageGridProps> = ({ outreachImages }) => {
  return (
    <div className={`${Classes["container"]} `}>
      <div className="parent_grid_gallary extra">
        <div className="children">
          <img src={outreachImages[0].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[3].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[5].src} alt="" />
        </div>
        <div className="children ">
          <img src={outreachImages[4].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[6].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[1].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[2].src} alt="" />
        </div>
        <div className="children">
          <img src={outreachImages[7].src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomImageGrid;