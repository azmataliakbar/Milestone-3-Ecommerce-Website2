// sanity/pet.ts
import { ImageIcon } from '@sanity/icons';

export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: ImageIcon,
  fields: [
      {
          name: 'productName',
          type: 'string',
          title: 'Product Name'
      },
      {
        name: 'productPrice',
        type: 'string',
        title: 'Product Price'
    },
    {
      name: 'productImage',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
  },
  
  

  ]
}