import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "px29jpit",
    dataset: 'production',
    apiVersion: "2022-11-07",
    useCdn: true,
    token:
    "ska842T7bgbcXVpoPMJ1xOIP7F5DVxiptyTzk7QOkzWDMiQYe7cJH3Uc5m9aqdqSyDLShi8FL1xE8h7UfIuChFGGUfuSQ8416QwnBVVW1VgtBUC0F2pKUtIYG9Vyug8Uqwned2bSOghykdPjEKKncDFU4YoF1sfqHdAdwZuaRpaPPlkfFy9U"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)