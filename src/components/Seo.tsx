import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  robots?: string;
  jsonLd?: Record<string, unknown>;
};

const DEFAULT_SITE_NAME = "Salon Henrika";
const DEFAULT_ROBOTS = "index,follow";

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
};

const Seo = ({ title, description, keywords, path = "/", image, robots = DEFAULT_ROBOTS, jsonLd }: SeoProps) => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = new URL(path, origin).toString();

    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: DEFAULT_SITE_NAME });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "de_DE" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: image ? "summary_large_image" : "summary" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
    }

    if (image) {
      const imageUrl = new URL(image, origin).toString();
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
    }

    upsertLink("canonical", canonicalUrl);

    let jsonLdElement = document.head.querySelector('script[data-seo="json-ld"]') as HTMLScriptElement | null;

    if (jsonLd) {
      if (!jsonLdElement) {
        jsonLdElement = document.createElement("script");
        jsonLdElement.type = "application/ld+json";
        jsonLdElement.dataset.seo = "json-ld";
        document.head.appendChild(jsonLdElement);
      }

      jsonLdElement.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdElement) {
      jsonLdElement.remove();
    }
  }, [description, image, jsonLd, keywords, path, robots, title]);

  return null;
};

export default Seo;
