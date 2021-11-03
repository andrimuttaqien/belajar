import { readFile } from "fs/promises";
import { marked } from "marked";
export async function getPost(slug) {
  //   const data = await readFile(`contents/posts/${slug}.json`, "utf8");
  //   return JSON.parse(data);
  const source = await readFile(`contents/${slug}.md`, "utf8");
  //   return source;
  const html = marked(source);
  console.log(html);
  return {
    body: html,
  };
}
