import React from "react";

function Title() {
    return (
        <div>
            <h1
                className={
                    "text-5xl md:text-7xl font-bold font-display " +
                    "cursor-default text-white drop-shadow-lg lg:mt-8"
                }
            >
                Samuel <br className="md:hidden" />
                Kosasih
            </h1>
        </div>
    );
}

export default Title;
