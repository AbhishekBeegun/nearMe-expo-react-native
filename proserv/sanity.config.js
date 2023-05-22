import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ProServ',

  projectId: '07px3c9c',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,

    // Add this 'category child' template
    templates: (prev) => {
      const categoryChild = {
        id: 'category-child',
        title: 'Category: Child',
        schemaType: 'category',
        parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
        // This value will be passed-in from desk structure
        value: ({parentId}) => ({
          parent: {_type: 'reference', _ref: parentId},
        }),
      }
  
      return [...prev, categoryChild]
    },
  },
})
