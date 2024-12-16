import style from "./Sidebar.module.css";

export default function SideBar({SidebarTitle}){
    return(
        <div className={style.SideBar}>
            {SidebarTitle}
        </div>
    );
}