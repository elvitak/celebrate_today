import client from "./sanity";

const celebrationFields = `
"image": image.asset->url, title, "slug": slug.current,
`;

export async function getAllCelebrations() {
  const results = await client.fetch(
    `*[_type == "celebration"]{${celebrationFields}}`
  );
  return results;
}

export async function getCelebrationBySlug(slug) {
  const results = await client.fetch(
    `*[_type == "celebration" && slug.current == "${slug}"]{${celebrationFields} conent[]{..., _type == "image" => {..., asset->}}}`
  );
  return results[0];
}
