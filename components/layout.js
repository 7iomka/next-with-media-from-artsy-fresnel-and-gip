import Head from 'next/head'
import styles from './layout.module.css'
import { Media } from './media'
import { TestWithMedia } from './test-with-media'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <Media lessThan="sm">

      Mobile content
      </Media>
      <Media greaterThanOrEqual="sm">
        some on {'>'}=sm
        <TestWithMedia>lol</TestWithMedia>
      </Media>
    </>
  )
}
