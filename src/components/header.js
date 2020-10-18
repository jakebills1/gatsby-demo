import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './header.module.scss'

const HeaderLink = props => {
  return <Link className={styles.link} to={props.to}>{props.text}</Link>
}

const HomeButton = props => {
  return <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
}

const SocialButton = props => {
  let style = '';
  let url = '';
  switch (props.site) {
    case 'twitter':
      style = styles.buttonTwitter;
      url = "https://twitter.com/" + props.username;
      break;
    case 'linkedin':
      style = styles.buttonLinkedin;
      url = "https://www.linkedin.com/in/" + props.username;
      break;
    case 'github':
      style = styles.buttonGithub;
      url = "https://github.com/" + props.username;
      break;
    default:
      break;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <StaticQuery
    query = {graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = {data => (
      <header 
        className={styles.container}
      >
        <div className={styles.row}>
          <HomeButton
            text={data.site.siteMetadata.title}
            to={'/'}
          />
          <SocialButton site='github' username="jakebills1"></SocialButton>
          <SocialButton site='linkedin' username="jakebills1"></SocialButton>
          <SocialButton site='twitter' username="jakeduck4"></SocialButton>
        </div>
        <div className={styles.row}>
          <HeaderLink
            to={'/'}
            text={'ARTICLES'}
          />
          <HeaderLink
            to={'/about'}
            text={'ABOUT'}
          />
        </div>
      </header>
    )}
  />
  
)