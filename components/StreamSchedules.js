import useSWR from 'swr'
import InfoCard from './InfoCard';

export default function StreamSchedules() {
    const fetcher = (url) => fetch(url).then(res => res.json());

    const { data, error, isLoading } = useSWR('https://marukun-dev.com/veeapi/', fetcher)

    if (error) return (
        <div>
            <div className="toast toast-end">
                <div className="alert alert-error">
                    <div>
                        <span>サーバーとの通信に失敗しました。</span>
                    </div>
                </div>
            </div>
        </div>
    );
    if (!data) return (
        <div>
            <input type="checkbox" id="loading" className="modal-toggle" />
            <div className="modal modal-open modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Loading...</h3>
                </div>
            </div>
        </div>
    );

    return (
        <div className='flex flex-wrap justify-center'>
            {
                data.map((item) => {
                    return (
                        <InfoCard data={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

