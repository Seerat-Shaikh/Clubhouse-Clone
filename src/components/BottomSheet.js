import React from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

export default function BottomSheet(props) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(
          !props.sheetVisible
        ); /*invert its visibility each time u clicked it*/
        props.setItemsVisible(true);
      }}
      fullScreen={props.sheetTitle === "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: props.sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        {props.sheetTitle == "new room" ? ( /*if new room created show that*/
          <NewRoom
            cardDetail={props.cardDetail}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(true);
            }}
          />
        ) : props.sheetTitle == "start room" ? ( /*after that show start room*/
          <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setSheetVisible={(item) => {
              props.setSheetVisible(item);
              props.setItemsVisible(true);
            }}
          />
        ) : ( 
            ""  /*otherwise nothing*/
        )}
      </div>
      {/*if profile give transparent color otherwise no color*/}
    </SwipeableBottomSheet>
  );
}

