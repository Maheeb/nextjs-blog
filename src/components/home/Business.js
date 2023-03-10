import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Link from "next/link";
import SingleSidebar from "@/components/home/SingleSidebar";

function Business() {
    const blogPosts = useSelector(state => state.blogSlice.blogPosts)
    // const businessPosts = useSelector(state => state.blogSlice.business)
    const businessPosts = blogPosts.filter((item) =>item.tag==='business')
    const randomNum = Math.floor(Math.random() * 9) + 1;
    let sideBarPosts = [];
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    const slug_id= hydrated && businessPosts[randomNum].id

    for (let i = 0; i < 6; i++) {
        // Get a random index from the remaining elements in the array
        let randomIndex = Math.floor(Math.random() * businessPosts.length);
        let selectedObject = businessPosts[randomIndex];

        sideBarPosts.push(selectedObject);
    }

    return(
        <section className="category-section">
            <div className="container" data-aos="fade-up">
                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                    <h2>Business</h2>
                    <div>
                        <Link href="single/business" className="more">
                            See All Business
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 order-md-2">
                        <div className="d-lg-flex post-entry-2">
                            <Link
                                href={`/post/${slug_id}`}
                                className="me-4 thumbnail d-inline-block mb-4 mb-lg-0"
                            >
                                <img
                                    src="/img/post-landscape-3.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            <div>
                                <div className="post-meta">
                                    <span className="date">Business</span>
                                    <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                </div>
                                <h3>
                                    <Link href={`/post/${slug_id}`}>
                                        {hydrated && businessPosts[randomNum].title}
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Distinctio placeat exercitationem magni voluptates dolore. Tenetur
                                    fugiat voluptates quas, nobis error deserunt aliquam temporibus
                                    sapiente, laudantium dolorum itaque libero eos deleniti?
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="post-entry-1 border-bottom">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-5.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Business</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && businessPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                    <p className="mb-4 d-block">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                                        temporibus repudiandae, inventore pariatur numquam cumque
                                        possimus
                                    </p>
                                </div>
                                <div className="post-entry-1">
                                    <div className="post-meta">
                                        <span className="date">Business</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && businessPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-7.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Business</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && businessPosts[randomNum].title}
                                        </Link>
                                    </h2>
                                    <p className="mb-4 d-block">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                                        temporibus repudiandae, inventore pariatur numquam cumque
                                        possimus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {hydrated && sideBarPosts.map((value, index) => (

                            <SingleSidebar  tag={value.tag} title={value.title} id={value.id} key={index}/>

                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Business