import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/Lupleg-dev/Lupdocs',
  },
  docsRepositoryBase: 'https://github.com/Lupleg-dev/Lupdocs/tree/main',
  footer: {
    text: <span>
       <b>Lupleg Docs </b>© {new Date().getFullYear()}   - Open Source
    </span>,
  },
  logo: (
    <>
<Image src="/images/lupleg.png" alt="Hello" width={100} height={100} />
    </>
  ),
  search: {
    placeholder: 'Search the Guide...',
  },
}

export default config
