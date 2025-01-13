import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  age: z.number().min(0, 'Age must be a positive number'),
});

export type ProductFormValues = z.infer<typeof productSchema>;