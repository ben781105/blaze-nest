import { useParams } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  const { role } = useParams();
  return (
    <section
      className={`${
        role === "student"
          ? "bg-[url('/imgs/group-smiling.png')]"
          : "bg-[url('/imgs/hand-holding-keys.png')]"
      } bg-no-repeat bg-cover bg-center bg-primary min-h-screen flex justify-center items-center`}
    >
      <SignUpForm />
    </section>
  );
}

export default SignUp;
