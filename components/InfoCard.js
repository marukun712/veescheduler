import Image from "next/image"
import Link from "next/link"

export default function InfoCard(props) {
    let member = props.data.member
    let color;
    let iconPath;

    if (member == '音門るき') {
        color = '#E9AAAC'
        iconPath = '/images/ruki.jpg'
    } else if (member == '九条林檎') {
        color = '#D9D3BA'
        iconPath = '/images/ringo.jpg'
    } else if (member == '秋雪こはく') {
        color = '#B2414E'
        iconPath = '/images/kohaku.jpg'
    } else if (member == 'トゥルシー・ナイトメア') {
        color = '#EEBBD8'
        iconPath = '/images/maou.jpg'
    } else {
        color = '#FFF4A7'
        iconPath = '/images/airu.jpg'
    }

    return (
        <div className='md:p-6 py-6'>
            <div className="card bg-base-100 shadow-xl image-full w-80 h-80">
                <figure><Image src={props.data.image} alt="title" layout="fill" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.data.title}</h2>
                    <div className="flex">
                        <p>{props.data.time}</p>
                        <div className="avatar px-2">
                            <div className="w-12 rounded-full">
                                <img src={iconPath} alt="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="card-actions justify-end py-5">
                        <Link href={props.data.url}><button className="btn btn-primary">Watch</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}