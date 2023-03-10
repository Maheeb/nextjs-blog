import {useDispatch, useSelector} from "react-redux";
import store from "@/components/store";
import Link from "next/link";
import {useEffect, useState} from "react";
import SingleSidebar from "@/components/home/SingleSidebar";

function Culture() {

    const blogPosts = useSelector(state => state.blogSlice.blogPosts)
    const culturePosts = blogPosts.filter((item) =>item.tag==='culture')

    const randomNum = Math.floor(Math.random() * 9) + 1;
    let sideBarPosts = [];
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    const slug_id= hydrated && culturePosts[randomNum].id

    for (let i = 0; i < 6; i++) {
        // Get a random index from the remaining elements in the array
        let randomIndex = Math.floor(Math.random() * culturePosts.length);
        let selectedObject = culturePosts[randomIndex];

        sideBarPosts.push(selectedObject);
    }


    return (
        <section className="category-section">
            <div className="container" data-aos="fade-up">
                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                    <h2>Culture</h2>
                    <div>
                        <Link href="single/culture" className="more">
                            See All Culture
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="d-lg-flex post-entry-2">
                            <Link href={`/post/${slug_id}`}
                                className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block"
                            >
                                <img
                                    src="/img/post-landscape-6.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            <div>
                                <div className="post-meta">
                                    <span className="date">Culture</span>
                                    <span className="mx-1">•</span> <span>Jul 5th '23</span>
                                </div>
                                <h3>
                                    <Link href={`/post/${slug_id}`}>

                                        {hydrated && culturePosts[randomNum].title}
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
                                            src="/img/post-landscape-1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Culture</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && culturePosts[randomNum].title}
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
                                        <span className="date">Culture</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && culturePosts[randomNum].title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="post-entry-1">
                                    <Link href={`/post/${slug_id}`}>
                                        <img
                                            src="/img/post-landscape-2.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Culture</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2 className="mb-2">
                                        <Link href={`/post/${slug_id}`}>
                                            {hydrated && culturePosts[randomNum].title}
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

export default Culture

