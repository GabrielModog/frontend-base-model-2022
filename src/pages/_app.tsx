import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

import { mantineTheme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
