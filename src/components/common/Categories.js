import Link from "next/link";

function Categories() {
    return(
        <div className="aside-block">
            <h3 className="aside-title">Categories</h3>
            <ul className="aside-links list-unstyled">
                <li>
                    <Link href="/single/business">
                        <i className="bi bi-chevron-right"/> Business
                    </Link>
                </li>
                <li>
                    <Link href="/single/culture">
                        <i className="bi bi-chevron-right"/> Culture
                    </Link>
                </li>
                <li>
                    <Link href="/single/lifeStyle">
                        <i className="bi bi-chevron-right"/> Life Style
                    </Link>
                </li>
            </ul>
        </div>

    )
}
export default Categories