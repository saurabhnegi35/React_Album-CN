import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./Album.css";
import AddNewAlbum from "./AddNewAlbum";

export default function Album() {
  const [album, setAlbum] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [fetchedData, setFetchedData] = useState("");

  function onAddNewAlbum(data) {
    setAddNew(true);
    console.log(data);
    setFetchedData(data);
  }

  useEffect(() => {
    (async function fetchAlbumData() {
      const albumArray = [];
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const responseJSON = await response.json();

      for (let i = 0; i < responseJSON.length; i += 10) {
        let emptyArray = [];
        emptyArray = responseJSON.slice(i, [i + 10]);
        albumArray.push(emptyArray);
      }
      setAlbum(albumArray);
    })();
  }, []);

  return (
    <>
      <header>
        <h1 className="display-1 text-center py-5 albumH1">
          {" "}
          <img
            src="https://pic.onlinewebfonts.com/svg/img_284467.png"
            width={"100px"}
            alt="..."
          />{" "}
          Photo Album{" "}
        </h1>
      </header>
      <main className="albumMain">
        <section className="albumSection">
          {album.map((album) => {
            return <Carousel album={album} key={album[0].userId} />;
          })}
          {addNew && (
            <div
              style={{
                borderRadius: "0.75rem",
                backgroundColor: "aliceblue",
                cursor: "pointer",
                border: "1px solid black",
                boxShadow: "0 0 10px 1.5px #888",
              }}
            >
              <img
                height={"250px"}
                width={"400px"}
                style={{ borderRadius: "1rem" }}
                src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=1380&t=st=1682693752~exp=1682694352~hmac=478236ab800668015230b644a9be01afbaef75ba80f471c44b4a639c4eaa55b5"
                alt="..."
              />
              <div
                style={{
                  backgroundColor: "rgba(240,248,255,0.9)",
                  borderRadius: "0.5rem",
                  padding: "10px",
                }}
              >
                <h5
                  style={{ textAlign: "center", textTransform: "capitalize" }}
                >
                  {fetchedData.title} {fetchedData.id}
                </h5>
                <p style={{ textAlign: "center" }}>{fetchedData.body}</p>
              </div>
            </div>
          )}
          <AddNewAlbum onAddNewAlbum={onAddNewAlbum} />
        </section>
      </main>
    </>
  );
}
