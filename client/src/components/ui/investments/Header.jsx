import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch()
  const { isCapital } = useSelector(state => state.switcher)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`
      w-full flex justify-center bg-background
      rounded-bl-xl rounded-br-xl pt-2 pb-4
      sticky top-0 left-0  z-10
      transition-[border-width] duration-300 ease-in-out
      ${isScrolled ? 'border-b-4' : 'border-b-0'} 
    `}>
      <nav className='w-[600px] flex items-center justify-around gap-2.5  h-[42px] rounded-full'>
        <div className={`w-[500px] h-11 flex justify-between items-center gap-5 bg-white px-5 py-[9px] rounded-full border-2 border-solid ${isCapital ? 'border-primary' : 'border-accent'}`}>
          <input
            className="w-[450px] font-normal text-base text-muted outline-none"
            placeholder='Buscar por nombre o ticker'
          />
          <img 
            src={`/assets/search-${isCapital ? 'capital' : 'crypto'}.svg`} 
            className="size-6 cursor-pointer" 
          />
        </div>
        <img 
          src={`/assets/baseline-filter-${isCapital ? 'capital' : 'crypto'}.svg`} 
          alt='filter' 
          className="size-11 cursor-pointer" 
        />
      </nav>
    </header>
  )
}
