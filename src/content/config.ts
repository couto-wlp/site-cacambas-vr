import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Equipe Caçamba VR'),
    bairro: z.string().optional(),
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
  }),
});

const informacoesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Equipe Caçamba VR'),
    bairro: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  servicos: servicosCollection,
  informacoes: informacoesCollection,
};
