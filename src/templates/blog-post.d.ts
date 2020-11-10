/// <reference types="react" />
import { PageRendererProps } from "gatsby";
import { Query, SitePageContext } from "../graphql-types";
interface Props extends PageRendererProps {
    pageContext: SitePageContext;
    data: Query;
}
declare const BlogPostTemplate: (props: Props) => JSX.Element;
export default BlogPostTemplate;
export declare const pageQuery: void;
//# sourceMappingURL=blog-post.d.ts.map