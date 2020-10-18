import React from "react";
import Layout from '../components/layout';
import Title from '../components/title'
import ArticleList from '../components/article-list'

export default () => (
  <Layout>
    <Title text={'Welcome'} />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
      perspiciatis at facere maxime corrupti voluptate aliquam deserunt id non
      excepturi necessitatibus, quidem modi cupiditate qui quas tempora eligendi
      fugit suscipit?
    </p>
    <ArticleList />
  </Layout>
)
