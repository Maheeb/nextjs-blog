function SideBar() {
    return(
        <>
            <div classname="col-md-3">
                <div classname="aside-block">
                    <ul
                        classname="nav nav-pills custom-tab-nav mb-4"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li classname="nav-item" role="presentation">
                            <button
                                classname="nav-link active"
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
                        <li classname="nav-item" role="presentation">
                            <button
                                classname="nav-link"
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
                        <li classname="nav-item" role="presentation">
                            <button
                                classname="nav-link"
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
                    <div classname="tab-content" id="pills-tabContent">
                        <div
                            classname="tab-pane fade show active"
                            id="pills-popular"
                            role="tabpanel"
                            aria-labelledby="pills-popular-tab"
                        >
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Sport</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        How to Avoid Distraction and Stay Focused During Video Calls?
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        17 Pictures of Medium Length Hair in Layers That Will Inspire
                                        Your New Haircut
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Culture</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        9 Half-up/half-down Hairstyles for Long and Medium Hair
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        Life Insurance And Pregnancy: A Working Mom’s Guide
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Business</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        The Best Homemade Masks for Face (keep the Pimples Away)
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        10 Life-Changing Hacks Every Working Mom Should Know
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                        </div>

                        <div
                            classname="tab-pane fade"
                            id="pills-trending"
                            role="tabpanel"
                            aria-labelledby="pills-trending-tab"
                        >
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        17 Pictures of Medium Length Hair in Layers That Will Inspire
                                        Your New Haircut
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Culture</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        9 Half-up/half-down Hairstyles for Long and Medium Hair
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        Life Insurance And Pregnancy: A Working Mom’s Guide
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Sport</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        How to Avoid Distraction and Stay Focused During Video Calls?
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Business</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        The Best Homemade Masks for Face (keep the Pimples Away)
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        10 Life-Changing Hacks Every Working Mom Should Know
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                        </div>

                        <div
                            classname="tab-pane fade"
                            id="pills-latest"
                            role="tabpanel"
                            aria-labelledby="pills-latest-tab"
                        >
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        Life Insurance And Pregnancy: A Working Mom’s Guide
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Business</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        The Best Homemade Masks for Face (keep the Pimples Away)
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        10 Life-Changing Hacks Every Working Mom Should Know
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Sport</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        How to Avoid Distraction and Stay Focused During Video Calls?
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Lifestyle</span>
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        17 Pictures of Medium Length Hair in Layers That Will Inspire
                                        Your New Haircut
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                            <div classname="post-entry-1 border-bottom">
                                <div classname="post-meta">
                                    <span classname="date">Culture</span>
                                    {"{"}" "{"}"}
                                    <span classname="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h2 classname="mb-2">
                                    <a href="#">
                                        9 Half-up/half-down Hairstyles for Long and Medium Hair
                                    </a>
                                </h2>
                                <span classname="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div classname="aside-block">
                    <h3 classname="aside-title">Video</h3>
                    <div classname="video-post">
                        <a
                            href="https://www.youtube.com/watch?v=AiFfDjmd0jU"
                            classname="glightbox link-video"
                        >
          <span classname="bi-play-fill">
            <img
                src="assets/img/post-landscape-5.jpg"
                alt=""
                classname="img-fluid"
            />
          </span>
                        </a>
                    </div>
                </div>
                <div classname="aside-block">
                    <h3 classname="aside-title">Categories</h3>
                    <ul classname="aside-links list-unstyled">
                        <li>
                            <a href="category.html">
                                <i classname="bi bi-chevron-right"> Business</i>
                            </a>
                            <i classname="bi bi-chevron-right"></i>
                        </li>
                        <i classname="bi bi-chevron-right">
                            <li>
                                <a href="category.html">
                                    <i classname="bi bi-chevron-right"> Culture</i>
                                </a>
                                <i classname="bi bi-chevron-right"></i>
                            </li>
                            <i classname="bi bi-chevron-right">
                                <li>
                                    <a href="category.html">
                                        <i classname="bi bi-chevron-right"> Sport</i>
                                    </a>
                                    <i classname="bi bi-chevron-right"></i>
                                </li>
                                <i classname="bi bi-chevron-right">
                                    <li>
                                        <a href="category.html">
                                            <i classname="bi bi-chevron-right"> Food</i>
                                        </a>
                                        <i classname="bi bi-chevron-right"></i>
                                    </li>
                                    <i classname="bi bi-chevron-right">
                                        <li>
                                            <a href="category.html">
                                                <i classname="bi bi-chevron-right"> Politics</i>
                                            </a>
                                            <i classname="bi bi-chevron-right"></i>
                                        </li>
                                        <i classname="bi bi-chevron-right">
                                            <li>
                                                <a href="category.html">
                                                    <i classname="bi bi-chevron-right"> Celebrity</i>
                                                </a>
                                                <i classname="bi bi-chevron-right"></i>
                                            </li>
                                            <i classname="bi bi-chevron-right">
                                                <li>
                                                    <a href="category.html">
                                                        <i classname="bi bi-chevron-right"> Startups</i>
                                                    </a>
                                                    <i classname="bi bi-chevron-right"></i>
                                                </li>
                                                <i classname="bi bi-chevron-right">
                                                    <li>
                                                        <a href="category.html">
                                                            <i classname="bi bi-chevron-right"> Travel</i>
                                                        </a>
                                                        <i classname="bi bi-chevron-right"></i>
                                                    </li>
                                                    <i classname="bi bi-chevron-right"></i>
                                                </i>
                                            </i>
                                        </i>
                                    </i>
                                </i>
                            </i>
                        </i>
                    </ul>
                    <i classname="bi bi-chevron-right">
                        <i classname="bi bi-chevron-right">
                            <i classname="bi bi-chevron-right"></i>
                        </i>
                    </i>
                </div>
                <i classname="bi bi-chevron-right">
                    <i classname="bi bi-chevron-right">
                        <i classname="bi bi-chevron-right">
                            <div classname="aside-block">
                                <h3 classname="aside-title">Tags</h3>
                                <ul classname="aside-tags list-unstyled">
                                    <li>
                                        <a href="category.html">Business</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Culture</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Sport</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Food</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Politics</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Celebrity</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Startups</a>
                                    </li>
                                    <li>
                                        <a href="category.html">Travel</a>
                                    </li>
                                </ul>
                            </div>
                        </i>
                    </i>
                </i>
            </div>
            <i classname="bi bi-chevron-right">
                <i classname="bi bi-chevron-right">
                    <i classname="bi bi-chevron-right"></i>
                </i>
            </i>
        </>

    )
}
export default SideBar