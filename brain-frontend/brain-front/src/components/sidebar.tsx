import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./sidebaritem"
import { Logo } from "../icons/Logo"
export function Sidebar() {
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
        <SidebarItem icon={TwitterIcon()} text={'Twitter'} />
        <SidebarItem icon={YoutubeIcon()} text={"Youtube"} />
        </div>
    </div>
}