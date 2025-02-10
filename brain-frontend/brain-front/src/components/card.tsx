import { ShareIcon } from "../icons/ShareIcon";
interface CardProps {
    title: string;
    link: string;
    type: 'twitter'| 'youtube'
}

export function Card({title, link, type}: CardProps ) {
    return <div>
        <div className="p-4 bg-white border border-gray-200 rounded-md max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-start">
                    <div className="pr-4 text-lg text-gray-40">
                    <ShareIcon size="lg"/>
                    </div>
                    { title }
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                    <ShareIcon size="lg"/>
                    </a>
                    </div>
                    <div className="pl-2 text-gray-500">
                    <ShareIcon size="lg"/>
                    </div>
                </div>
            </div>
            <div className="pt-4">
            { type === "youtube" &&  <iframe className='w-full min-h-48' src={link.replace("watch", "embed").replace("?v=","/")} frameBorder='0'title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            { type === 'twitter' &&  <blockquote className="twitter-tweet"> <a href={link.replace("x.com", "twitter.com")}></a></blockquote>}
            </div>
        </div>
    </div>
}