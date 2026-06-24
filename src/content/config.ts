import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Categoria editorial exibida no menu/arquivos
    category: z.enum(['Reviews', 'Guias', 'Enxoval']),
    // Tipo de conteúdo (badge no card)
    type: z.enum(['review', 'guia', 'comparativo', 'lista']),
    amazon_url: z.string().url().optional(),
    mercadolivre_url: z.string().url().optional(),
    shopee_url: z.string().url().optional(),
    price: z.number().optional(),
    image: z.string().default('/images/placeholder.svg'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
