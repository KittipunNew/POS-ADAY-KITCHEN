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
  try {
    const res = await api.post('/menu/create', newMenu);
    return res.data;
  } catch (error) {
    throw new Error('เพิ่มข้อมูลไม่สำเร็จ');
  }
};

export const deleteMenu = async (id: string) => {
  try {
    await api.delete('/menu/delete', { data: { id: id } });
  } catch (error) {
    throw new Error('ลบข้อมูลไม่สำเร็จ');
  }
};
