import Link from "next/link";

function Header() {
    return(
        <>
            {/* ======= Header ======= */}
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link href="/" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img store="assets/img/logo.png" alt=""> */}
                        <h1>ZenBlog</h1>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link href="/">Blog</Link>
                            </li>
                            <li>
                                <a href="single-post.html">Single Post</a>
                            </li>
                            <li className="dropdown">
                                <a href="category.html">
                                    <span>Categories</span>{" "}
                                    <i className="bi bi-chevron-down dropdown-indicator" />
                                </a>
                                <ul>
                                    <li>
                                        <a href="search-result.html">Search Result</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 1</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">
                                            <span>Deep Drop Down</span>{" "}
                                            <i className="bi bi-chevron-down dropdown-indicator" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">Deep Drop Down 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 3</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 4</a>
                                            </li>
                                            <li>
                                                <a href="#">Deep Drop Down 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Drop Down 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* .navbar */}
                    <div className="position-relative">
                        <a href="#" className="mx-2">
                            <span className="bi-facebook" />
                        </a>
                        <a href="#" className="mx-2">
                            <span className="bi-twitter" />
                        </a>
                        <a href="#" className="mx-2">
                            <span className="bi-instagram" />
                        </a>
                        <a href="#" className="mx-2 js-search-open">
                            <span className="bi-search" />
                        </a>
                        <i className="bi bi-list mobile-nav-toggle" />
                        {/* ======= Search Form ======= */}
                        <div className="search-form-wrap js-search-form-wrap">
                            <form action="search-result.html" className="search-form">
                                <span className="icon bi-search" />
                                <input type="text" placeholder="Search" className="form-control" />
                                <button className="btn js-search-close">
                                    <span className="bi-x" />
                                </button>
                            </form>
                        </div>
                        {/* End Search Form */}
                    </div>
                </div>
            </header>
            {/* End Header */}
        </>
    )
}
export default Header;