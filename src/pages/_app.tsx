import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutApp from 'components/Layout/LayoutApp'
import { useRouter } from 'next/router'
import LayoutPublic from 'components/Layout/LayoutPublic'
import LayoutTenant from 'components/Layout/LayoutTenant'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const { pathname } = router;

  const Layout = pathname.indexOf("/app") === 0 ? LayoutApp :
                  pathname.indexOf("/[slug]") === 0 ? LayoutTenant :
                    LayoutPublic

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
