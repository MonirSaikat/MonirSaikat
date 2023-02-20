import { remark } from 'remark';
import highlight from 'remark-highlight.js';
import remarkHtml from 'remark-html';
import CodeBlock from "./CodeBlock";

const components = {
    pre: CodeBlock
};

const MarkdownToJSX = (props: any) => {
    const { children } = props;

    const remarkReactComponents = {
        code: CodeBlock,
    }

    const processed = remark().use(highlight).use(remarkHtml).processSync(children).result;

    return processed;
}


const Markdown = () => {

}

export default Markdown;