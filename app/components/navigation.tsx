import Image from "next/image";

export default function NavigationBar() {
    return (
        <div className="flex justify-between bg-zinc-900 text-white py-4">
            <Image alt="darkLightMode" src={"/icons/crescent-moon.png"} width={30} height={20} className="ml-5"/>
            <div className="flex">
                <Image alt="logo" src={"/icons/unity.png"} width={30} height={30} className="mr-5 ml-72"/>
                <span className="text-2xl font-bold"> The Unity Project Mural </span>
            </div>
            <div className="[&>*]:mr-10 mr-2">
                <span className="hover:text-cyan-400 cursor-pointer"> About </span>
                <span className="hover:text-cyan-400 cursor-pointer"> Download </span>
                <span className="hover:text-cyan-400 cursor-pointer"> Contribute </span>
                <span className="hover:text-cyan-400 cursor-pointer"> Contact </span>
            </div>
        </div>
    )
}