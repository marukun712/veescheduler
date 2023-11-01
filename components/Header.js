import Image from "next/image"

export default function Header() {
    return (
        <div className="header w-full">
            <div className="navbar bg-base-100 bg-white">
                <Image src="/images/logo.png" alt="VEE logo" width="50" height="50" />
                <h1 className="font-bold px-2 text-black">VEE-Scheduler</h1>
            </div>
        </div>
    )
}