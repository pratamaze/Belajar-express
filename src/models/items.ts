    import { z } from 'zod';

    export const itemSchema = z.object({
      id: z.number().optional(),
      name: z.string().min(3),
      description: z.string().optional(),
    });

    export type Item = z.infer<typeof itemSchema>;