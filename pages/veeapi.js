import React, { useState } from 'react';

export default function Veeapi() {
  const [jsondata, setdata] = useState(0);
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://vee-official.jp/ogp.png)" }}
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="w-full md:space-x-0 space-x-12">
          <h1 className="mb-5 text-5xl font-bold">VEEAPI</h1>
          <p className="mb-5">
            Sony Musicによるvtuberプロジェクト「VEE」の配信スケジュールを取得できるapiです。
          </p>
          <div className="mockup-code md:w-auto w-24">
            <pre data-prefix="$"><code>curl https://marukun-dev.com/youtube/vee</code></pre>
          </div>
          <hr style={{ margin: "5%" }} />
          <label htmlFor="my-modal-6" className="btn modal-button bg-primary" onClick={() => (
            fetch('https://marukun-dev.com/youtube/vee')
              .then(res => res.json())
              .then(data => {
                var num = data.length
                var result = JSON.stringify(data, null, num);
                setdata(result)
              }
              )
          )}>Request sample</label>

          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="mockup-code">
                <pre>{jsondata}</pre>
              </div>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">Close</label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}