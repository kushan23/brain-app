import { ReactElement } from "react";

export function SidebarItem({text,icon,setFilter} : {
    text: string;
    icon: ReactElement;
    setFilter: (name: string) => void;
}) {
    return <div onClick={() => setFilter(text.toLowerCase())} className="flex py-4 pl-2 text-gray-700 transition-all duration-500 cursor-pointer hover:bg-slate-200 max-w-48">
        <div className="pr-2">
        {icon}
        </div>
        <div className="pt-0.5">
            {text}
        </div>
    </div>
} 