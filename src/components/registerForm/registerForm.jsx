"use client";
import { handleRegisterWithCredentials } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(
    handleRegisterWithCredentials,
    undefined
  );

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="Repeat password"
        name="passwordrepeat"
      />
      <button>Register</button>
      {state?.error && <div>{state.error}</div>}
      <div>
        <Link href="/login">Have an account? Login here</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
