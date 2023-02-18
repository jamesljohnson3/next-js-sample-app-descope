import { useDescope, useSession, useUser } from '@descope/react-sdk'

const App = () => {
    // NOTE - `useDescope`, `useSession`, `useUser` should be used inside `AuthProvider` context,
    // and will throw an exception if this requirement is not met
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    if(isSessionLoading || isUserLoading){
        return <p>Loading...</p>
    }

     if(isAuthenticated){
        return (
            <><p>Hello ${user.name}, {user.phone},{user.email} </p><button onClick={logout}>Logout</button></>
        )
    }

    return <p>You are not logged in</p>
}