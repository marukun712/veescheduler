import Link from "next/link";

export default function Header() {

return(
<div className="header">
<div className="navbar bg-base-100">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Vee-scheduler</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div> 

<div className="h-screen bg-gray-100 absolute">
  <div className="sidebar min-h-screen sm:w-56 w-[3.5rem] overflow-hidden border-r ">
    <div className="flex h-screen flex-col justify-between pt-2 pb-6">
      <div>
        <div className="w-max p-2.5">
          <img src="https://vee-official.jp/wp-content/themes/vee_v2.1.0/assets/img/logo_vee.svg" width={105} height={105} />
        </div>
        <ul className="mt-6 space-y-2 tracking-wide">
          <li className="min-w-max">
            <a href="/" aria-label="dashboard" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              <span className="-mr-1 font-medium">Top</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="/YABE" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
              <img src='https://cdn-icons-png.flaticon.com/512/994/994152.png' width={30} height={30}></img>
              <span className="-mr-1 font-medium">FBK</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="https://github.com/marukun712" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360' width='30' height='30'></img>
            <span className="-mr-1 font-medium">Github</span>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</div>
</div>
)
}