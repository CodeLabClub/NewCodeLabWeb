/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const MONTHS = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {date, permalink, tags, readingTime} = metadata;
  const {author, title, image} = frontMatter;

  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, {absolute: true});

  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    return (
      <header>
        <TitleHeading
          className={clsx('margin-bottom--sm', styles.blogPostTitle)}>
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className="margin-vert--md">
          <time dateTime={date} className={styles.blogPostDate}>
            {year}年{month}{day}日 {' '}
            {readingTime && <> · {Math.ceil(readingTime)} min 阅读时长</>}
          </time>
        </div>
        <div className="avatar margin-vert--md">
          {authorImageURL && (
            <a
              className="avatar__photo-link avatar__photo"
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener">
              <img src={authorImageURL} alt={author} />
            </a>
          )}
          <div className="avatar__intro">
            {author && (
              <>
                <h4 className="avatar__name">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <Head>
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>

      <article className={!isBlogPostPage ? 'margin-bottom--xl' : undefined}>
        {renderPostHeader()}
        <section className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </section>
        {(tags.length > 0 || truncated) && (
          <footer className="row margin-vert--lg">
            {tags.length > 0 && (
              <div className="col">
                <strong>标签：</strong>
                {tags.map(({label, permalink: tagPermalink}) => (
                  <Link
                    key={tagPermalink}
                    className="margin-horiz--sm"
                    to={tagPermalink}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
            {truncated && (
              <div className="col text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}>
                  <strong>阅读更多</strong>
                </Link>
              </div>
            )}
          </footer>
        )}
      </article>
    </>
  );
}

export default BlogPostItem;
