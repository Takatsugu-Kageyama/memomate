import { EmojiSchema } from "./EmojiSchema";
import { MemosType } from "./MemosSchma";

export type ListSchema = {
  title: string | null;
  emoji?: EmojiSchema | null;
  memos?:Array<MemosType>;
  favorite?: boolean;
};
