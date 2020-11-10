interface PageInput {
    path: string;
    component: string;
    layout?: string;
    context?: any;
}
interface BoundActionCreators {
    createPage: (page: PageInput) => void;
    deletePage: (page: PageInput) => void;
    createRedirect: (opts: {
        fromPath: string;
        isPermanent?: boolean;
        redirectInBrowser?: boolean;
        toPath: string;
    }) => void;
}
export declare type GatsbyCreatePages = (fns: {
    graphql: any;
    boundActionCreators: BoundActionCreators;
}) => void;
export {};
//# sourceMappingURL=types.d.ts.map