import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    children: any;
    className: string;
}

const CodeBlock = ({ children, className }: CodeBlockProps) => {

    const language = className.replace('language-', '');

    return (
        <SyntaxHighlighter language={language} style={materialOceanic}>
            {children}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;