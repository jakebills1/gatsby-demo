import React from "react"; 
import { Link } from "gatsby";
import Layout from '../components/layout';
import Title from '../components/title'


export default () => ( 
  <Layout> 
    <Title text='This is the about page' />
    <div> 
      <Link to="/">Home</Link> | <Link to="/about">About me</Link> 
    </div> 
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
      perspiciatis at facere maxime corrupti voluptate aliquam deserunt id non
      excepturi necessitatibus, quidem modi cupiditate qui quas tempora eligendi
      fugit suscipit?
    </p>
  </Layout>
);