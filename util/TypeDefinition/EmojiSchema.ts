export type Props = {
    selectedEmoji: any;
    emojiValue: {
        id: string;
        native: string;
        colons: string;
        emotions: string[];
        name: string;
        skin: number | null;
    };
};