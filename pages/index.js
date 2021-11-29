// import Head from "next/head";
import { Header } from "../components";
import Mainsection from "../components/MainSection";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
export default function Home({ data }) {
  return (
    <>
      <Header />
      <Mainsection />
    </>
  );
}
