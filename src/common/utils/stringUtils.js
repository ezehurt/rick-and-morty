export const stripTags = (text) => text?.replace(/<\/?[^>]+(>|$)/g, "");
