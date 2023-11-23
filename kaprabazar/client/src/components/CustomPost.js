import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsImage } from "react-icons/bs";

const RecentPosts = (props) => {
  let { num, allPosts, Img1, title, description, link, linkTitle } = props;
  return (
    <>
      <div className="pasts_slide">
        {title && description && link && linkTitle ? (
          <h3>
            {title}
            <span>
              {description} <Link to={link}> {linkTitle}</Link>
            </span>
          </h3>
        ) : (
          ""
        )}

        <div className="slide_flex">
          {allPosts.length > 0 ? (
            allPosts
              .slice(num)
              .sort((a, b) => ((a.id, b.id) ? -1 : -1))
              .map((post, index) => {
                return (
                  <div className="slide" key={index}>
                    <Link
                      to={`/ad/${post.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "")}`}
                      state={post}
                    >
                      <div className="post_img">
                        <img
                          src={
                            post.files[0].preview ? post.files[0].preview : Img1
                          }
                          alt=""
                        />

                        {post.featured === true ? (
                          <span className="featured-btn">FEATURED</span>
                        ) : null}
                        <span className="fav-icon">
                          <BsSuitHeart />
                        </span>

                        <span className="img-icon">
                          <BsImage /> <span>{post?.files.length}</span>
                        </span>
                      </div>
                      <div className="post-details">
                        <p>{post.title}</p>
                        <h4 className="price">
                          {post.price !== ""
                            ? `Rs ${post.price}`
                            : post.priceType}{" "}
                          {post.discount ? (
                            <span className="old_price">
                              <del>
                                {(post.price *
                                  (100 + Math.floor(post.discount))) /
                                  100}
                              </del>
                            </span>
                          ) : (
                            ""
                          )}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })
          ) : (
            <p className="emptyData">No Data</p>
          )}
        </div>
      </div>
    </>
  );
};

const FeaturedPosts = (props) => {
  let { allPosts, Img1, title, description, link, linkTitle } = props;
  return (
    <>
      <div className="pasts_slide">
        {title && description && link && linkTitle ? (
          <h3>
            {title}
            <span>
              {description} <Link to={link}> {linkTitle}</Link>
            </span>
          </h3>
        ) : (
          ""
        )}
        <div className="slide_flex">
          {allPosts.length > 0 ? (
            allPosts
              .filter((e) => e.featured === true)
              .sort((a, b) => ((a.id, b.id) ? -1 : -1))
              .slice(-6)
              .map((post, index) => {
                return (
                  <div className="slide" key={index}>
                    <Link
                      to={`/ad/${post.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "")}`}
                      state={post}
                    >
                      <div className="post_img">
                        <img
                          src={
                            post.files[0].preview ? post.files[0].preview : Img1
                          }
                          alt=""
                        />
                        {post.featured === true ? (
                          <span className="featured-btn">FEATURED</span>
                        ) : null}

                        <span className="fav-icon">
                          <BsSuitHeart />
                        </span>

                        <span className="img-icon">
                          <BsImage /> <span>{post?.files.length}</span>
                        </span>
                      </div>
                      <div className="post-details">
                        <p>{post.title}</p>
                        <h4 className="price">
                          {post.price !== ""
                            ? `Rs ${post.price}`
                            : post.priceType}{" "}
                          {post.discount ? (
                            <span className="old_price">
                              <del>
                                {(post.price *
                                  (100 + Math.floor(post.discount))) /
                                  100}
                              </del>
                            </span>
                          ) : (
                            ""
                          )}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })
          ) : (
            <p className="emptyData">No Data</p>
          )}
        </div>
      </div>
    </>
  );
};

const CategoryPosts = (props) => {
  let { num, allPosts, Img1, title, description, link, linkTitle, cat } = props;
  return (
    <>
      <div className="pasts_slide">
        {title && description && link && linkTitle ? (
          <h3>
            {title}
            <span>
              {description} <Link to={link}> {linkTitle}</Link>
            </span>
          </h3>
        ) : (
          ""
        )}
        <div className="slide_flex">
          {allPosts.length > 0 ? (
            allPosts
              .filter((e) => e.category === cat)
              .slice(num)
              .sort((a, b) => ((a.id, b.id) ? -1 : -1))
              .map((post, index) => {
                return (
                  <div className="slide" key={index}>
                    <Link
                      to={`/ad/${post.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "")}`}
                      state={post}
                    >
                      <div className="post_img">
                        <img
                          src={
                            post.files[0].preview ? post.files[0].preview : Img1
                          }
                          alt=""
                        />
                        {post.featured === true ? (
                          <span className="featured-btn">FEATURED</span>
                        ) : null}

                        <span className="fav-icon">
                          <BsSuitHeart />
                        </span>

                        <span className="img-icon">
                          <BsImage /> <span>{post?.files.length}</span>
                        </span>
                      </div>
                      <div className="post-details">
                        <p>{post.title}</p>
                        <h4 className="price">
                          {post.price !== ""
                            ? `Rs ${post.price}`
                            : post.priceType}{" "}
                          {post.discount ? (
                            <span className="old_price">
                              <del>
                                {(post.price *
                                  (100 + Math.floor(post.discount))) /
                                  100}
                              </del>
                            </span>
                          ) : (
                            ""
                          )}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })
          ) : (
            <p className="emptyData">Not results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

const SearchPosts = (props) => {
  let { allPosts, Img1, title } = props;
  const [searchFilter, setSearchFilter] = useState([]);

  const filterSearch = (val) => {
    let filter = allPosts.filter((post) => {
      let searchTerm = val?.toLowerCase();
      let value = post.title.toLowerCase();
      if (value.includes(searchTerm)) return post;
      else if (searchTerm === "all") return post;
    });

    setSearchFilter(filter);
  };
  useEffect(() => {
    filterSearch(title);
  }, [title]);

  return (
    <>
      <div className="pasts_slide">
        <div className="slide_flex">
          {searchFilter.length > 0 ? (
            searchFilter.map((post, index) => {
              return (
                <div className="slide" key={index}>
                  <Link
                    to={`/ad/${post.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                    state={post}
                  >
                    <div className="post_img">
                      <img
                        src={
                          post.files[0].preview ? post.files[0].preview : Img1
                        }
                        alt=""
                      />

                      {post.featured === true ? (
                        <span className="featured-btn">FEATURED</span>
                      ) : null}

                      <span className="fav-icon">
                        <BsSuitHeart />
                      </span>

                      <span className="img-icon">
                        <BsImage /> <span>{post?.files.length}</span>
                      </span>
                    </div>
                    <div className="post-details">
                      <p>{post.title}</p>
                      <h4 className="price">
                        {post.price !== ""
                          ? `Rs ${post.price}`
                          : post.priceType}{" "}
                        {post.discount ? (
                          <span className="old_price">
                            <del>
                              {(post.price *
                                (100 + Math.floor(post.discount))) /
                                100}
                            </del>
                          </span>
                        ) : (
                          ""
                        )}
                      </h4>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="emptyData">Results not found...!</p>
          )}
        </div>
      </div>
    </>
  );
};

export { RecentPosts, FeaturedPosts, CategoryPosts, SearchPosts };
