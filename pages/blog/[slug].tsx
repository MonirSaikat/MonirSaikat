import { Meta } from "components/Meta";
import { GetStaticPropsContext } from "next";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "interfaces/Post";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";

const PostPage = ({ frontmatter, slug, content }: Post) => {
  return (
    <div className="prose dark:prose-invert">
      <Meta title={`Blog | ${frontmatter.title}`} />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => {
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
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const {
    params: { slug },
  } = ctx as { params: { slug: string } };

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
};
