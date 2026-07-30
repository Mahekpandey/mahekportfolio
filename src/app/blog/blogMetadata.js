const siteName = "Mahek Pandey";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.mahekcode.in");

const siteUrl = configuredSiteUrl.replace(
  /^https?:\/\/mahekcode\.in\/?$/,
  "https://www.mahekcode.in"
);

const blogPosts = {
  "hi-im-mahek-pandey": {
    title: "Hi, I'm Mahek Pandey",
    description:
      "A personal introduction to what I am building at Eklavya, how product thinking changed my engineering mindset, and what this blog will be about.",
    image: "/blog/mahek-pandey-intro-og.jpg",
    publishedTime: "2026-07-30",
  },
  "ai-agent-problems": {
    title: "Most AI Agent Problems Aren't AI Problems",
    description:
      "Why reliable AI agents are built in the harness around the model: memory, retrieval, tools, retries, stop conditions, and workflows.",
    image: "/blog/ai-agent-harness-og.jpg",
    publishedTime: "2026-07-30",
  },
  "ai-agents-2025": {
    title: "The Rise of AI Agents: Revolutionizing Work in 2025",
    description:
      "Explore how AI agents are transforming the workplace, enhancing human capabilities, and revolutionizing industries across the board.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    publishedTime: "2025-01-15",
  },
  "tech-startups-2025": {
    title: "Tech Startups: Navigating the New Frontier",
    description:
      "Discover how quantum computing, sustainable tech, and evolving funding models are reshaping the startup ecosystem in 2025.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    publishedTime: "2025-02-01",
  },
  "brain-computer-interfaces": {
    title: "The Future of Brain-Computer Interfaces",
    description:
      "Delve into the revolutionary advances in BCI technology and their impact on medicine, education, and human augmentation.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    publishedTime: "2025-02-20",
  },
};

export function createBlogMetadata(slug) {
  const post = blogPosts[slug];
  const url = `/blog/${slug}`;
  const imageUrl = new URL(post.image, siteUrl).toString();

  return {
    title: `${post.title} | ${siteName}`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName,
      type: "article",
      publishedTime: post.publishedTime,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          type: post.image.endsWith(".jpg") ? "image/jpeg" : "image/png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export const metadataBase = new URL(siteUrl);
