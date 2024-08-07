import { NextPage } from "next";
import { FirstPanelSection, SecondPanelSection } from "@/containers/profile-page";
import { user } from "@/lib/mock";

type ProfileProps = {
  searchParams: {
    section: string;
  };
};

const Profile: NextPage<ProfileProps> = ({ searchParams: { section } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-3 h-screen">
      <FirstPanelSection
        reviewCount={5}
        orderCount={5}
        section={section}
        username={user.username}
        fullName={user.fullname}
      />
      <SecondPanelSection section={section} userProfile={user} className="col-span-2" />
    </div>
  );
};

export default Profile;
