import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Sunseeker Cruisers | A New Wave of Yachting',description:'Ever dreamed of cruising the open seas in your own Sunseeker? Discover Wave Leasing, lease options, moorings and your next chapter on the water.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body>{children}</body></html>}
