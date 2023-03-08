import Categories from "@/components/common/Categories";
import Tags from "@/components/common/Tags";
import SidebarList from "@/components/common/SidebarList";

function SidebarPanel() {
    return (
        <>
            <div className="col-md-3">
               <SidebarList/>

                <Categories/>

                <Tags/>
            </div>
        </>


    )
}

export default SidebarPanel