import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./sidebaritem"
import { LogoutIcon } from "../icons/LogoutIcon"
import { Logo } from "../icons/Logo"
import { useNavigate } from "react-router-dom";
export function Sidebar({setFilter} : {
    setFilter: (name: string) => void;
    filter: string
}) {
    const navigate = useNavigate();
    return <div className="fixed top-0 left-0 h-screen pl-6 bg-white border-2 border-r w-72">
        <div className="flex pt-4 text-2xl text-purple-700">
            <div className="flex items-center">
            <Logo/>
            <div className="pl-4">
            Brainly
            </div>
            </div>
        </div>
        <div className="pt-3">
        <SidebarItem icon={TwitterIcon()} text={'Twitter'} setFilter={setFilter} />
        <SidebarItem icon={YoutubeIcon()} text={"Youtube"} setFilter={setFilter}/>
        <SidebarItem icon={LogoutIcon()} text={"Logout"} setFilter={() => {}}/>
        <div onClick={() => {
            localStorage.removeItem('token');
            navigate('/')
        }} className="flex py-4 pl-2 text-gray-700 transition-all duration-500 cursor-pointer hover:bg-slate-200 max-w-48">
        <div className="pr-2">
        {LogoutIcon()}
        </div>
        <div className="pt-0.5">
            Logout
        </div>
    </div>
        </div>
    </div>
}