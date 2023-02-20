import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SectionTitle } from "components/shared/SectionTitle";
import { Meta } from "components/shared/Meta";
import { Post } from "interfaces/Post";
import { PostItem } from "components/blog/PostItem";

interface BlogPageProps {
  posts: Post[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  let sortedPosts = posts.sort((postA: Post, postB: Post) => {
    const date1 = new Date(postA.frontmatter.date);
    const date2 = new Date(postB.frontmatter.date);
    return date2.getTime() - date1.getTime();
  });
  
  return (
    <div>
      <SectionTitle>Blog</SectionTitle>
      <Meta title="Blog" />
      <div className="grid md:grid-cols-2 gap-3">
        {sortedPosts .map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

export function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map(function (filename) {
    const slug = filename.replace(".md", "");
    const markdownFile = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
