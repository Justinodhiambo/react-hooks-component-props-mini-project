// ArticleList.js
import React from 'react';
import Article from './Article'; // Assuming you have an Article component

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
};

export default ArticleList;
