import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { About, Contact, Credentials, Experience, Projects, Stack } from "./components/Sections";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Credentials />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
