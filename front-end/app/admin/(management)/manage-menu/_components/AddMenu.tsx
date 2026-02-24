'use client';
import { useState } from 'react';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import SelectCategory from './SelectCategory';
import { Button } from '@/components/ui/button';
import { useAddMenu } from '@/hooks/useMenu';
import { Category } from '@/utils/types';

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
  });
  const addMenuMutation = useAddMenu();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: Number(formData.price),
      category: formData.category as Category,
    };

    addMenuMutation.mutate(payload, {
      onSuccess: () => {
        setFormData({ name: '', category: '', price: '' });
        alert('เพิ่มเมนูสำเร็จ');
      },
      onError: (err) => {
        console.error(err);
        alert('เพิ่มเมนูไม่สำเร็จ');
      },
    });
  };

  return (
    <form
      className="p-5 shadow border bg-white rounded-2xl max-w-xl"
      onSubmit={handleSubmit}
    >
      <FieldGroup className="grid max-w-xl grid-cols-2">
        <Field>
          <Input
            type="text"
            placeholder="ชื่อเมนู"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <SelectCategory onValueChange={handleCategoryChange} />
        </Field>
        <Field className="flex">
          <Input
            type="number"
            placeholder="ราคา"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Field>
      </FieldGroup>
      <Button type="submit" className="w-full mt-5 bg-yellow-500" size={'lg'}>
        เพิ่มเมนู
      </Button>
    </form>
  );
};
export default AddMenu;
