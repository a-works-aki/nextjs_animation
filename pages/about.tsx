import Link from 'next/link'
import Layout from '../components/Layout'
import SlideInImage from '../components/SlideInImage'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
    <div className='max-w-7xl h-auto m-auto'>
      <SlideInImage src='/sample_image01.png' />
      <SlideInImage src='/sample_image01.png' />
      <SlideInImage src='/sample_image01.png' />
      <SlideInImage src='/sample_image01.png' />
      <SlideInImage src='/sample_image01.png' />
    </div>
  </Layout>
)

export default AboutPage
