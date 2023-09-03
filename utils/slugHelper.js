import slugify from "slugify";

function generateSlug(title) {
  const slug = slugify(title, {
    replacement: "-",
    lower: true,
    strict: true,
    locale: "en",
    trim: true,
  });
  return slug;
}

export default generateSlug;
