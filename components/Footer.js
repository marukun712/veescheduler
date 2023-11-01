import { ImageList } from "@mui/material"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content bottom-0">
            <aside>
                <Image src="/images/logo.png" alt="VEE logo" width="50" height="50" />
                <p className="font-bold py-2">
                    このWebページは個人が運用しているファンサイトです。
                </p>
            </aside>
        </footer>
    )
}