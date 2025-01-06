import NavBar from "../Layout/NavBar"
const Login = ()=>{
    return(
        <div className="min-h-[100vh] bg-[url(bg.png)] bg-cover bg-center bg-no-repeat font-poppins  relative w-full">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="relative z-20 text-black max-w-screen-2xl mx-auto py-4">
                <NavBar />
            </div>
        </div>

    )
}

export default Login