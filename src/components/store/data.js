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

};

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: initialStoreState,
});

export default blogSlice.reducer;
