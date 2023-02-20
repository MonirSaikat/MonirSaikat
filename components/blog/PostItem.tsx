import { Post } from "interfaces/Post";
import { ButtonLink } from "../buttons/ButtonLink";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  const { slug, title, date } = post.frontmatter;

  return (
    <div className="bg-white p-4 rounded-md dark:bg-slate-700 shadow-lg">
      <h2 className="text-2xl text-gray-600 font-semibold dark:text-gray-200">{title}</h2>
      <p className="text-sm my-2 dark:text-gray-300">{date}</p>
      <ButtonLink url={`/blog/${slug}`}>Read now</ButtonLink>
    </div>
  );
};
