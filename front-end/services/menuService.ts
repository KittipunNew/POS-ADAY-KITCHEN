import { api } from '@/lib/axios';
import { Menu } from '@/utils/types';

export const getMenus = async (): Promise<Menu[]> => {
  try {
    const res = await api.get<Menu[]>('/menus');
    return res.data;
  } catch (error) {
    throw new Error('ดึงข้อมูลไม่สำเร็จ');
  }
};

export const addMenu = async (newMenu: Partial<Menu>) => {
  const res = await api.post('/menu/create', newMenu);
  return res.data;
};
