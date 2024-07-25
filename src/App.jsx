/**
 *
 * @returns imports
 * // react-router-dom
 * npm install react-router-dom // useLocation to reach any part of the page
 * // scroll-lock to prevent scrolling when the menu is open and this package is used for phones so then when we tap on menu items we will be redirected to that part of thee page
 * npm install scroll-lock
 * // the package that shows us beautiful circles at the back seems to be moving as cursor moves we use react-just-paralax
 * npm install react-just-parallax
 *
 *
 * to know about https://css-tricks.com/absolute-positioning-inside-relative-positioning/  // absolute position inside relative position
 */
// to take full viewport height min-h-screen

import {
  Benefits,
  Collaboration,
  Footer,
  Header,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from "./sections";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}

export default App;
