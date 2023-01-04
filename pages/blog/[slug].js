import { Meta } from "components/Meta";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

const PostPage = ({ frontmatter, slug, content }) => {
  return (
    <div className="prose dark:prose-invert">
      <Meta title={`Blog | ${frontmatter.title}`} />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default PostPage;

export function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
