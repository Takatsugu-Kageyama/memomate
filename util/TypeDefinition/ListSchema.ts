import { EmojiSchema } from "./EmojiSchema";
import { MemosType } from "./MemosSchema";

export type ListSchema = {
  title: string | null;
  emoji?: EmojiSchema | null;
  memos?:Array<MemosType>;
  favorite?: boolean;
};
