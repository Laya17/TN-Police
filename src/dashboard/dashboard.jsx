import style from "./dashboard.module.css";
import { useState } from "react";
import SideBar from "./Components/SideBar/Sidebar";
import DashboardRHS from "./DashBoardRHS/DashboardRHS";

export default function Dashboard(){

    const SidebarTitle = ["Scam Reports", "AD Analysis", "User Reports", "Blocked Advertisers","Settings"];
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);

    const toggleOverview = () => {
        setIsOverviewOpen(!isOverviewOpen);
      };
    

    return (
        <div className={style.container}>
            <div className={style.lhscontainer}>
                <div className={style.topContainer}>
                    <div className={style.logoText}>
                        @ADSHIELD
                    </div>

                    <div>
                    <div className={`${style.sidebarItem} ${style.overview}`} onClick={toggleOverview}>
                        Overview
                    </div>

                    <div className={`${style.subMenu} ${isOverviewOpen ? style.subMenuOpen : ""}`}>
                        <SideBar SidebarTitle="Detection Summary" />
                        <SideBar SidebarTitle="Custom Reports" />
                    </div>
                        {SidebarTitle.map(element => (
                            <SideBar SidebarTitle={element}> </SideBar>
                        ))}
                    </div>
                </div>

                <div className={style.bottomContainer}>
                        <SideBar SidebarTitle={"Help"}></SideBar>
                        <SideBar SidebarTitle={"Contact Us"}></SideBar>

                        <div className={style.logout}>LogOut</div>
                </div>


            </div>
            <div className={style.rhsContainer}>
                <DashboardRHS></DashboardRHS>
            </div>
        </div>
    );
}