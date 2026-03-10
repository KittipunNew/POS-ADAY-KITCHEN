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

export const getTables = async () => {
  try {
    const res = await api.get<Table[]>('/tables');
    const sortedData = res.data.sort((a, b) =>
      a.name.localeCompare(b.name, 'th', { numeric: true }),
    );
    return sortedData;
  } catch (error) {
    throw new Error('ไม่พบข้อมูล');
  }
};
