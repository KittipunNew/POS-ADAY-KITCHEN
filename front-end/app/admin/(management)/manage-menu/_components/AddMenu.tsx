'use client';
import { useState } from 'react';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import SelectCategory from './SelectCategory';
import { Button } from '@/components/ui/button';
import { useAddMenu } from '@/hooks/useMenu';

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
  });

  const [file, setFile] = useState<File | null>(null);

  const addMenuMutation = useAddMenu();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return alert('กรุณาเลือกรูปภาพ');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('price', formData.price);
    data.append('image', file);

    addMenuMutation.mutate(data, {
      onSuccess: () => {
        setFormData({ name: '', category: '', price: '' });
        setFile(null);
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
          <FieldLabel htmlFor="name">ชื่อเมนู</FieldLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <FieldLabel>ประเภท</FieldLabel>
          <SelectCategory onValueChange={handleCategoryChange} />
        </Field>
        <Field className="flex">
          <FieldLabel htmlFor="price">ราคา</FieldLabel>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="picture">รูปภาพอาหาร</FieldLabel>
          <Input id="picture" type="file" onChange={handleFileChange} />
        </Field>
      </FieldGroup>
      <Button type="submit" className="w-full mt-5 bg-yellow-500" size={'lg'}>
        เพิ่มเมนู
      </Button>
    </form>
  );
};
export default AddMenu;
