import { EmojiSchema } from "./EmojiSchema";
import { MemosType } from "./MemosSchma";

export type ListSchema = {
  title: string;
  emoji: EmojiSchema;
  memos: MemosType[];
  favorite:boolean,
};
