import SidebarPanel from "@/components/common/SidebarPanel";

function CategoryPosts() {
    return(
        <main id="main">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9" data-aos="fade-up">
                            <h3 className="category-title">Category: Business</h3>

                            <div className="d-md-flex post-entry-2 half">
                                <a href="single-post.html" className="me-4 thumbnail">
                                    <img
                                        src="/img/post-landscape-6.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <div>
                                    <div className="post-meta">
                                        <span className="date">Culture</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h3>
                                        <a href="single-post.html">
                                            What is the son of Football Coach John Gruden, Deuce Gruden
                                            doing Now?
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Distinctio placeat exercitationem magni voluptates dolore.
                                        Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                                        temporibus sapiente, laudantium dolorum itaque libero eos
                                        deleniti?
                                    </p>
                                </div>
                            </div>



                        </div>
                     <SidebarPanel/>
                    </div>
                </div>
            </section>
        </main>

    )
}
export default CategoryPosts;