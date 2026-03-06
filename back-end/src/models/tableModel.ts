import mongoose from 'mongoose';

interface Table {
  name: string;
  status: 'AVAILABLE' | 'OCCUPIED';
}

const tableSchema = new mongoose.Schema<Table>({
  name: { type: String, required: true },
  status: { type: String, enum: ['AVAILABLE', 'OCCUPIED'], required: true },
});

export default mongoose.model('table', tableSchema);
