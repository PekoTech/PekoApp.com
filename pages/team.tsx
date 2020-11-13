import Head from 'next/head'

import { Layout, Content } from '../components'
import { useState } from 'react'

const TeamMembers = [
  {
    name: 'Sang Le',
    title: 'CEO & Co-Founder',
  },
  {
    name: 'Sandy Co',
    title: 'Head of Design & Co-Founder',
  },
  {
    name: 'Nanda Syahrasyad',
    title: 'Head of Engineering',
  },
  {
    name: 'Najla Sekariyanti',
    title: 'Product Designer',
  },
  {
    name: 'Connor Fong',
    title: 'Technical Advisor',
  },
  {
    name: 'Andrew Zulaybar',
    title: 'Software Engineer',
  },
] as const

export default function Team() {
  return (
    <>
      <Head>
        <title>Peko Team</title>
      </Head>
      <Layout>
        <Content>
          <header className="text-center mb-8 md:mb-16">
            <h1 className="text-xl font-medium mb-2 md:text-3xl">The Team</h1>
            <p className="text-sm">
              Just a bunch of hungry, weird pals looking to help planet earth.
            </p>
          </header>
          <ul className="grid grid-cols-2 gap-4 pb-8 md:grid-cols-3">
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
      className="flex flex-col items-center text-center"
      onMouseOver={() => !hover && setHover(true)}
      onMouseOut={() => hover && setHover(false)}
    >
      <div
        style={{
          backgroundImage: `url(${path}.JPG)`,
          display: hover ? 'none' : 'block',
        }}
        className="w-32 h-32 bg-gray-500 rounded-full mb-4 md:w-40 md:h-40 bg-cover bg-center"
      />
      <div
        style={{
          backgroundImage: `url(${path}_alt.JPG)`,
          display: hover ? 'block' : 'none',
        }}
        className="w-32 h-32 bg-gray-500 rounded-full mb-4 md:w-40 md:h-40 bg-cover bg-center"
      />
      <h1 className="font-medium">{member.name}</h1>
      <p className="text-sm italic">{member.title}</p>
    </li>
  )
}
