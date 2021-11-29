import Image from "next/image";
import img from "../public/app.jpg";
function PostCard() {
  return (
    <>
      <div className="col-6 mb-4 gx-0">
        <div className="card p-2" style={{ width: "95%", minWidth: "400px" }}>
          <Image src={img} width={1000} height={650} objectFit="cover" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
