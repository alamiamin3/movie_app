const Login = ()=>{
    return(
        <div className={`min-h-[100vh] bg-[url(bg.png)] bg-cover bg-center bg-no-repeat font-poppins flex justify-center items-center absolute w-full` }>
            <div className="fixed left-0 top-0  w-full h-full bg-black/60 z-10"></div>
            <div className=" text-black container  flex justify-evenly items-center mx-auto z-20">
                <div className=" flex text-white  flex-col ">
                    <div className=" w-[500px] h-[500px]">
                        <img src="logo.png" alt="logo" className=" w-full h-full object-cover"/>
                    </div>
                    <h1 className=" text-5xl font-semibold">Discover, Track, and Enjoy Your Favorite Movies</h1>
                </div>
                <div className="h-[800px] w-[800px] ">

                </div>
            </div>
        </div>
    )
}

export default Login