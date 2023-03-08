import Link from "next/link";
import {Fragment} from "react";


function SingleSidebar(props) {
    // console.log(props)
    return(
        <Fragment>
            <div className="post-entry-1 border-bottom" >
                <div className="post-meta">
                    <span className="date">{props.tag}</span>
                    <span className="mx-1">•</span> <span>Jul 5th '23</span>
                </div>
                <h2 className="mb-2">
                    <Link href={`/post/${props.id}`}>
                        {props.title}
                    </Link>
                </h2>
            </div>
        </Fragment>
    )
}
export default SingleSidebar