import { z } from 'zod';

export const parcelSchema = z.object({
  senderName: z.string().min(2, 'Sender name is required'),
  recipientName: z.string().min(2, 'Recipient name is required'),
  phone: z.string().min(11, 'Phone must be 11 digits'),
  address: z.string().min(5, 'Address is required'),
  weight: z.string().min(1, 'Weight is required'),
});
