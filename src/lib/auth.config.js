export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        authorized({ auth, request }) {
            return false
        }
    }
}