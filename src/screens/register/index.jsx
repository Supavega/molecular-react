import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/registerForm";

export default function Register() {
  return (
    <>
      <RegisterForm />
    </>
  );
}
