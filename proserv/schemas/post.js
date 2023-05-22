import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name : 'images',
      title:'Images',
      type : 'array',
      of:[
        defineField({
          name:'image',
          title:'Image',
          type:'image',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'subcategory'}}],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
    }),
  ],
})
