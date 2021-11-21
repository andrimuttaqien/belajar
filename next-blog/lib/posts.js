import { fetchJson } from "../pages/api/api";
const { CMS_URL } = process.env;

export async function getPosts() {
  const posts = await fetchJson(`${CMS_URL}/posts`);
  return posts.map(stripPost);
}

export async function getPost(id) {
  const post = await fetchJson(`${CMS_URL}/posts/${id}`);
  return stripPost(post);
}

function stripPost(post) {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    pictureUrl: CMS_URL + post.image.url,
  };
}
