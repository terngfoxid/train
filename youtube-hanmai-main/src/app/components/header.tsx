import { Component } from 'solid-js'
import { Link } from 'solid-app-router'

export const Header: Component = () => {
  return (
    <header class="flex items-center mb-6">
      <Link href="/">
        <p class="text-gray-300 font-bold text-xl leading-none select-none">
          ตารางหารบ้านคาเร็น
        </p>
      </Link>
      {/* <div class="mx-4 h-6 border-l-2 border-gray-300" /> */}
    </header>
  )
}
