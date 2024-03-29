import PostContent from "@/components/Single/PostContent";
import SideBar from "@/components/Single/SideBar";
import {useRouter} from "next/router";
import SidebarPanel from "@/components/common/SidebarPanel";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function SinglePost({ slug }) {
    const router = useRouter();
    // const { slug } = router.query;
    const blogPosts = useSelector(state => state.blogSlice.blogPosts)
    const blogPost = blogPosts.filter(post => post.id==slug)

    const [selectedPost, setSelectedPost] = useState(blogPosts);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        // const blogPost = blogPosts.filter(post => post.id==slug)
        // setSelectedPost(blogPost)
        setHydrated(true);
    },[])
    // console.log(blogPost)
    return(
        <>
            <main id="main">
                <section className="single-post-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">
                                <div className="single-post">
                                    <div className="post-meta">
                                        <span className="date">Business</span>
                                        <span className="mx-1">•</span> <span>Jul 5th '22</span>
                                    </div>
                                    <h1 className="mb-5">
                                        {/*{hydrated && selectedPost[0].title}*/}
                                        { blogPost[0].title}
                                    </h1>
                                    <p>
                                        <span className="firstcharacter">L</span>orem ipsum dolor sit,
                                        amet consectetur adipisicing elit. Ratione officia sed, suscipit
                                        distinctio, numquam omnis quo fuga ipsam quis inventore voluptatum
                                        recusandae culpa, unde doloribus saepe labore alias voluptate
                                        expedita? Dicta delectus beatae explicabo odio voluptatibus quas,
                                        saepe qui aperiam autem obcaecati, illo et! Incidunt voluptas
                                        culpa neque repellat sint, accusamus beatae, cumque autem tempore
                                        quisquam quam eligendi harum debitis.
                                    </p>
                                    <figure className="my-4">
                                        <img
                                            src="/img/post-landscape-1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <figcaption>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, odit?
                                        </figcaption>
                                    </figure>
                                    <p>
                                        Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure
                                        itaque enim pariatur ducimus. Rerum soluta, perspiciatis
                                        voluptatum cupiditate praesentium repellendus quas expedita
                                        exercitationem tempora aliquam quaerat in eligendi adipisci harum
                                        non omnis reprehenderit quidem beatae modi. Ea fugiat enim libero,
                                        ipsam dicta explicabo nihil, tempore, nulla repellendus eos
                                        necessitatibus eligendi corporis cum? Eaque harum, eligendi itaque
                                        numquam aliquam soluta.
                                    </p>
                                    <p>
                                        Explicabo perspiciatis, laborum provident voluptates illum in
                                        nulla consectetur atque quaerat excepturi quisquam, veniam velit
                                        ex pariatur quos consequuntur? Excepturi reiciendis perferendis,
                                        cupiditate dolorem eos illum amet. Beatae voluptates nemo esse
                                        ratione voluptate, nesciunt fugit magnam veritatis voluptas
                                        dignissimos doloribus maiores? Aliquam, dolores natus
                                        exercitationem corrupti blanditiis, consequuntur nihil nobis sed
                                        voluptatibus maiores sunt, illo provident aliquid laborum. Vitae,
                                        ut.
                                    </p>
                                    <p>
                                        Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In
                                        molestias rem, similique ut esse repudiandae quod recusandae
                                        dolores neque earum omnis at, suscipit fuga? Minima qui veniam
                                        deserunt quisquam error amet at ratione nesciunt porro quis
                                        placeat repudiandae voluptatibus officiis fuga necessitatibus,
                                        expedita officia adipisci eaque labore accusamus? Nesciunt
                                        repellat illo exercitationem facilis similique quaerat, quis
                                        sequi? Praesentium nulla ipsam dolor.
                                    </p>
                                    <p>
                                        Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque
                                        porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam
                                        suscipit nulla vitae alias blanditiis aliquam debitis atque illo
                                        modi et placeat. Ratione iure eveniet provident. Culpa laboriosam
                                        sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint
                                        nihil maiores iusto tempora nobis porro itaque est. Ut laborum
                                        culpa assumenda pariatur et perferendis?
                                    </p>
                                    <p>
                                        Est soluta veritatis laboriosam, consequuntur temporibus
                                        asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat.
                                        Odio et necessitatibus enim nam, iste reprehenderit cupiditate
                                        omnis ut iure aliquid obcaecati, repellendus nemo provident
                                        eveniet tempora minus! Voluptates aut laboriosam, maiores nihil
                                        accusantium, a dolorum quaerat tenetur illo eum culpa cum
                                        laudantium sunt doloremque modi possimus magni? Perferendis cum
                                        repudiandae corrupti porro.
                                    </p>
                                    <figure className="my-4">
                                        <img
                                            src="/img/post-landscape-5.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <figcaption>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Explicabo, odit?
                                        </figcaption>
                                    </figure>
                                    <p>
                                        Quis molestiae, dolorem consequuntur labore perferendis enim
                                        accusantium commodi optio, sequi magnam ad consectetur iste omnis!
                                        Voluptatibus, quia officia esse necessitatibus magnam tempore
                                        reprehenderit quo aspernatur! Assumenda, minus dolorem repellendus
                                        corporis corrupti quia temporibus repudiandae in. Sit rem aut,
                                        consectetur repudiandae perferendis nemo alias, iure ipsam omnis
                                        quam soluta, nobis animi quis aliquam blanditiis at. Dicta nemo
                                        vero sequi exercitationem.
                                    </p>
                                    <p>
                                        Architecto ex id at illum aperiam corporis, quidem magnam
                                        doloribus non eligendi delectus laborum porro molestiae beatae
                                        eveniet dolor odit optio soluta dolores! Eaque odit a nihil
                                        recusandae, error repellendus debitis ex autem ab commodi, maiores
                                        officiis doloribus provident optio, architecto assumenda! Nihil
                                        cum laboriosam eos dolore aliquid perferendis amet doloremque
                                        quibusdam odio soluta vero odit, ipsa, quisquam quod nulla.
                                    </p>
                                    <p>
                                        Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad
                                        necessitatibus amet nobis corporis et quasi. Optio cum neque fuga.
                                        Ad excepturi magnam quisquam ex voluptatibus vitae aut nam quidem
                                        doloribus, architecto perspiciatis sit consequatur pariatur alias
                                        animi expedita quas? Et doloribus voluptatibus perferendis qui
                                        fugiat voluptatum autem facere aspernatur quidem quae assumenda
                                        iste, sit similique, necessitatibus laborum magni. Ea, dolores!
                                    </p>
                                    <p>
                                        Possimus temporibus rerum illo quia repudiandae provident sed quas
                                        atque. Ipsam adipisci accusamus iste optio illo aliquam molestias?
                                        Voluptatibus, veniam recusandae facilis nobis perspiciatis rem
                                        similique, nisi ad explicabo ipsa voluptatum, inventore molestiae
                                        natus adipisci? Fuga delectus quia assumenda totam aspernatur.
                                        Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis
                                        aspernatur labore, natus ex iusto ducimus exercitationem a
                                        officia.
                                    </p>
                                </div>

                                <div className="comments">
                                    <h5 className="comment-title py-4">2 Comments</h5>
                                    <div className="comment d-flex mb-4">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm rounded-circle">
                                                <img
                                                    className="avatar-img"
                                                    src="/img/person-5.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-2 ms-sm-3">
                                            <div className="comment-meta d-flex align-items-baseline">
                                                <h6 className="me-2">Jordan Singer</h6>
                                                <span className="text-muted">2d</span>
                                            </div>
                                            <div className="comment-body">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                                                minima ipsum at amet doloremque qui magni, placeat deserunt
                                                pariatur itaque laudantium impedit aliquam eligendi
                                                repellendus excepturi quibusdam nobis esse accusantium.
                                            </div>
                                            <div className="comment-replies bg-light p-3 mt-3 rounded">
                                                <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                                                    2 replies
                                                </h6>
                                                <div className="reply d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm rounded-circle">
                                                            <img
                                                                className="avatar-img"
                                                                src="/img/person-4.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 ms-sm-3">
                                                        <div className="reply-meta d-flex align-items-baseline">
                                                            <h6 className="mb-0 me-2">Brandon Smith</h6>
                                                            <span className="text-muted">2d</span>
                                                        </div>
                                                        <div className="reply-body">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                                            elit.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reply d-flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm rounded-circle">
                                                            <img
                                                                className="avatar-img"
                                                                src="/img/person-3.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 ms-sm-3">
                                                        <div className="reply-meta d-flex align-items-baseline">
                                                            <h6 className="mb-0 me-2">James Parsons</h6>
                                                            <span className="text-muted">1d</span>
                                                        </div>
                                                        <div className="reply-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Distinctio dolore sed eos sapiente, praesentium.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm rounded-circle">
                                                <img
                                                    className="avatar-img"
                                                    src="/img/person-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-1 ms-2 ms-sm-3">
                                            <div className="comment-meta d-flex">
                                                <h6 className="me-2">Santiago Roberts</h6>
                                                <span className="text-muted">4d</span>
                                            </div>
                                            <div className="comment-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                                laborum in corrupti dolorum, quas delectus nobis porro
                                                accusantium molestias sequi.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12">
                                        <h5 className="comment-title">Leave a Comment</h5>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="comment-name"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-email">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="comment-email"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="comment-message">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    id="comment-message"
                                                    placeholder="Enter your name"
                                                    cols={30}
                                                    rows={10}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    defaultValue="Post comment"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        <SidebarPanel/>


                        </div>
                    </div>
                </section>
            </main>

        </>


    )
}
export default SinglePost

export async function getServerSideProps(context) {
    const { slug } = context.query;
    return {
        props: {
            slug, // Pass slug to the component as a prop
        },
    };
}
