import React, { useState } from "react";

export default function Carousel({ album }) {
  const style = {
    carousel: {
      margin: "20px 5px",
      borderRadius: "0.5rem",
      minWidth: "300px",
      cursor: "pointer",
      boxShadow: "0 0 10px 2.5px gray",
      transition: "all 0.25s ease-in-out",

      ":hover": {
        boxShadow: "0 0 10px 5px #555",
        transform: "scale(1.05)",
      },
    },

    H5: {
      textDecoration: "line-through",
    },

    P: {
      textDecoration: "line-through",
    },
  };

  const [albumData, setAlbumData] = useState(album);
  const [deleteAlbum, setDeleteAlbum] = useState([]);
  const [albumBody, setAlbumBody] = useState("");

  async function onDeleteHandler(deleteId) {
    console.log(deleteId);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1${deleteId}`,
      {
        method: "DELETE",
      }
    );
    const responseJSON = await response.json();
    if (responseJSON) {
      console.log("Dummy Deleted ");
      console.log(responseJSON);
      const tempArray = [...deleteAlbum, deleteId];
      setDeleteAlbum(tempArray);
    }
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    const albumId = event.target[0].value;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${albumId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          body: albumBody,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    const modifiedData = albumData.map((element) => {
      if (element.id === responseJSON.id) {
        return { ...element, title: albumBody };
      } else {
        return element;
      }
    });
    setAlbumData(modifiedData);
    setAlbumBody("");
  }

  return (
    <>
      <div
        id={`carouselExampleDark_${albumData[0].userId}`}
        className="carousel carousel-dark slide w-25"
        data-bs-ride="carousel"
        style={style.carousel}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
        </div>

        <div className="carousel-inner" style={{ borderRadius: "0.75rem" }}>
          {albumData.map((item) => {
            return (
              <>
                {item.id === 1 ||
                item.id === 11 ||
                item.id === 21 ||
                item.id === 31 ||
                item.id === 41 ||
                item.id === 51 ||
                item.id === 61 ||
                item.id === 71 ||
                item.id === 81 ||
                item.id === 91 ? (
                  <div
                    key={item.id}
                    className="carousel-item active"
                    data-bs-interval="5000"
                  >
                    {item.id === 1 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=1380&t=st=1682693752~exp=1682694352~hmac=478236ab800668015230b644a9be01afbaef75ba80f471c44b4a639c4eaa55b5"
                        alt="..."
                      />
                    )}
                    {item.id === 11 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1682694152~exp=1682694752~hmac=b2259d9f0105148a4fa0924d84a7d2662511c8a872eff92195a75844bd67d4f9"
                        alt="..."
                      />
                    )}
                    {item.id === 21 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1380&t=st=1682694238~exp=1682694838~hmac=ce533f615d95897a7f0e8bb4a5cbf5b5206f25d33f5143d4fd5b10e151a6d301"
                        alt="..."
                      />
                    )}
                    {item.id === 31 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=1380&t=st=1682694363~exp=1682694963~hmac=80ad6f370cf25d6abed19da2dbcbce61d38b5034d24e55a2dae1822defebd8f0"
                        alt="..."
                      />
                    )}
                    {item.id === 41 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?w=1380&t=st=1682694417~exp=1682695017~hmac=16664281e62d160039d9ceba0a91248173a0254aa38f1bceac891906375cefcd"
                        alt="..."
                      />
                    )}
                    {item.id === 51 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?w=1380&t=st=1682694582~exp=1682695182~hmac=7e27ea1a9376c545dc75242bfdb062e521acb9801694b8808c909f95c09cb504"
                        alt="..."
                      />
                    )}
                    {item.id === 61 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=1380&t=st=1682694728~exp=1682695328~hmac=492a1df2b0943612c967520183a87669f7a03eb7abf5c2ddeed4fb918185cf72"
                        alt="..."
                      />
                    )}
                    {item.id === 71 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/water-mountain-tourism-mountains-blue-countryside_1417-1226.jpg?w=1380&t=st=1682694783~exp=1682695383~hmac=abf73ac87b936a339f7a0ec26b9abbe029aee13ab5091a7c73f0afc260a3e643"
                        alt="..."
                      />
                    )}
                    {item.id === 81 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/vestrahorn-mountains-sunset-stokksnes-iceland_335224-574.jpg?w=1380&t=st=1682694863~exp=1682695463~hmac=e0bc7de7af04aec328b0de5adcf0993d056bf4f2e9af6c62e5963aca59530175"
                        alt="..."
                      />
                    )}
                    {item.id === 91 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/beautiful-shot-waterfall-forest_181624-27884.jpg?w=1380&t=st=1682694913~exp=1682695513~hmac=93eb41cf9d892564f1680f008673549c9d9d0fa6d3ee376c5ece620928b6e883"
                        alt="..."
                      />
                    )}

                    <div
                      className="carousel-caption d-md-block"
                      style={{
                        backgroundColor: "rgba(240,248,255,0.9)",
                        borderRadius: "0.5rem",
                        padding: "10px",
                      }}
                    >
                      <h5 className="display-6">Album {item.userId}</h5>

                      {deleteAlbum.includes(item.id) && (
                        <>
                          <h5 style={style.H5}>Title {item.id}</h5>
                          <p style={style.P}>{item.title}</p>
                        </>
                      )}
                      {!deleteAlbum.includes(item.id) && (
                        <>
                          <h5>Title {item.id}</h5>
                          <p>{item.title}</p>
                        </>
                      )}

                      <div
                        className="d-flex flex-row justify-content-evenly w-100 py-3"
                        style={{ position: "relative" }}
                      >
                        <button
                          onClick={() => {
                            onDeleteHandler(item.id);
                          }}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample_${item.id}`}
                          className="btn btn-outline-dark"
                        >
                          <i className="fa-solid fa-music"></i> &nbsp;Modify
                        </button>

                        <div
                          className="collapse"
                          id={`collapseExample_${item.id}`}
                          style={{
                            position: "absolute",
                            top: "-175%",
                            zIndex: "5",
                          }}
                        >
                          <div
                            className="card card-body"
                            style={{ width: "100%" }}
                          >
                            <form onSubmit={onSubmitHandler}>
                              <input type="text" value={item.id} hidden />
                              <div className="mb-3">
                                <label
                                  htmlFor="formGroupExampleInput3"
                                  className="form-label"
                                >
                                  Enter Body
                                </label>
                                <input
                                  onChange={(e) => {
                                    setAlbumBody(e.target.value);
                                  }}
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput3"
                                  value={albumBody}
                                  placeholder="Enter Body"
                                  required
                                ></input>
                              </div>
                              <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                <button
                                  type="submit"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseExample_${item.id}`}
                                  className="btn btn-success"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="fa-solid fa-square-check"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseExample_${item.id}`}
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="fa-solid fa-rectangle-xmark"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className="carousel-item"
                    data-bs-interval="5000"
                  >
                    {item.id > 1 && item.id < 11 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=1380&t=st=1682693752~exp=1682694352~hmac=478236ab800668015230b644a9be01afbaef75ba80f471c44b4a639c4eaa55b5"
                        alt="..."
                      />
                    )}
                    {item.id > 11 && item.id < 21 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1682694152~exp=1682694752~hmac=b2259d9f0105148a4fa0924d84a7d2662511c8a872eff92195a75844bd67d4f9"
                        alt="..."
                      />
                    )}
                    {item.id > 21 && item.id < 31 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?w=1380&t=st=1682694238~exp=1682694838~hmac=ce533f615d95897a7f0e8bb4a5cbf5b5206f25d33f5143d4fd5b10e151a6d301"
                        alt="..."
                      />
                    )}
                    {item.id > 31 && item.id < 41 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=1380&t=st=1682694363~exp=1682694963~hmac=80ad6f370cf25d6abed19da2dbcbce61d38b5034d24e55a2dae1822defebd8f0"
                        alt="..."
                      />
                    )}
                    {item.id > 41 && item.id < 51 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?w=1380&t=st=1682694417~exp=1682695017~hmac=16664281e62d160039d9ceba0a91248173a0254aa38f1bceac891906375cefcd"
                        alt="..."
                      />
                    )}
                    {item.id > 51 && item.id < 61 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?w=1380&t=st=1682694582~exp=1682695182~hmac=7e27ea1a9376c545dc75242bfdb062e521acb9801694b8808c909f95c09cb504"
                        alt="..."
                      />
                    )}
                    {item.id > 61 && item.id < 71 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=1380&t=st=1682694728~exp=1682695328~hmac=492a1df2b0943612c967520183a87669f7a03eb7abf5c2ddeed4fb918185cf72"
                        alt="..."
                      />
                    )}
                    {item.id > 71 && item.id < 81 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/water-mountain-tourism-mountains-blue-countryside_1417-1226.jpg?w=1380&t=st=1682694783~exp=1682695383~hmac=abf73ac87b936a339f7a0ec26b9abbe029aee13ab5091a7c73f0afc260a3e643"
                        alt="..."
                      />
                    )}
                    {item.id > 81 && item.id < 91 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/vestrahorn-mountains-sunset-stokksnes-iceland_335224-574.jpg?w=1380&t=st=1682694863~exp=1682695463~hmac=e0bc7de7af04aec328b0de5adcf0993d056bf4f2e9af6c62e5963aca59530175"
                        alt="..."
                      />
                    )}
                    {item.id > 91 && item.id < 101 && (
                      <img
                        height={"350px"}
                        width={"500px"}
                        src="https://img.freepik.com/free-photo/beautiful-shot-waterfall-forest_181624-27884.jpg?w=1380&t=st=1682694913~exp=1682695513~hmac=93eb41cf9d892564f1680f008673549c9d9d0fa6d3ee376c5ece620928b6e883"
                        alt="..."
                      />
                    )}

                    <div
                      className="carousel-caption d-md-block"
                      style={{
                        backgroundColor: "rgba(240,248,255,0.9)",
                        borderRadius: "0.5rem",
                        padding: "10px",
                      }}
                    >
                      <h5 className="display-6">Album {item.userId}</h5>

                      {deleteAlbum.includes(item.id) && (
                        <>
                          <h5 style={style.H5}>Title {item.id}</h5>
                          <p style={style.P}>{item.title}</p>
                        </>
                      )}
                      {!deleteAlbum.includes(item.id) && (
                        <>
                          <h5>Title {item.id}</h5>
                          <p>{item.title}</p>
                        </>
                      )}

                      <div
                        className="d-flex flex-row justify-content-evenly w-100 py-3"
                        style={{ position: "relative" }}
                      >
                        <button
                          onClick={() => {
                            onDeleteHandler(item.id);
                          }}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample_${item.id}`}
                          className="btn btn-outline-dark"
                        >
                          <i className="fa-solid fa-music"></i>&nbsp;Modify
                        </button>

                        <div
                          className="collapse"
                          id={`collapseExample_${item.id}`}
                          style={{
                            position: "absolute",
                            top: "-175%",
                            zIndex: "5",
                          }}
                        >
                          <div
                            className="card card-body"
                            style={{ width: "100%" }}
                          >
                            <form onSubmit={onSubmitHandler}>
                              <input type="text" value={item.id} hidden />
                              <div className="mb-3">
                                <label
                                  htmlFor="formGroupExampleInput3"
                                  className="form-label"
                                >
                                  Enter Body
                                </label>
                                <input
                                  onChange={(e) => {
                                    setAlbumBody(e.target.value);
                                  }}
                                  type="text"
                                  className="form-control"
                                  id="formGroupExampleInput3"
                                  value={albumBody}
                                  placeholder="Enter Body"
                                  required
                                ></input>
                              </div>
                              <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                <button
                                  type="submit"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseExample_${item.id}`}
                                  className="btn btn-success"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="fa-solid fa-square-check"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseExample_${item.id}`}
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="fa-solid fa-rectangle-xmark"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExampleDark_${albumData[0].userId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
