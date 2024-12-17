import Testimonies from "./tali/Testimonies";
import Map from "./Shammah David/Team";

import UserCentric from "./Jayteemoney/userCentric";

import Premium from "./Taibat/premium";
import Invite from "./Rufai/invite";
import Automated from "./ruben/Automated";
export default function Dashboard() {
  return (
    <div className="pt-20">
      {/* Aisha Kabir content goes under here */}

      {/* Ruben Luka content goes under here */}
      <Automated />
      {/* Taibat Olayinka content under goes here */}
      <Premium />

      {/* Rufai Usman content goes under here */}
      <Invite />
      {/* Jethro irmiya content goes under here */}
      <UserCentric />

      {/* Fatima's content goes under here */}

      {/* Tali Nanzing Moses content under goes here */}

      <Testimonies />
      {/* David Shammah content under goes here */}
      <Map />
    </div>
  );
}
