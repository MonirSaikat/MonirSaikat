import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SectionTitle } from "components/SectionTitle";
import { Meta } from "components/Meta";
import { Post } from "interfaces/Post";
import { PostItem } from "components/PostItem";

interface BlogPageProps {
  posts: Post[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <div>
      <SectionTitle>Blog</SectionTitle>
      <Meta title="Blog" />
      <div className="grid md:grid-cols-2 gap-3">
        {posts.map((post) => (
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
