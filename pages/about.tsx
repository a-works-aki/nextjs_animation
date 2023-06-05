import Link from "next/link";
import Layout from "../components/Layout";
import SlideInImage from "../components/SlideInImage";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1 className="h-20">About</h1>
    <p className="h-20">This is the about page</p>
    <p className="h-20">
      <Link href="/">Go home</Link>
    </p>
    <div className="max-w-7xl m-auto bg-blue-300">
      <SlideInImage src="/sample_image01.png" />
    </div>
  </Layout>
);

export default AboutPage;
