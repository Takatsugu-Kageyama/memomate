// export type EmojiSchema = {
//   emoji?: string | null;
//   unified?: string | null;
//   activeSkinTone?: string | null;
//   originalUnified?: string | null;
//   name?: string[] | null[];
// };
export type EmojiSchema = {
  emoji: {
    activeSkinTone: string;
    emoji: string;
    names: string[];
    originalUnified: string | null;
    unified: string;
  };
};
