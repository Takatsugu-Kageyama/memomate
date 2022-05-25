//import Emoji-Piker
import Picker from "emoji-picker-react";
//import React
import { useState } from "react";
import dynamic from "next/dynamic";
//import types
import { HTMLButtonEvent } from "../../util/TypeDefinition/EventSchema";
import { EmojiProps } from "../../util/TypeDefinition/EmojiSchema";

const SelectedEmoji = () => {
  //Define Documentation
  const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
  //Define State
  const [displayEmojiPicker, setDisplayEmojiPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  //Get emoji is user selected
  const onEmojiClick = (e: HTMLButtonEvent, emojiObject: EmojiProps) => {
    setChosenEmoji(emojiObject);
  };

  const onDisplayEmojiPicker = (e: HTMLButtonEvent) => {
    setDisplayEmojiPicker(true);
  };

  return (
    <>
      <div onClick={onDisplayEmojiPicker}>
        {displayEmojiPicker ? (
          <Picker onEmojiClick={onEmojiClick} />
        ) : (
          <div>
            {chosenEmoji ? (
              <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
              <span>No emoji Chosen</span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default SelectedEmoji;
