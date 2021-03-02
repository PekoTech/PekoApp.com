import { useState } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Content } from '../components'
import styles from '../styles/Team.module.scss'

const TeamMembers = [
  {
    name: 'Sang',
    title: 'Co-founder & CEO',
    link: 'https://www.linkedin.com/in/sanglethu/',
    hasAlt: true,
  },
  {
    name: 'Arielle',
    title: 'Co-founder & COO',
    link: 'https://www.linkedin.com/in/ariellelok/',
    hasAlt: false,
    extension: 'png',
  },
  {
    name: 'Sandy',
    title: 'Co-founder & Head of Design',
    link: 'https://www.linkedin.com/in/sandyklc/',
    hasAlt: true,
  },
  {
    name: 'Nanda',
    title: 'Head of Engineering',
    link: 'https://www.linkedin.com/in/narendrass/',
    hasAlt: true,
  },
  {
    name: 'Connor',
    title: 'Technical Consultant',
    link: 'https://www.linkedin.com/in/connor-fong/',
    hasAlt: true,
  },
  {
    name: 'Jessica',
    title: 'Software Engineer',
    link: 'https://www.linkedin.com/in/jessica-huh-2a3ab697/',
    hasAlt: false,
    extension: 'png',
  },
  {
    name: 'Kyle',
    title: 'Software Engineer',
    link: 'https://www.linkedin.com/in/kylemas/',
    hasAlt: false,
    extension: 'png',
  },
  {
    name: 'Jennifer',
    title: 'Designer',
    link: 'https://www.linkedin.com/in/jennifer-syn/',
    hasAlt: false,
    extension: 'png',
  },
  {
    name: 'Li',
    title: 'Project Manager',
    link: 'https://www.linkedin.com/in/lizechoo/',
    hasAlt: false,
    extension: 'png',
  },
  {
    name: 'Najla',
    title: 'Designer',
    link: 'https://www.linkedin.com/in/najlasekar/',
    hasAlt: true,
  },
] as const

export default function Team() {
  return (
    <>
      <Head>
        <title>Peko Team</title>
      </Head>
      <Content className="md:mt-8">
        <header className="mb-8 text-center md:mb-16">
          <h1 className="mb-2 text-xl font-medium md:text-3xl">The Team</h1>
          <p className="text-sm">
            Just a bunch of hungry, weird pals looking to help planet earth.
          </p>
        </header>
        <ul className={clsx(styles.avatar_list, 'grid grid-cols-2 gap-4 pb-8')}>
          {TeamMembers.map((member) => (
            <Avatar key={member.name} member={member} />
          ))}
        </ul>
      </Content>
    </>
  )
}

function Avatar({ member }) {
  const [hover, setHover] = useState(false)

  const path = `/assets/team/${member.name}`
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <motion.li
      className="relative flex items-start justify-center"
      initial="idle"
      whileHover="expand"
      onMouseOver={() => !hover && setHover(true)}
      onMouseOut={() => hover && setHover(false)}
    >
      <motion.div
        className="absolute w-32 h-32 bg-green-500 rounded-full md:w-40 md:h-40"
        variants={{ expand: { scale: 1.1 }, idle: { scale: 1 } }}
      />
      <a
        className="relative flex flex-col items-center text-center"
        href={member.link}
        target="_blank"
        rel="noreferrer"
      >
        <div
          role="img"
          style={{
            backgroundImage: `url(${path}.${member.extension || 'JPG'})`,
            display: hover && member.hasAlt ? 'none' : 'block',
          }}
          className="w-32 h-32 mb-4 bg-gray-500 bg-center bg-cover rounded-full md:w-40 md:h-40"
        />
        <div
          role="img"
          style={{
            backgroundImage: `url(${path}_alt.${member.extension || 'JPG'})`,
            display: hover && member.hasAlt ? 'block' : 'none',
          }}
          className="w-32 h-32 mb-4 bg-gray-500 bg-center bg-cover rounded-full md:w-40 md:h-40"
        />
        <h1 className="font-medium">{member.name}</h1>
        <p className="text-sm italic">{member.title}</p>
      </a>
    </motion.li>
  )
}
