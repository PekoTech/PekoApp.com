import { useState } from 'react'
import clsx from 'clsx'
import Head from 'next/head'

import { Layout, Content } from '../components'
import styles from '../styles/Team.module.scss'

const TeamMembers = [
  {
    name: 'Sang Le',
    title: 'CEO & Co-Founder',
    link: 'https://www.linkedin.com/in/sanglethu/',
  },
  {
    name: 'Sandy Co',
    title: 'Head of Design & Co-Founder',
    link: 'https://www.linkedin.com/in/sandyklc/',
  },
  {
    name: 'Nanda Syahrasyad',
    title: 'Head of Engineering',
    link: 'https://www.linkedin.com/in/narendrass/',
  },
  {
    name: 'Najla Sekariyanti',
    title: 'Product Designer',
    link: 'https://www.linkedin.com/in/najlasekar/',
  },
  {
    name: 'Connor Fong',
    title: 'Technical Advisor',
    link: 'https://www.linkedin.com/in/connor-fong/',
  },
  {
    name: 'Andrew Zulaybar',
    title: 'Software Engineer',
    link: 'https://www.linkedin.com/in/andrewzulaybar/',
  },
  {
    name: 'Li Ze Choo',
    title: 'Technical Project Manager',
    link: 'https://www.linkedin.com/in/lizechoo/',
  },
  {
    name: 'Kyle Mas',
    title: 'Software Engineer',
    link: 'https://www.linkedin.com/in/kylemas/',
  },
] as const

export default function Team() {
  return (
    <>
      <Head>
        <title>Peko Team</title>
      </Head>
      <Layout>
        <Content className="md:mt-8">
          <header className="text-center mb-8 md:mb-16">
            <h1 className="text-xl font-medium mb-2 md:text-3xl">The Team</h1>
            <p className="text-sm">
              Just a bunch of hungry, weird pals looking to help planet earth.
            </p>
          </header>
          <ul
            className={clsx(styles.avatar_list, 'grid grid-cols-2 gap-4 pb-8')}
          >
            {TeamMembers.map((member) => (
              <Avatar key={member.name} member={member} />
            ))}
          </ul>
        </Content>
      </Layout>
    </>
  )
}

function Avatar({ member }) {
  const [hover, setHover] = useState(false)

  const nameAsPath = member.name.split(' ').join('_').toLowerCase()
  const path = `/assets/team/${nameAsPath}`
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <li
      onMouseOver={() => !hover && setHover(true)}
      onMouseOut={() => hover && setHover(false)}
    >
      <a className="flex flex-col items-center text-center" href={member.link}>
        <div
          role="img"
          style={{
            backgroundImage: `url(${path}.JPG)`,
            display: hover ? 'none' : 'block',
          }}
          className="w-32 h-32 bg-gray-500 rounded-full mb-4 md:w-40 md:h-40 bg-cover bg-center"
        />
        <div
          role="img"
          style={{
            backgroundImage: `url(${path}_alt.JPG)`,
            display: hover ? 'block' : 'none',
          }}
          className="w-32 h-32 bg-gray-500 rounded-full mb-4 md:w-40 md:h-40 bg-cover bg-center"
        />
        <h1 className="font-medium">{member.name}</h1>
        <p className="text-sm italic">{member.title}</p>
      </a>
    </li>
  )
}
