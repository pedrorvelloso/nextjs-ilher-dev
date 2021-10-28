import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <noscript
            // hack to disable animations when no javascript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<style>[style*='opacity:0'] {
              opacity: unset !important;
              transform: unset !important;
            }
            .avatar-sm,.avatar-lg {
              opacity: unset !important;
            }
            </style>`,
            }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
