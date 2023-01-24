import '../styles/globals.css';
import { QuioscoProvider } from '../context/QuiscoProvider';

export default function App({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  )
}
