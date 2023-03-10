import SidebarPanel from "@/components/common/SidebarPanel";
import {useSelector} from "react-redux";
import Link from "next/link";

function CategoryPosts({slug}) {

    const allPosts = useSelector(state => state.blogSlice.blogPosts)
    const blogPosts = allPosts.filter(post => post.tag==slug)
    const capitalized = slug.charAt(0).toUpperCase() + slug.slice(1);

    console.log(blogPosts)
    return(
        <main id="main">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9" data-aos="fade-up">
                            <h3 className="category-title">Category: {capitalized}</h3>

                            { blogPosts.map((value, index) => (
                            <div className="d-md-flex post-entry-2 half">
                                <Link href={`/post/${value.id}`} className="me-4 thumbnail">
                                    <img
                                        src="/img/post-landscape-6.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <div className="post-meta">
                                        <span className="date">{capitalized}</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h3>
                                        <Link href={`/post/${value.id}`} >
                                            {value.title}
                                        </Link>
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
                            ))}



                        </div>
                     <SidebarPanel/>
                    </div>
                </div>
            </section>
        </main>

    )
}
export default CategoryPosts;
export async function getServerSideProps(context) {
    const { slug } = context.query;
    return {
        props: {
            slug, // Pass slug to the component as a prop
        },
    };
}
