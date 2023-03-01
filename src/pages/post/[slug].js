import PostContent from "@/components/Single/PostContent";
import SideBar from "@/components/Single/SideBar";

function SinglePost() {
    return(
        <>
                <main id="main">
                    <section className="single-post-content">
                        <div className="container">
                            <div className="row">

                                    <PostContent/>

                                <SideBar/>
                            </div>
                        </div>
                    </section>
                </main>
                {/* End #main */}
            </>


    )
}
export default SinglePost;