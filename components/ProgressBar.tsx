import { Skill } from "data/me";
import * as React from "react";

const ProgressBar = ({ name, value }: Skill) => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center px-0.5 mb-1 font-medium">
                <h4>{name}</h4>
                <h5>{value}</h5>
            </div>
            <div className="w-full h-3 bg-primary/40 overflow-hidden relative rounded-lg">
                <span className="block h-full" style={{ width: value }}>
                    <span className="progress block h-full bg-primary/60"></span>
                </span>
            </div>
        </div>
    );
};
export default ProgressBar;
