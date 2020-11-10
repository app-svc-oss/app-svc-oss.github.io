import { PageRendererProps } from "gatsby";
import { ReactNode } from "react";
interface Props extends PageRendererProps {
    title: string;
    children: ReactNode;
}
export declare const Layout: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=layout.d.ts.map