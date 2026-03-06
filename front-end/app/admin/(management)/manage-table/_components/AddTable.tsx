'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SelectStatusTable from './SelectStatusTable';
import React, { useState } from 'react';
import { useAddTable } from '@/hooks/useTable';
import { TableStatus } from '@/utils/types';

const AddTable = () => {
  const [formData, setFormData] = useState<{
    name: string;
    status: TableStatus | '';
  }>({
    name: '',
    status: '',
  });

  const addMenuMutation = useAddTable();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value as TableStatus }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.status) {
      alert('กรุณากรอกเลขโต๊ะและเลือกสถานะให้ครบถ้วน');
      return;
    }

    const payload = {
      name: formData.name,
      status: formData.status as TableStatus,
    };

    console.log('Sending payload:', payload);

    addMenuMutation.mutate(payload, {
      onSuccess: () => {
        setFormData({ name: '', status: '' });
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <form
      className="p-5 border shadow max-w-xl bg-white rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5">
        <Input
          type="text"
          placeholder="เลขที่โต๊ะ"
          name="name"
          className="w-full"
          value={formData.name}
          onChange={handleChange}
        />
        <SelectStatusTable onValueChange={handleStatusChange} />
      </div>
      <Button type="submit" className="w-full mt-5 bg-yellow-500" size={'lg'}>
        เพิ่มโต๊ะ
      </Button>
    </form>
  );
};
export default AddTable;
