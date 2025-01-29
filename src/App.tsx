import { Icon } from '@iconify/react'
import { BackgroundBeamsWithCollision } from './components/background-beams-with-collision'
import { CardSpotlight } from './components/card-spotlight'

const features = [
  {
    title: '🖕 Brutally Honest',
    description: 'No fake names, no fake data—just the universal truth in emoji form, delivered with absolute consistency.',
  },
  {
    title: '⚡ No Compromises',
    description: 'A package that does one thing and does it perfectly, without unnecessary complexity or distractions.',
  },
  {
    title: '🎯 Straight to the Point',
    description: 'Generates a single, unfiltered response every time, making sure there’s no room for misunderstanding.',
  },
  {
    title: '🚀 Lightweight and Fast',
    description: 'Designed to be as minimal as possible, returning 🖕 instantly with no extra dependencies.',
  },
  {
    title: '🛠️ Open-Source and Community-Driven',
    description: 'Actively maintained and welcoming contributions from those who love coding with humor.',
  },
  {
    title: '👨‍💻 Built for Developers',
    description: 'For those who appreciate simplicity, fun, and an honest approach to generating fake data.',
  },
];

const App = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className='w-full h-full flex flex-col items-center justify-center max-w-6xl px-6 py-12 gap-12'>
          <div>
            <h1 className="text-4xl relative z-20 sm:text-6xl lg:text-8xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">fukerjs</span>
              - The Most Honest Fake Data Generator
            </h1>
          </div>
          <div>
            <p className='text-lg text-center text-slate-400 sm:text-2xl'>📌 No fake names, no fake addresses, no fake numbers. Just one universal truth: 🖕</p>
          </div>
          <div className='z-30 flex items-center gap-4'>
            <a className="p-[3px] relative cursor-pointer" href='#get-started'>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Get Started
              </div>
            </a>
            <a
              href="http://github.com/ilhamranggakurniawan/faker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white transition-all duration-300 hover:text-zinc-400"
            >
              <Icon icon="tabler:brand-github" />
            </a>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <div className='bg-neutral-950 h-full py-12 px-4 space-y-6 sm:px-8 lg:space-y-16 scroll-smooth'>
        <h2 className='text-4xl text-white font-bold' id='get-started'>Get Started</h2>
        <div className='space-y-12 xl:flex xl:gap-12'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {features.map((feature) => (
              <CardSpotlight className="w-full flex flex-col gap-4">
                <h3 className='text-white font-bold text-xl z-50 relative '>{feature.title}</h3>
                <p className='text-slate-400 z-50 relative '>{feature.description}</p>
              </CardSpotlight>
            ))}
          </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-2xl text-white font-bold">Installation</h3>
              <div className="prose prose-invert max-w-none">
                <pre className="w-full rounded-xl border border-zinc-800 p-6 bg-black">
                  <code className='text-white'>npm install fukerjs</code>
                </pre>
              </div>
              <h3 className="text-2xl text-white font-bold">Usage</h3>
              <div className="prose prose-invert max-w-none">
                <pre className="w-full rounded-xl border border-zinc-800 p-6 overflow-x-scroll bg-black md:overflow-x-hidden ">
                  <code className='text-white'>
                    {`import faker from 'fukerjs'

console.log(faker.generateMiddleFinger());  // 🖕🏿
console.log(faker.generateMiddleFinger({skinTone: 1}));  // 🖕
console.log(faker.isMiddleFinger("🖕"));  // true`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App