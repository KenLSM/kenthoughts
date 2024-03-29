import { Link, PageProps, graphql } from 'gatsby';
import * as React from 'react';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMdx: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        description: string;
        draft?: boolean;
        tags?: string;
      };
    }[];
  };
};
const BlogIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes.filter((node) => !node.frontmatter.draft);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  {post.frontmatter.tags ? (
                    <React.Fragment>
                      <small>Tags: {post.frontmatter.tags}</small>
                      <br />
                    </React.Fragment>
                  ) : null}
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          draft
        }
      }
    }
  }
`;
