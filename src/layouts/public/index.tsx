// import { useAppContext } from "contexts";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AccessProtected } from "@/hooks";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
const PublicLayout = ({
  children = <></>,
  title = "Shree Odisha Handloom",
  description,
  ogImage,
}: Props) => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://shreyanecom-recent.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta
          name="description"
          content="Shop trendy clothes online at Shree Odisha Handloom. Find the perfect outfit for any occasion. Browse now!"
        />
        <meta
          property="og:image"
          content={
            ogImage ? ogImage : "https://shreyanecom-recent.vercel.app/logo.png"
          }
        />
        <script
          src="https://checkout.razorpay.com/v1/checkout.js"
          defer
        ></script>
      </Head>
      <main className=" w-full relative ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default PublicLayout;
