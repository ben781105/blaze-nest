import { useSelector } from "react-redux";
import ProfileVerificationStep1 from "../ProfileVerificationStep1";
import ProfileVerificationStep2 from "../ProfileVerificationStep2";
import ProfileVerificationStep3 from "../ProfileVerificationStep3";
import ProfileVerificationStep4 from "../ProfileVerificationStep4";
import ProfileVerificationSuccess from "../ProfileVerificationSuccess";

function ProfileVerificationLayout() {
  const step = useSelector((state) => state.profileVerification.step);

  switch (step) {
    case 1:
      return <ProfileVerificationStep1 />;
    case 2:
      return <ProfileVerificationStep2 />;
    case 3:
      return <ProfileVerificationStep3 />;
    case 4:
      return <ProfileVerificationStep4 />;
    case 5:
      return <ProfileVerificationSuccess />;
    default:
      return <ProfileVerificationStep1 />;
  }
}

export default ProfileVerificationLayout;
