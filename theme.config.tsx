import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/eman101101/learnswimming',
  },
  docsRepositoryBase: 'https://github.com/eman101101/learnswimming/blob/main',
  footer: {
    text: <span>
       <b>Created using Nextra and Next.Js <br></br></b>© {new Date().getFullYear()}   - Evan Koumarelas
    </span>,
  },
  logo: (
    <>
<Image src="/images/learnlogo.png" alt="Hello" width={100} height={100} />
    </>
  ),
  search: {
    placeholder: 'Search the Guide...',
  },
}

export default config
