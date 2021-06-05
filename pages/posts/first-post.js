import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const YourComponent = () => (
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
)



export default function FirstPost(props) {
  console.log("PROPS", props)
  return (
    <Layout>
      <Head>
        <title>First Post for {props.name}</title>
      </Head>
      <h1>First Post for {props.name}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  const data = {
    id: "hsdjsdkh",
    name: "Marco",
    surname: "Beretta"
  }

  // Pass data to the page via props
  return { props: data }
}
