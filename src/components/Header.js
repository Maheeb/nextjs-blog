import Link from "next/link";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function Header() {
    const [inputText, setInputText] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isPost, setIsPost] = useState(false);
    const blogPosts = useSelector(state => state.blogSlice.blogPosts)
    const { asPath } = useRouter()

    const checkUrl =asPath.includes("post") ?'/post':"post";
    // console.log(checkUrl)
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    let clearSearch = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText("");
    };

    const filteredData = blogPosts.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(inputText)
        }
    })

    useEffect(()=>{
        if (inputText === '')
        {
            setIsOpen(false)
        }
        else
        {
            setIsOpen(true)
        }

    },[inputText])

    return(
        <>
            {/* ======= Header ======= */}
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link href="/" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img store="assets/img/logo.png" alt=""> */}
                        <h1>ZenBlog</h1>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link href="/">Blog</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <a href="single-post.html">Single Post</a>*/}
                            {/*</li>*/}

                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* .navbar */}
                    <div className="position-relative">
                        <a href="#" className="mx-2">
                            <span className="bi-facebook" />
                        </a>
                        <a href="#" className="mx-2">
                            <span className="bi-twitter" />
                        </a>
                        <a href="#" className="mx-2">
                            <span className="bi-instagram" />
                        </a>
                        <a href="#" className="mx-2 js-search-open">
                            <span className="bi-search" />
                        </a>
                        <i className="bi bi-list mobile-nav-toggle" />
                        {/* ======= Search Form ======= */}
                        <div className="search-form-wrap js-search-form-wrap">
                            <form action="#" className="search-form">
                                <span className="icon bi-search" />
                                <input type="text" placeholder="Search" className="form-control"   onChange={inputHandler}/>
                                <button className="btn js-search-close">
                                    <span className="bi-x" onChange={clearSearch}/>
                                </button>
                            </form>

                        </div>
                        <div>
                            {isOpen && filteredData.length > 0 && (
                                <ul style={{ position: "absolute", zIndex: 1,marginTop:'15px',marginLeft:'-380px',backgroundColor:'#f9f9f9',minWidth:'608px',boxShadow:' 0px 8px 16px 0px rgba(0,0,0,0.2)',listStyle:'none' }}>
                                    {filteredData.map((suggestion, index) => (
                                        <li key={index}>
                                            {/*<Link href={`post/${suggestion.id}`}*/}
                                            <Link href={`${checkUrl}/${suggestion.id}`}
                                                  style={{color:'black',padding:'12px 16px',textDecoration:'none',display:'block'}}
                                            >
                                                {suggestion.title}
                                            </Link>

                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* End Search Form */}
                    </div>
                </div>
            </header>
            {/* End Header */}
        </>
    )
}
export default Header;
export async function getServerSideProps(context) {
    const { slug } = context.query;
    return {
        props: {
            slug, // Pass slug to the component as a prop
        },
    };
}