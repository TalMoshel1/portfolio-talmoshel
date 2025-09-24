import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();





  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/landing-page`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/accessibility`,
      lastModified: new Date(),
    },
        {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/bot`,
      lastModified: new Date(),
    },    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/bugs`,
      lastModified: new Date(),
    },    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/articles/ux-ui`,
      lastModified: new Date(),
    },
  ];
}
