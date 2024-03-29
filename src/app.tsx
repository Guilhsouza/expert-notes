import logo from './assets/logo-nlw-expert.svg'
import { NewNotecard } from './components/new-note-card'
import { Notecard } from './components/note-card'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='nlw-expert' />

      <form className='w-full '>
        <input
          type='text'
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-600'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNotecard />

        <Notecard />
        <Notecard />
        <Notecard />
        <Notecard />
      </div>
    </div >
  )
}

