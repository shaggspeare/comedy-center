import React from 'react';
import SingleBlog from '@/components/blogs/singleBlog/SingleBlog';
import Subscription from '@/components/subscriptions/SubscriptionOne';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventiva next.js - blog-single-3',
  description: 'Eventiva next.js multipage webdite with next.js and bootstrap',
};
const BlogSingle3 = (): JSX.Element => {
  return (
    <>
      <SingleBlog imgTop={true} />
      <Subscription styleNum={5} />
    </>
  );
};

export default BlogSingle3;
