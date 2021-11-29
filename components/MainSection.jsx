import { PostCard } from ".";
function Mainsection() {
  return (
    <>
      <div className="container mt-5" style={{ height: "80vh" }}>
        <div className="row ">
          <div className="col-9 gx-0 ">
            <div className="row">
              {[0, 1, 2, 3, 4, 5].map((item) => {
                return (
                  <>
                    <PostCard />
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-3 gx-0 ">
            <div className="card">
              <div
                className="card-header bg-dark text-white py-3
"
              >
                Popular Searches
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Stock Market News</li>
                <li className="list-group-item">Finance News</li>
                <li className="list-group-item">Vaccinations</li>
                <li className="list-group-item">Tourist places</li>
                <li className="list-group-item">Top Animes</li>
              </ul>
            </div>
            <div className="card mt-4 bg-light" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">About us</h5>
                <p className="card-text my-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <a href="#" className="card-link btn btn-primary w-100 ">
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainsection;
