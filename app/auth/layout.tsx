import NavBar from '@/components/NavBar'
import React from 'react'


 type Props = {
    children: React.ReactNode
 }

export default function Layout({ children }: Props) {
    return (
      <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
        <div className="flex-grow">
          <main className="my-0 py-16">{children}</main>
        </div>
    </div>
    )
  }