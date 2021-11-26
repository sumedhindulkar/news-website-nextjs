import { PostMd } from ".";
import { getPosts } from "../services";

import Image from "next/image";
import img from "../public/tesla.jpg";
import img1 from "../public/app.jpg";
import img2 from "../public/bank.jpg";
import img3 from "../public/investment.jpg";
import img4 from "../public/crypto.jpg";

import Link from "next/link";
import headerStyles from "../styles/Header.module.css";
export default function Header({ posts }) {
  console.log("our posts", posts, getPosts());
  const demoPosts = [
    {
      title:
        "Tesla exec comments on Ford Supercharger, calls it a knock-off of Tesla design ",
      img: img,
    },
    {
      title:
        "Bitcoin Price in India Today Slightly Up Following Sudden Market Crash Amid Panic",
      img: img4,
    },
    {
      title:
        "Ola Electric partners banks, financial institutes to offer loans to customers  ",
      img: img1,
    },
    {
      title:
        "Ola Electric partners banks, financial institutes to offer loans to customers ",
      img: img2,
    },
    {
      title: "Top 5 Best Investment Apps in India ",
      img: img3,
    },
  ];
  return (
    <>
      <div className="header container">
        <div className=" h-100">
          <div className="row ">
            <div className="row col" style={{ minWidth: "500px" }}>
              <Link href="/">
                <a style={{ padding: "0" }}>
                  <div className={headerStyles.post + " col p-0"}>
                    <Image src={demoPosts[0].img} objectFit="cover" />
                    <div className={headerStyles.postDesc + " "}>
                      <h1 className={headerStyles.postTitleH1}>
                        {demoPosts[0].title}
                      </h1>
                      <h4 className={headerStyles.author}>
                        Author: Charles henesy <span>11th feb 2017</span>
                      </h4>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="row col" style={{ minWidth: "500px" }}>
              {demoPosts.slice(1, 5).map((item, i) => {
                return (
                  <>
                    <div
                      key={item.title}
                      className={headerStyles.post + " col gx-1 "}
                    >
                      <Link href="/">
                        <a>
                          <PostMd posts={item} />
                        </a>
                      </Link>
                    </div>

                    {i % 2 != 0 ? <div className="w-100"></div> : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
