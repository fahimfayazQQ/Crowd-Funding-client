import React from 'react';
import Navbar from '../shared/navbar';
import BlogGallery from './blogGallery';
import BlogDetail from './blogDetail';
import Footer from '../shared/footer';

const BlogLayout = () => {
  return (
    <>
      <Navbar />
      <BlogGallery />
      <BlogDetail />
      <Footer />
    </>
  );
}

export default BlogLayout;