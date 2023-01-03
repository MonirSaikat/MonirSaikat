import { SectionTitle } from 'components/SectionTitle';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ButtonLink } from 'components/ButtonLink';

const PostItem = ({ post }) => {
  const { slug, title, date } = post.frontmatter;

  return(
    <div className='bg-white p-4 rounded-md dark:bg-slate-700 shadow'>
      <h2 className="text-2xl font-semibold dark:text-gray-200">{ title }</h2>
      <p className='text-sm my-2 dark:text-gray-300'>{ date }</p>
      <ButtonLink url={`/blog/${slug}`}>Read now</ButtonLink>
    </div>
  );
};

const BlogPage = ({ posts }) => {
  return(
    <div>
      <SectionTitle>Blog</SectionTitle>
      <div className="grid md:grid-cols-2 gap-3">
        {posts.map(post => <PostItem key={post.slug} post={post} />)}
      </div>
    </div>
  );
}

export default BlogPage;

export function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(function(filename) {
    const slug = filename.replace('.md', '');
    const markdownFile = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontmatter } = matter(markdownFile);

    return {
      slug,
      frontmatter
    }
  });

  return {
    props : {
      posts
    }
  }
}
