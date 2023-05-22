import { createClient } from "@sanity/client"
import imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId : "",
    dataset:"",
    useCdn: true,
    apiVersion: '2023-05-22',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getCategories() {
    const Categories = await client.fetch('*[_type == "category"')
    return Categories
} 