import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Meta } from "components/shared/Meta";
import { Post } from "interfaces/Post";
import { marked } from "marked";
import hljs from "highlight.js";
import { GetStaticPaths, GetStaticProps } from "next";
import ts from 'typescript';

const options: marked.MarkedOptions = {
  highlight : (code: string, lang: string) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language}).value;
  } 
}
marked.setOptions(options); 

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
