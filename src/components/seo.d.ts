/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/// <reference types="react" />
interface Meta {
    name: string;
    content: string;
}
interface Props {
    title: string;
    lang?: string;
    meta?: Meta[];
    keywords?: string[];
    description?: string;
}
export declare const SEO: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=seo.d.ts.map