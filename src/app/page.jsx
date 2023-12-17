import React from "react";
import "./homepage.css";
import Bloglist from "../Components/Blog/blog";

const page = () => {
  return (
    <div>
      <div class="banner">
        <div class="heromain">
          <div class="herotext"></div>
        </div>
      </div>
      <div className="service">
        <h2>Top rated</h2>
        <div className="cards">
          <div className="maincard">
            <div class="card">
              <div class="bg">
                <div class="blob"></div>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BMGU1NzE1Y2UtZmZkOC00ODQ4LTkwNDAtNmE4Yzk3NTA4MThlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h3>Eminence in Shadow</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="maincard">
            <div class="card">
              <div class="bg">
                <div class="blob"></div>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BMDM3M2YwZjgtM2JjYi00MGY1LWE4MjMtOWZkOGNkNDA0ZDAwXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_FMjpg_UX1000_.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h3>Solo Leveling</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="maincard">
            <div class="card">
              <div class="bg">
                <div class="blob"></div>
                <div className="image">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h3>jujutsu kaisen</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>News</h2>
      <Bloglist />
    </div>
  );
};

export default page;
