import About from './components/about';
import ArtGrid from './components/artgrid';
import NavigationBar from './components/navigation'
import { Ubuntu } from 'next/font/google'

export const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
  style: ['normal'],
  preload: false,
});

export default function Home() {
  return (
    <div className={'bg-slate-100 h-screen text-black content-center block items-center justify-center'} >
      <NavigationBar />
      <About />
      <ArtGrid />
    </div>
  )
}
