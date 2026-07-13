import React from "react";
import Classes from "../../utils/styles/Global.module.css";
import Counter from "../../utils/custom/Counter";
import { counterDataForMessagepage } from "../../data/counterData";

const Program: React.FC = () => {
  return (
    <section className="pt-7 md:pt-10 lg:pt-14">
      <div className="program-part flex items-center">
        <div className={`${Classes["container"]}`}>
          <Counter counterData={counterDataForMessagepage} />
        </div>
      </div>
    </section>
  );
};

export default Program;
