import React, { useState } from 'react';

export default function veeapi(){
    const [jsondata, setdata] = useState(0);
    return(
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
      <div class="mockup-code md:w-auto w-24">
        <pre data-prefix="$"><code>curl https://marukunserver.ml:2200/veeapi</code></pre>
      </div>
      <hr style={{margin: "5%"}} />
<label for="my-modal-6" class="btn modal-button bg-primary" onClick={() =>(
 fetch('https://marukunserver.ml:2200/veeapi')
        .then(res => res.json())
        .then(data => {
            var num = data.length
            var result = JSON.stringify(data, null,num); 
            setdata(result)       
        }
        )
)}>Request sample</label>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <div class="mockup-code">
  <pre>{jsondata}</pre> 
 </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Close</label>
    </div>
  </div>
</div>
      
    </div>
  </div>
</div>

    )
}