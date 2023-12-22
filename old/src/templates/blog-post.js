import React from "react";
import { Link, graphql } from "gatsby";

// import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const BlogPostTemplate = ({data, pageContext, location, html}) => {
  
    const post = data.mdx;
    // const children = data.mdx.children
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;
// console.log({props:this.props})
    // const totalTimeToRead = post.frontmatter.codeReadTimes + post.timeToRead;
    const totalTimeToRead = '1'
    return (
      <Layout location={location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
          <span style={{ marginLeft: rhythm(1 / 2), color: "lightgray" }}>
            {totalTimeToRead} min{totalTimeToRead > 1 ? "s" : ""} read
          </span>
        </p>
        <div
            // className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        {/* {children} */}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
          }}
        >
          <li style={{ marginRight: "6px" }}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        codeReadTimes
      }
      fields {
        slug
      }
    }
  }
`;

      // timeToRead {
        //   minutes
        //   text
        //   time
        //   words
        // }