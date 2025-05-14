import React from "react"
import logo from '.././assets/iconsFooter/LOGOTYPE.svg'

export const Loading = () => {
    return <div className="w-full h-screen grid place-items-center text-white">
        <img className="w-[70px] h-[70px] animate-spin" src={logo} alt="" />
    </div>
}

export const Suspense = ({children}) => {
    return <React.Suspense fallback={<Loading/>}>{children}</React.Suspense>
}
