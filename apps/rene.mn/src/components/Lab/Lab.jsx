import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Lab, Main, Article, ModifiedTime } from "./Lab.styles";

/**
 * Lab Component
 * ----------------------------------------------------------------------------------
 */
export default function LabTemplate({ data: { mdx } }) {
  return (
    <Lab>
      <Main>
        <Article>
          <ModifiedTime>
            {mdx.parent.modifiedTime} • {mdx.timeToRead} min read
          </ModifiedTime>
          <h2>{mdx.frontmatter.title}</h2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Article>
      </Main>
    </Lab>
  );
}

/**
 * Lab page query
 * ----------------------------------------------------------------------------------
 */
export const query = graphql`
  query noteQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
      timeToRead
    }
  }
`;
