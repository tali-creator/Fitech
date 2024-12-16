import Testimonies from "./tali/Testimonies";
import Map from "./Shammah David/Team";

import UserCentric from "./Jayteemoney/userCentric";

import Premium from "./Taibat/premium";
import Invite from "./Rufai/invite";
import FirstPage from "./Aisha Kabir/FirstPage";
import FirstPageFooter from "./Aisha Kabir/FirstPageFooter";
import Forcast from "./Habib/Forcast";


export default function Dashboard() {
  return (
      
    <div className="pt-20 space-y-10">
      {/* Aisha Kabir content goes under here */}
      <FirstPage/>
      <FirstPageFooter/>

      {/* Ruben Luka content goes under here */}

      {/* Taibat Olayinka content under goes here */}
      <Premium />

      {/* Rufai Usman content goes under here */}
      <Invite />
      {/* Jethro irmiya content goes under here */}
      <UserCentric />

      {/* Fatima's content goes under here */}
      <Forcast/>
      {/* Tali Nanzing Moses content under goes here */}

      <Testimonies />
      {/* David Shammah content under goes here */}
      <Map />
    </div>
  );
}
