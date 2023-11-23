import React, { useEffect, useState } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Img1 from "./../assets/imgs/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux-store/actions/all-actions/PostAction";
import {
  FeaturedPosts,
  CategoryPosts,
  RecentPosts,
} from "../components/CustomPost";
import Loader from "../basic_layout/loader/Loader";

const Home = () => {
  const [loader, setLoader] = useState(false);

  let dispatch = useDispatch();
  let allPosts = useSelector(({ PostState }) => PostState.posts);
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(allPosts);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [message, setMessage] = useState("");

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 5) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    if (minutes === 1) {
      clearInterval(timer);
      setMessage("Your code has expire please try again");
    }

    return () => clearInterval(timer);
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className="text-center">
        <p>
          {minutes === 1 ? (
            message
          ) : (
            <>
              Your code will expire with a minute{" "}
              {minutes < 10 ? "0" + minutes : minutes}:{" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </>
          )}
        </p>
      </div>
      <div className="banner">
        <MDBContainer>
          <h1>KAPRA BAZAR - WHERE FASHION MEETS AFFORDABILITY</h1>
          <p>
            Shop with ease and experience the best online clothing marketplace.
            Find both women's and men's clothing online and shop for the look
            you love. Choose your next outfit from the top preloved dress
            website.
          </p>
          <MDBBtn color="primary">Sell on KapraBazar</MDBBtn>
        </MDBContainer>
      </div>
      <MDBContainer>
        <RecentPosts
          allPosts={allPosts}
          Img1={Img1}
          title="Recent entries"
          description="Wanna Make Money with Us?"
          link="/ad-post"
          linkTitle="Sell Now"
          num={-6}
        />
      </MDBContainer>
      <div className="bg_gray p-0">
        <MDBContainer>
          <FeaturedPosts
            allPosts={allPosts}
            Img1={Img1}
            title="Featured Items"
            description="Boost Your Products Selling."
            link="/buy-ad-packages"
            linkTitle="See Packages"
          />

          <CategoryPosts
            allPosts={newList}
            cat="Womens Clothing"
            Img1={Img1}
            title="Women's Clothing"
            description="All Free, Post Women's Clothing now!"
            link="/ad-post"
            linkTitle="Sell Now"
            num={-6}
          />

          <CategoryPosts
            allPosts={newList}
            cat="Mens Clothing"
            Img1={Img1}
            title="Men's Clothing"
            description="All Free, Post Men's Clothing now!"
            link="/ad-post"
            linkTitle="Sell Now"
            num={-6}
          />

          <CategoryPosts
            allPosts={newList}
            cat="Kids & Babies"
            Img1={Img1}
            title="Kids & Babies"
            description="All Free, Post Kids & Babies Wearings now!"
            link="/ad-post"
            linkTitle="Sell Now"
            num={-6}
          />
          <CategoryPosts
            allPosts={newList}
            cat="Bags"
            Img1={Img1}
            title="Bags"
            description="All Free, Post Bags now!"
            link="/ad-post"
            linkTitle="Sell Now"
            num={-6}
          />

          <CategoryPosts
            allPosts={newList}
            cat="Footwear"
            Img1={Img1}
            title="Footwear"
            description="All Free, Post Footwears now!"
            link="/ad-post"
            linkTitle="Sell Now"
            num={-6}
          />
        </MDBContainer>
      </div>
    </>
  );
};

export default Home;
