import headerStyles from "../styles/Header.module.css";
import Image from "next/image";
function PostMd({ posts }) {
  return (
    <>
      <div>
        <Image src={posts.img} />
        <div className={headerStyles.postDescMd}>
          <h4 className={headerStyles.postTitleH4}>{posts.title}</h4>
        </div>
      </div>
    </>
  );
}

export default PostMd;
