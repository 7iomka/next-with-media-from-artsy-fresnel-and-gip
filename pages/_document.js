import Document, { Head, Html, Main, NextScript } from 'next/document';
import { mediaStyles } from '../components/media';


class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <style
            type="text/css"
            // eslint-disable-next-line risxss/catch-potential-xss-react
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
