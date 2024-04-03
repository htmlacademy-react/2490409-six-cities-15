type BookmarkIconSizeDictType = {
  [key in 'small' | 'medium']: [number, number];
};

type BookmarkIconSizeType = keyof BookmarkIconSizeDictType;

const BOOKMARK_ICON_SIZE: BookmarkIconSizeDictType = {
  small: [18, 19],
  medium: [31, 33],
};

export default BOOKMARK_ICON_SIZE;
export type { BookmarkIconSizeType };
