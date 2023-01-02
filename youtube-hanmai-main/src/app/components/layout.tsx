import { Component } from 'solid-js'

import { Footer } from './footer'
import { Header } from './header'

export const Layout: Component = props => {
  return (
    <div class="mx-auto max-w-7xl pt-12 px-6">
      <Header />
      <div class="mt-6">{props.children}</div>
      <Footer />
    </div>
  )
}
