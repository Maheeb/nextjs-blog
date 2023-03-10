import Link from "next/link";

function Tags() {

    return(
        <>
            <div className="aside-block">
                <h3 className="aside-title">Tags</h3>
                <ul className="aside-tags list-unstyled">
                    <li>
                        <Link href="/single/business">Business</Link>
                    </li>
                    <li>
                        <Link href="/single/culture">Culture</Link>
                    </li>
                    <li>
                        <Link href="/single/lifeStyle">LifeStyle</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}
export default Tags;