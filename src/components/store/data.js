import {createSlice, current} from "@reduxjs/toolkit";


const initialStoreState ={
    cultures: [
        {
            id:1,
            catId:1,
            tag: 'culture',
            title:'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?',

        },
        {
            id:2,
            catId:1,
            tag: 'culture',
            title:'11 Work From Home Part-Time Jobs You Can Do Now'

        },
        {
            id:3,
            catId:1,
            tag: 'culture',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:4,
            catId:1,
            tag: 'culture',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:5,
            catId:1,
            tag: 'culture',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:6,
            catId:1,
            tag: 'culture',
            title:'17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut'

        },
        {
            id:7,
            catId:1,
            tag: 'culture',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'

        },
        {
            id:8,
            catId:1,
            tag: 'culture',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:9,
            catId:1,
            tag: 'culture',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:10,
            catId:1,
            tag: 'culture',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },

    ],
    business: [
        {
            id:1,
            catId:2,
            tag: 'business',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?',

        },
        {
            id:2,
            catId:2,
            tag: 'business',
            title:'17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut'

        },
        {
            id:3,
            catId:2,
            tag: 'business',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'

        },
        {
            id:4,
            catId:2,
            tag: 'business',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:5,
            catId:2,
            tag: 'business',
            title:'The Best Homemade Masks for Face (keep the Pimples Away)'

        },
        {
            id:6,
            catId:2,
            tag: 'business',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:7,
            catId:2,
            tag: 'business',
            title:'11 Work From Home Part-Time Jobs You Can Do Now'

        },
        {
            id:8,
            catId:2,
            tag: 'business',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:9,
            catId:2,
            tag: 'business',
            title:'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?'

        },
        {
            id:10,
            catId:2,
            tag: 'business',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },

    ],
    lifeStyles: [
        {
            id:1,
            catId:3,
            tag: 'lifeStyle',
            title:'11 Work From Home Part-Time Jobs You Can Do Now',

        },
        {
            id:2,
            catId:3,
            tag: 'lifeStyle',
            title:'The Best Homemade Masks for Face (keep the Pimples Away)'

        },
        {
            id:3,
            catId:3,
            tag: 'lifeStyle',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:4,
            catId:3,
            tag: 'lifeStyle',
            title:'Let’s Get Back to Work, New York'

        },
        {
            id:5,
            catId:3,
            tag: 'lifeStyle',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:6,
            catId:3,
            tag: 'lifeStyle',
            title:'Why Craigslist Tampa Is One of The Most Interesting Places On the Web?'

        },
        {
            id:7,
            catId:3,
            tag: 'lifeStyle',
            title:'6 Easy Steps To Create Your Own Cute Merch For Instagram'

        },
        {
            id:8,
            catId:3,
            tag: 'lifeStyle',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:9,
            catId:3,
            tag: 'lifeStyle',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:10,
            catId:3,
            tag: 'lifeStyle',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },

    ],
    trending: [
        {
            id:1,
            catId:1,
            tag: 'culture',
            title:'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?',

        },
        {
            id:2,
            catId:1,
            tag: 'culture',
            title:'11 Work From Home Part-Time Jobs You Can Do Now'

        },
        {
            id:3,
            catId:2,
            tag: 'business',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?',
        },
        {
            id:4,
            catId:2,
            tag: 'business',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'


        },
        {
            id:5,
            catId:3,
            tag: 'lifeStyle',
            title:'11 Work From Home Part-Time Jobs You Can Do Now',

        }


    ],
    popular: [
        {
            id:1,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?',

        },
        {
            id:2,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut'

        },
        {
            id:3,
            catId:2,
            tag: 'business',
            ptl:'p',
            title:'10 Life-Changing Hacks Every Working Mom Should Know',
        },
        {
            id:4,
            catId:2,
            tag: 'business',
            ptl:'p',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'


        },
        {
            id:5,
            catId:3,
            tag: 'lifeStyle',
            ptl:'p',
            title:'Life insurance And Pregnancy: A Working Mom’s Guide',

        }


    ],
    blogPosts:[
        {
            id:1,
            catId:1,
            tag: 'culture',
            ptl:'t',
            title:'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?',

        },
        {
            id:2,
            catId:1,
            tag: 'culture',
            ptl:'t',
            title:'11 Work From Home Part-Time Jobs You Can Do Now'

        },
        {
            id:3,
            catId:1,
            tag: 'culture',
            ptl:'t',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:4,
            catId:1,
            tag: 'culture',
            ptl:'t',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:5,
            catId:1,
            tag: 'culture',
            ptl:'t',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:6,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut'

        },
        {
            id:7,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'

        },
        {
            id:8,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:9,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:10,
            catId:1,
            tag: 'culture',
            ptl:'p',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:11,
            catId:2,
            tag: 'business',
            ptl:'l',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?',

        },
        {
            id:12,
            catId:2,
            tag: 'business',
            ptl:'l',
            title:'17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut'

        },
        {
            id:13,
            catId:2,
            tag: 'business',
            ptl:'l',
            title:'9 Half-up/half-down Hairstyles for Long and Medium Hair'

        },
        {
            id:14,
            catId:2,
            tag: 'business',
            ptl:'l',
            title:'Life Insurance And Pregnancy: A Working Mom’s Guide'

        },
        {
            id:15,
            catId:2,
            tag: 'business',
            ptl:'l',
            title:'The Best Homemade Masks for Face (keep the Pimples Away)'

        },
        {
            id:16,
            catId:2,
            tag: 'business',
            ptl:'',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:17,
            catId:2,
            tag: 'business',
            ptl:'',
            title:'11 Work From Home Part-Time Jobs You Can Do Now'

        },
        {
            id:18,
            catId:2,
            tag: 'business',
            ptl:'',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:19,
            catId:2,
            tag: 'business',
            ptl:'',
            title:'What is the son of Football Coach John Gruden, Deuce Gruden doing Now?'

        },
        {
            id:20,
            catId:2,
            tag: 'business',
            ptl:'',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:21,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'11 Work From Home Part-Time Jobs You Can Do Now',

        },
        {
            id:22,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'The Best Homemade Masks for Face (keep the Pimples Away)'

        },
        {
            id:23,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:24,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'Let’s Get Back to Work, New York'

        },
        {
            id:25,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },
        {
            id:26,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'Why Craigslist Tampa Is One of The Most Interesting Places On the Web?'

        },
        {
            id:27,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'6 Easy Steps To Create Your Own Cute Merch For Instagram'

        },
        {
            id:28,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'10 Life-Changing Hacks Every Working Mom Should Know'

        },
        {
            id:29,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'5 Great Startup Tips for Female Founders'

        },
        {
            id:30,
            catId:3,
            tag: 'lifeStyle',
            ptl:'',
            title:'How to Avoid Distraction and Stay Focused During Video Calls?'

        },

    ]


};

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: initialStoreState,
});

export default blogSlice.reducer;
