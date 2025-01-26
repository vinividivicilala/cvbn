import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return initialProps;
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* skip favicon.ico */}
          {/* 48x48 */}
          <link rel="icon" href="/icon.png" type="image/png" />
          <link rel="icon" href="/icon.svg" type="image/svg+xml" />
          {/* 180x180 */}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <link rel="manifest" href="/manifest.webmanifest" />
          <meta name="theme-color" content="rgb(235, 74, 46)" />
        </Head>

        <body
          style={{
            backgroundColor: "#fcf8ed",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
