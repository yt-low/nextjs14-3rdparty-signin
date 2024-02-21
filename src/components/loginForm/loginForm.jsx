"use client";
import { handleLoginWithCredentials } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [state, formAction] = useFormState(
    handleLoginWithCredentials,
    undefined
  );

  const router = useRouter();

//   useEffect(() => {
//     state?.success && router.push("/");
//   }, [state?.success, router]);

  return (
    <form action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login with Credentials</button>
      {state?.error && <div>{state.error}</div>}
      <div>
        <Link href="/register">Not a user yet? Register here.</Link>
      </div>
    </form>
  );
};

export default LoginForm;
