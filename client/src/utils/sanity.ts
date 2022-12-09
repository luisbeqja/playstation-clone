import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'zxqe94uj',
    dataset: 'production',
    useCdn: true,
    token: 'sk8rlGCkGXMYoRdVZbJBM40fwXJMqwBrbg9btQw8B1KqofDd3FBQXhrduvNZlrMs5KxFzVLRiRZaLDqIMaSjJ0eVK2YBpv3eQ4595ntknrNhcdL3nKsI4oclFqLvq6DkbJA8SHCVekd3B8uPLmv6j6xwxZQoU9RYcdL9IqM6BiJMo7nIEnjk',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source:any) =>  builder.image(source)