// Used: 메뉴 (AppSidebar)

import { MenuItemType } from '@/types';

interface ConvertParam {
  data: MenuItemType[];
  hasRoot: boolean;
  parent_key: string;
}

export default function treeConvertData({
  data = [],
  hasRoot = false,
  parent_key = 'pid',
}: ConvertParam): MenuItemType[] {
  if (data?.length === 0) {
    console.error('data is null');
    return [];
  }

  const convertData = convertById(data, parent_key);

  if (hasRoot) {
    return [Object.assign({ menu_id: 0, menu_name: '전체', children: convertData })];
  } else {
    return convertData;
  }
}

function convertById(arr: MenuItemType[], parent_key: string) {
  const result: MenuItemType[] = arr.filter((obj) => !obj.parent_menu_id);

  for (const item of result) {
    item.children = arr.filter((obj) => item.menu_id === obj[parent_key]) || [];
  }

  return result;
}
