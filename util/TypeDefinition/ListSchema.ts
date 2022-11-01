import { EmojiSchema } from "./EmojiSchema";
import { MemosType } from "./MemosSchema";

export type ListSchema = {
  title: string | null;
  emoji: string | undefined;
  memos: Array<MemosType>;
  favorite?: boolean;
  upDateTime?: string;
  listsId?: string;
};
