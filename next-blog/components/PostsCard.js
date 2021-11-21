import Link from "next/dist/client/link";
import Image from "next/image";
export default function PostsCard({ post }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl">
      <Link href={`/post/${post.id}`}>
        <a>
          <Image
            src={post.pictureUrl}
            alt={post.pictureUrl}
            width={320}
            height={240}
          />
          <div className="p-2 flex justify-between items-baseline">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <span>{post.body}</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
