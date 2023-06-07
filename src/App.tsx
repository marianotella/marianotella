import { Menu } from './components/menu'
import { Header } from './components/header'
import { AboutMe } from './components/aboutMe'
import { Stack } from './components/stack'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { Social } from './components/social'

function App() {
  return (
    <>
      <div className="bg-[#120E26] text-white p-6 m-0 w-full h-full" id="start">
        <div className="fixed bottom-0 left-0 right-0 md:top-6 md:right-10 md:left-auto md:bottom-auto z-10">
          <Menu />
        </div>
        <header className="mt-10 md:mt-20 mx-auto md:w-3/5">
          <Header />
        </header>
        <section className="mt-20 pt-20 mx-auto md:w-2/6" id="about-me">
          <AboutMe />
        </section>
        <section className="mt-20 pt-20 mx-auto md:w-3/5" id="stack">
          <Stack />
        </section>
        <section className="mt-20 pt-20 mx-auto md:w-3/5" id="contact">
          <Contact />
        </section>
        <section className="mt-20 pt-20 max-auto w-full mb-10">
          <Footer />
        </section>
      </div>
      <aside className="mx-auto w-full absolute top-5 md:fixed md:w-auto md:top-auto md:bottom-10 md:right-8 ">
        <Social />
      </aside>
    </>
  )
}

export default App
