import style from "./DashboardRHS.module.css";
import SimilarCard from "../Components/Cards/SimilarCards/SimilarCard";
import ScamDetectionTimelineCard from "../Components/Cards/ScamGraph/ScamGraph";

export default function DashboardRHS(){

    
    const CardContent = {
        1: { 
          head1: "Scam ADs", 
          subhead: "73 scams", 
          content1: "20% of ads were scam", 
          variant: "+15.6%", 
          count: "+1.4k", 
          time: "this week",
          icon1: "https://cdn0.iconfinder.com/data/icons/display-status/100/.svg-2-1024.png",
          icon2: "https://tse1.mm.bing.net/th?id=OIP.mT7jrMMx-BHqQ_1Y67QHIgHaHa&pid=Api&P=0&h=180"
        },
        2: { 
          head1: "Visitors", 
          subhead: "Avg Time: 4:30m", 
          content1: "12,302", 
          variant: "+12.7%", 
          count: "+1.2k", 
          time: "this week",
          icon1: "https://cdn0.iconfinder.com/data/icons/display-status/100/.svg-2-1024.png",
          icon2: "https://tse1.mm.bing.net/th?id=OIP.mT7jrMMx-BHqQ_1Y67QHIgHaHa&pid=Api&P=0&h=180"
        },
        3: { 
          head1: "Refunds", 
          subhead: "2 disputed", 
          content1: "963", 
          variant: "-15.6%", 
          count: "-213", 
          time: "this week",
          icon1: "https://cdn0.iconfinder.com/data/icons/display-status/100/.svg-2-1024.png",
          icon2: "https://tse1.mm.bing.net/th?id=OIP.mT7jrMMx-BHqQ_1Y67QHIgHaHa&pid=Api&P=0&h=180"
        }
      };
    
    
    
    return(
        <div className={style.ContainerRHS}>
            <div className={style.TopContainer}>
                <div className={style.WelcomeText}>
                    <p className={style.welcomeheading}>Welcome Back , User</p>
                    <p className={style.innertext}>Here are today's stats of Scam Ads</p>
                </div>

                <div className={style.Rightcontainer}>
                    <div className={style.searchbar}> search</div>
                    <div className={style.notification}><img className={style.imageicon} src="https://icon-library.com/images/notifications-icon-png/notifications-icon-png-2.jpg"></img></div>
                    <div className={style.userName}>User</div>


                </div>
                
            </div>
            <div className={style.bottomContainer}>
                {Object.values(CardContent).map((data, index) => (
                    <SimilarCard key={index} data={data} />
                ))}
            </div>

            <ScamDetectionTimelineCard></ScamDetectionTimelineCard>
        </div>
    );
}