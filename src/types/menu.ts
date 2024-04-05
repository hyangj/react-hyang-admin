export interface MenuItemType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
  menu_id: number; // Menu Index
  parent_menu_id?: number | null; // 부모 메뉴 id
  menu_name: string; // Menu 이름
  menu_sort: number; // 부모 메뉴 id
  is_used: boolean; // 사용 여부
  create_date: Date;
  modify_date: Date;
  menu_path: string;
  menu_level: number;
  children?: ChildMenuItemType[] | null; // Parent Menu Name
}

export interface ChildMenuItemType {
  menu_id: number; // Menu Index
  parent_menu_id?: number | null; // 부모 메뉴 id
  menu_name: string; // Menu 이름
  menu_sort: number; // 부모 메뉴 id
  is_used: boolean; // 사용 여부
  create_date: Date;
  modify_date: Date;
  menu_path: string;
  menu_level: number;
}
