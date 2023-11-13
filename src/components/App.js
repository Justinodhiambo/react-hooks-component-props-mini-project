import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import Footer from './Footer';  

import blogData from '../data/blog';

const App = () => {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <Footer text={blogData.footer} />
    </div>
  );
};

export default App;
