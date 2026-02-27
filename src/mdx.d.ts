declare module "*.mdx" {
  import type { ComponentType } from "react";

  interface MDXProps {
    components?: Record<string, ComponentType>;
  }

  export const frontmatter: Record<string, unknown>;
  const MDXComponent: ComponentType<MDXProps>;
  export default MDXComponent;
}
