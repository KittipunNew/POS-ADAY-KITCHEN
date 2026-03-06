import { api } from '@/lib/axios';
import { Table } from '@/utils/types';

export const addTable = async (newTable: Partial<Table>) => {
  try {
    const res = await api.post('/table/create', newTable);
    return res.data;
  } catch (error) {
    throw new Error('เพิ่มข้อมูลไม่สำเร็จ');
  }
};
