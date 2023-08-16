import React from "react";
import style from "../style/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function dailyInfoCard() {
    //console.log(data[0].title);
    return (
        <div className={style.dailyCard}>
            {data.map((item) => (
                  //implicit return
                <div>
                    <span className="">{item.time}</span> {/*item is declared but its value is never read*/}
                    <div>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}