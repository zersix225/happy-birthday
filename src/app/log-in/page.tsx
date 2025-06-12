import Login from '@/components/pages/log-in'
import { Suspense } from 'react'

const LoginPage = () => {
    return (
        <Suspense
        fallback={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
                <div className="text-2xl">Loading...</div>
            </div>
        }>
            <Login />
        </Suspense>
    )
}
export default LoginPage;