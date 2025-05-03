import { useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function SignIn() {
  const { role } = useParams();
  return (
    <section
      className={`${
        role === "student"
          ? "bg-[url('/imgs/group-smiling.png')]"
          : "bg-[url('/imgs/hand-holding-keys.png')]"
      } bg-no-repeat bg-cover bg-center bg-primary min-h-screen flex justify-center items-center`}
    >
      <LoginForm />
    </section>
  );
}

export default SignIn;
