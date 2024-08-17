export type item = {
  title: string;
  imageLink: string;
  description: string;
  reverse?: boolean;
  hasAction?: boolean;
  hasActionOnBottom?: boolean;
  listItem?: Array<string>;
};
export interface SideInfoProps {
  infoItem: item;
}
