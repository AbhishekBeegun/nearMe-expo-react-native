import { createClient } from "@sanity/client"
import imageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    projectId : "07px3c9c",
    dataset:"production",
    useCdn: true,
    apiVersion: '2023-05-22',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export async function getCategories() {
    const Categories = await client.fetch('*[_type == "category"]')
    return Categories
} 
export async function getSubCategories(query) {
    const SubCategories = await client.fetch(`*[_type == "subcategory"&& categories[0]._ref == "${query}"]`)
    return SubCategories
} 
export async function getServices(query) {
    const Services = await client.fetch(`*[_type == "Service" && categories[0]._ref == "${query}"]{
        name,
        mainImage,
        _id,
    }`)
    return Services
} 

export async function getServiceFull(query) {
    const ServiceFull = await client.fetch(`*[_type == "Service" && _id == "${query}"]`)
    return ServiceFull
} 