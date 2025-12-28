import { defineCollection, z } from 'astro:content';

const obrasCollection = defineCollection({
    type: 'content', // v2.5.0+ content collections
    schema: z.object({
        titulo: z.string(),
        anio: z.union([z.string(), z.number()]),
        genero: z.enum(['Zarzuela', 'Ópera', 'Orquestal', 'Piano', 'Cámara']),
        estado: z.enum(['disponible', 'en_recuperacion', 'no_catalogado']),
        archivos: z.object({
            partitura: z.string().url().optional(),
            libreto: z.string().url().optional(),
        }).optional(),
        es_edicion_critica: z.boolean().default(false),
        creditos: z.string().optional(),
    }),
});

export const collections = {
    'obras': obrasCollection,
};
