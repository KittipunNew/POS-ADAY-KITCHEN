import { api } from '@/lib/axios';

export const getMenus = async () => {
  try {
    const res = await api.get('/menus');
    return res.data;
  } catch (error) {
    throw new Error('ดึงข้อมูลไม่สำเร็จ');
  }
};
