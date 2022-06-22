import { MediaContextProvider } from '../components/media'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (<MediaContextProvider>{getLayout(<Component {...pageProps} />)}</MediaContextProvider>)
}
