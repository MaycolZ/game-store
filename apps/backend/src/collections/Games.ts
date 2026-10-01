import type { CollectionConfig } from 'payload'

export const Games: CollectionConfig = {
  slug: 'games',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Para que el frontend pueda leer los datos después
  },
  fields: [
    {
      name: 'title',
      label: 'Título del Juego',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      label: 'Precio (CLP)',
      type: 'number',
      required: true,
    },
    {
      name: 'platform',
      label: 'Plataforma',
      type: 'select',
      options: [
        { label: 'PlayStation 4', value: 'ps4' },
        { label: 'PC', value: 'pc' },
      ],
      required: true,
    },
    {
      name: 'isDigital',
      label: 'Es formato digital',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}