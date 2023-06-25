

import getUsers from '@/lib/getUsers'
import Image from 'next/image'
import UserList from './components/UserList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users',
  description: 'List of users',
}


export default async function Home() {

  const response = await getUsers()

  return (
    <main className='px-4 sm:px-12 flex-1 flex flex-col'>
      <UserList {...response} />
    </main>
  )
}
