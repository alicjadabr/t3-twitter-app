import type { RouterOutputs } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex p-4 border-b border-slate-400 gap-3">
      <Image
        src={author.profilePicture} 
        className="rounded-full"
        height={56}
        width={56}
        alt={`@${author.username}'s profile pic`} 
      />
      <div className="flex flex-col">
        <div className="flex text-slate-300 gap-1">

          <Link href={`/${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>

          <Link href={`/post/${post.id}`}>
            <span className="font-thin">
              {` · ${dayjs(post.createdAt).fromNow()}`}
            </span>
          </Link>

        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};