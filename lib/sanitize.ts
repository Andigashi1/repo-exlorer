import sanitizeHtml from "sanitize-html";

export function sanitizeReadme(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ["href", "title"],
      img: ["src", "alt", "title", "width", "height"],
    },
  });
}