import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, handleLoginWithCredentials } from "@/lib/action";

export default async function Login() {
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>Login in with GitHub</button>
            </form>
            <LoginForm />
        </div>
    )
}