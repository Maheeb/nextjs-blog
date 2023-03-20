import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Link from "next/link";

function PostSection() {

    const culturePosts = useSelector(state => state.blogSlice.cultures)
    const trendingPosts = useSelector(state => state.blogSlice.trending)
    const blogPosts = useSelector(state => state.blogSlice.blogPosts)
    const randomNum = Math.floor(Math.random() * 18) + 1;
    let sideBarPosts = [];
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    const slug_id= hydrated && blogPosts[randomNum].id

    for (let i = 0; i < 6; i++) {
        // Get a random index from the remaining elements in the array
        let randomIndex = Math.floor(Math.random() * blogPosts.length);
        let selectedObject = blogPosts[randomIndex];

        sideBarPosts.push(selectedObject);
    }
    return(
        <section id="posts" className="posts">
            <div className="container" data-aos="fade-up">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="post-entry-1 lg">
                            <Link href={`/post/${slug_id}`}>
                                <img
                                    src="/img/post-landscape-1.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            <div className="post-meta">
                                <span className="date">Culture</span>

                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2>
                                <Link href={`/post/${slug_id}`}>
                                    {hydrated && blogPosts[randomNum].title}
                                </Link>
                            </h2>
                            <p className="mb-4 d-block">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                                temporibus repudiandae, inventore pariatur numquam cumque possimus
                                exercitationem? Nihil tempore odit ab minus eveniet praesentium,
                                similique blanditiis molestiae ut saepe perspiciatis officia nemo,
                                eos quae cumque. Accusamus fugiat architecto rerum animi atque
                                eveniet, quo, praesentium dignissimos
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row g-5">
                            <div className="col-lg-4 border-start custom-border">
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-2.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Sport</span>

                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-5.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Food</span>
                                        <span className="mx-1">•</span> <span>Jul 17th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-7.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Design</span>
                                        <span className="mx-1">•</span> <span>Mar 15th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}

                                        </Link>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 border-start custom-border">
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-3.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Business</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-6.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Tech</span>
                                        <span className="mx-1">•</span> <span>Mar 1st '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-8.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Travel</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && blogPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="trending">
                                    <h3>Trending</h3>
                                    <ul className="trending-post">
                                        {hydrated && sideBarPosts.map((value, index) => (

                                        <li key={index}>
                                            <Link href={`/post/${slug_id}`}>
                                                <span className="number">1</span>
                                                <h3>
                                                    {value.title}
                                                </h3>
                                            </Link>
                                        </li>

                                        ))}

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default PostSection;