import Link from "next/link";
import {useSelector} from "react-redux";

function Footer() {
    const latestPosts = useSelector(state => state.blogSlice.blogPosts).filter(item => item.ptl==='l')

    return(
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <h3 className="footer-heading">About ZenBlog</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                                    ab, perspiciatis beatae autem deleniti voluptate nulla a dolores,
                                    exercitationem eveniet libero laudantium recusandae officiis qui
                                    aliquid blanditiis omnis quae. Explicabo?
                                </p>
                                <p>
                                    <Link href="/about" className="footer-link-more">
                                        Learn More
                                    </Link>
                                </p>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Navigation</h3>
                                <ul className="footer-links list-unstyled">
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-chevron-right" /> Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="bi bi-chevron-right" /> Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about">
                                            <i className="bi bi-chevron-right" /> About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <i className="bi bi-chevron-right" /> Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Categories</h3>
                                <ul className="footer-links list-unstyled">
                                    <li>
                                        <Link href="/single/business">
                                            <i className="bi bi-chevron-right" /> Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single/culture">
                                            <i className="bi bi-chevron-right" /> Culture
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/single/lifeStyle">
                                            <i className="bi bi-chevron-right" /> Life Style
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h3 className="footer-heading">Recent Posts</h3>
                                <ul className="footer-links footer-blog-entry list-unstyled">
                                    { latestPosts.map((value, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/post/${value.id}`}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src="/img/post-sq-1.jpg"
                                                alt=""
                                                className="img-fluid me-3"
                                            />
                                            <div>
                                                <div className="post-meta d-block">
                                                    <span className="date">{value.tag}</span>
                                                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                                </div>
                                                <span>{value.title}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    )
}
export default Footer;