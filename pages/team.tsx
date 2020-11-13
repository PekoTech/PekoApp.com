import Head from 'next/head'

import { Layout, Content } from '../components'

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
            <h1 className="text-xl font-medium mb-2">The Team</h1>
            <p className="text-sm">
              Just a bunch of hungry, weird pals looking to help planet earth.
            </p>
          </header>
          <ul className="grid grid-cols-2 gap-4 pb-8 md:grid-cols-3">
            {TeamMembers.map((member) => {
              return (
                <li
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    className="w-32 h-32 bg-gray-500 rounded-full mb-4 md:w-40 md:h-40"
                    alt={member.name}
                  />
                  <h1 className="font-medium">{member.name}</h1>
                  <p className="text-sm italic">{member.title}</p>
                </li>
              )
            })}
          </ul>
        </Content>
      </Layout>
    </>
  )
}
