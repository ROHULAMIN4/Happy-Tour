import React, { useEffect } from "react";
import "./Review.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="name-item">
        <h1 className="mt-4 heading-turist">Our happy turist review </h1>
        <p className="mt-4">
          Traveling Bangladesh was really quite an experience of lifetime.{" "}
          <br />
          Specially the people and their simple lifestyle up here were very{" "}
          <br />
          pleasant to mingle with. Thanks to Interactive Bangladesh for this{" "}
          <br />
          little bit of re-exploration. Thanks.
        </p>
      </div>
      <div className="row mt-5 shadow-lg mb-5 review-back">
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-up">
          <div className="review-style">
            <p>
              <img
                src={"https://i.ibb.co/G0ZCXK8/profile-01-Copy.jpg"}
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Rohul Amin</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-right">
          <div className="review-style">
            <p>
              <img
                src={
                  "https://i.ibb.co/nnJkTPV/243139706-563919661522247-2160338141137637945-n.jpg"
                }
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Sopon Khan</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-down">
          <div className="review-style">
            <p>
              <img
                src={
                  "https://i.ibb.co/WKSYdwr/Tourists-enjoy-bathing-at-sea-in-Digha-Digha-in-East-Midnapore-district-of-West-Bengal-Photo-Getty-I.jpg"
                }
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Abdullah Eamin</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-right">
          <div className="review-style">
            <p>
              <img
                src={"https://i.ibb.co/dcBXrXJ/bangladesh-travel-guide-4.jpg"}
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Nila Rahman</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-left">
          <div className="review-style">
            <p>
              <img src={"https://i.ibb.co/R2T9wLn/images-2.jpg"} alt="" />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Safin Rahman</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-down-right">
          <div className="review-style">
            <p>
              <img
                src={
                  "https://i.ibb.co/qFvtLFh/sylhet-bangladesh-31-august-2021-260nw-2043404675.jpg"
                }
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Jhinuk Taiba</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-down-right">
          <div className="review-style">
            <p>
              <img
                src={
                  "https://i.ibb.co/2hdwQ1r/rsz-pexels-archie-binamira-705075.jpg"
                }
                alt=""
              />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Rehman Khandokar</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 mt-5" data-aos="fade-down-right">
          <div className="review-style">
            <p>
              <img src={"https://i.ibb.co/XjY4PR9/images-1.jpg"} alt="" />
            </p>
            <div className="review-name">
              <h4 className="text-primary">Sakin Chodhory</h4>
              <small>
                Whether you are traveling domestically within your home country
                or outside of it, you’ll need proper identification.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
