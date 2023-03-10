import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SingleSidebar from "@/components/home/SingleSidebar";
import Link from "next/link";

function LifeStyle() {
    const blogPosts = useSelector(state => state.blogSlice.blogPosts)

    const culturePosts = useSelector(state => state.blogSlice.lifeStyles)
    const stylePosts = blogPosts.filter((item) =>item.tag==='lifeStyle')


    const randomNum = Math.floor(Math.random() * 9) + 1

    let sideBarPosts = [];
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    const slug_id= hydrated && stylePosts[randomNum].id

    for (let i = 0; i < 6; i++) {
        // Get a random index from the remaining elements in the array
        let randomIndex = Math.floor(Math.random() * stylePosts.length);
        let selectedObject = stylePosts[randomIndex];

        sideBarPosts.push(selectedObject);
    }
    return(
        <section className="category-section">
            <div className="container" data-aos="fade-up">
                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                    <h2>Lifestyle</h2>
                    <div>
                        <Link href="single/lifeStyle" className="more">
                            See All Lifestyle
                        </Link>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="post-entry-1 lg">
                            <Link href={`/post/${stylePosts[0].id}`}>
                                <img
                                    src="/img/post-landscape-8.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </Link>
                            <div className="post-meta">
                                <span className="date">Lifestyle</span>
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2>
                                <Link href={`/post/${stylePosts[0].id}`}>
                                    {hydrated && stylePosts[0].title}

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
                            <div className="d-flex align-items-center author">
                                <div className="photo">
                                    <img src="/img/person-7.jpg" alt="" className="img-fluid"/>
                                </div>
                                <div className="name">
                                    <h3 className="m-0 p-0">Esther Howard</h3>
                                </div>
                            </div>
                        </div>
                        <div className="post-entry-1 border-bottom">
                            <div className="post-meta">
                                <span className="date">Lifestyle</span>
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2 className="mb-2">
                                <Link href={`/post/${stylePosts[1].id}`}>
                                    {hydrated && stylePosts[1].title}
                                </Link>
                            </h2>
                        </div>
                        <div className="post-entry-1">
                            <div className="post-meta">
                                <span className="date">Lifestyle</span>
                                <span className="mx-1">•</span> <span>Jul 5th '22</span>
                            </div>
                            <h2 className="mb-2">
                                <Link href={`/post/${stylePosts[2].id}`}>
                                    {hydrated && stylePosts[2].title}
                                </Link>
                            </h2>
                            <span className="author mb-3 d-block">Jenny Wilson</span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row g-5">
                            <div className="col-lg-4 border-start custom-border">
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[3].id}`}>
                                        <img
                                            src="/img/post-landscape-6.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[3].id}`}>

                                            {hydrated && stylePosts[3].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[4].id}`}>
                                        <img
                                            src="/img/post-landscape-5.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Jul 17th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[4].id}`}>
                                            {hydrated && stylePosts[4].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[5].id}`}>
                                        <img
                                            src="/img/post-landscape-4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Mar 15th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[5].id}`}>
                                            {hydrated && stylePosts[5].title}

                                        </Link>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-4 border-start custom-border">
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[6].id}`}>
                                        <img
                                            src="/img/post-landscape-3.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[6].id}`}>
                                            {hydrated && stylePosts[6].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[7].id}`}>
                                        <img
                                            src="/img/post-landscape-2.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Mar 1st '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[7].id}`}>
                                            {hydrated && stylePosts[7].title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className="post-entry-1">
                                    <Link href={`/post/${stylePosts[8].id}`}>
                                        <img
                                            src="/img/post-landscape-1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </Link>
                                    <div className="post-meta">
                                        <span className="date">Lifestyle</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h2>
                                        <Link href={`/post/${stylePosts[8].id}`}>
                                            {hydrated && stylePosts[8].title}
                                        </Link>
                                    </h2>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                {hydrated && sideBarPosts.map((value, index) => (

                                    <SingleSidebar  tag={value.tag} title={value.title} id={value.id} key={index}/>
                                ))}


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default LifeStyle;