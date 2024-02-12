export function Notecard(): JSX.Element {
    return (
        <button className='
        rounded-xl 
        text-left 
        bg-slate-800 
        p-5 
        space-y-3 
        overflow-hidden 
        relative 
        outline-none
            
        hover:ring-2
        hover:ring-slate-600 

        focus-visible:ring-2 
        focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>
                Há 2 Dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, suscipit ipsa consequuntur asperiores temporibus saepe at deleniti exercitationem earum debitis quisquam eos, ullam ab reiciendis inventore facere corrupti quis possimus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, suscipit ipsa consequuntur asperiores temporibus saepe at deleniti exercitationem earum debitis quisquam eos, ullam ab reiciendis inventore facere corrupti quis possimus!
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-black/0 pointer-events-none' />
        </button>
    )
}