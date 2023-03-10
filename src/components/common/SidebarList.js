import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Link from "next/link";

function SidebarList() {
    const popularPosts = useSelector(state => state.blogSlice.blogPosts).filter(item => item.ptl==='p')
    const trendingPosts = useSelector(state => state.blogSlice.blogPosts).filter(item => item.ptl==='t')
    const latestPosts = useSelector(state => state.blogSlice.blogPosts).filter(item => item.ptl==='l')
    // console.log(trendingPosts)
    const randomNum = Math.floor(Math.random() * 9) + 1;
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    return(
        <>
            <div className="aside-block">
                <ul
                    className="nav nav-pills custom-tab-nav mb-4"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="pills-popular-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-popular"
                            type="button"
                            role="tab"
                            aria-controls="pills-popular"
                            aria-selected="true"
                        >
                            Popular
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-trending-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-trending"
                            type="button"
                            role="tab"
                            aria-controls="pills-trending"
                            aria-selected="false"
                        >
                            Trending
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-latest-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-latest"
                            type="button"
                            role="tab"
                            aria-controls="pills-latest"
                            aria-selected="false"
                        >
                            Latest
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">

                    <div
                        className="tab-pane fade show active"
                        id="pills-popular"
                        role="tabpanel"
                        aria-labelledby="pills-popular-tab"
                    >
                        { popularPosts.map((value, index) => (

                            <div className="post-entry-1 border-bottom">
                            <div className="post-meta">
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2 className="mb-2">
                                <Link href={`/post/${value.id}`}>
                                    {value.title}

                                </Link>
                            </h2>
                        </div>

                        ))}
                    </div>

                    <div
                        className="tab-pane fade"
                        id="pills-trending"
                        role="tabpanel"
                        aria-labelledby="pills-trending-tab"
                    >

                        { trendingPosts.map((value, index) => (

                            <div className="post-entry-1 border-bottom">
                            <div className="post-meta">
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2 className="mb-2">
                                <Link href={`/post/${value.id}`}>
                                    {value.title}

                                </Link>
                            </h2>
                        </div>

                        ))}


                    </div>

                    <div
                        className="tab-pane fade"
                        id="pills-latest"
                        role="tabpanel"
                        aria-labelledby="pills-latest-tab"
                    >
                        { latestPosts.map((value, index) => (
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta">
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2 className="mb-2">
                                <Link href={`/post/${value.id}`}>
                                    {value.title}

                                </Link>
                            </h2>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
export default SidebarList;