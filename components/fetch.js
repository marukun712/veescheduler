const Fetch = () => {
        fetch('https://marukunserver.ml:2200/veeapi')
        .then(res => res.json())
        .then(data => {
            var num = data.length
        for (let i = 0; i < num; i++) {
            var title = data[i].items.title
            var ID = data[i].items.id
            var time = data[i].items.time
            var image = data[i].items.image
            var member = data[i].items.member
            var url = data[i].items.url
            if (member == '音門るき') {
                var color = '#E9AAAC'
                var icon = 'https://yt3.ggpht.com/7q9hOlgVOLGGMGNDnAokhFo7vECpLIyKCOj3xLKwBqPvQuu2-kkLS9E3kkNd-rrfdK0GKepd4w=s88-c-k-c0x00ffffff-no-rj'
            } else if (member == '九条林檎') {
                var color = '#D9D3BA'
                var icon = 'https://yt3.ggpht.com/Rln7rmZcpjY0mIPPfF0BXCA4SLtEPo04b1QJuldTkrOMx03pwEv54f97SXd3cazOqGuylwQN=s88-c-k-c0x00ffffff-no-rj'
            } else if (member == '秋雪こはく') {
                var color = '#B2414E'
                var icon = 'https://yt3.ggpht.com/gkzCvdPGfZP2BsRS2zhCwR46bKGGxwweXWRtYzgPw2rtE4P9RvKX4QRJ6vbABLijOiOxQksSWbk=s88-c-k-c0x00ffffff-no-rj'
            } else if (member == 'トゥルシー・ナイトメア') {
                var color = '#EEBBD8'
                var icon = 'https://yt3.ggpht.com/38SlSYnCwzkXiFwu5tAi5o5X4B8AA1IQnTw59o9yMiF8UTpeDQfnwZOW8mjXCNmDMSwheNVRSlQ=s88-c-k-c0x00ffffff-no-rj'
            } else {
                var color = '#FFF4A7'
                var icon = 'https://yt3.ggpht.com/ZCg_V-PUBtMLJNsmSUYfddSZeehrd_sEH-Dmv65hzr2L3XnINO-j5UkmPBnYCOj80liz2ezp=s88-c-k-c0x00ffffff-no-rj'
            }
        if (process.browser) {
        document.getElementById('cardarea').insertAdjacentHTML("beforeend",` 
        <div class="card sm:w-96 w-80 h-auto bg-base-100 shadow-xl image-full">
            <figure><img src="${image}" alt="image" /></figure>
            <div class="card-body">
              <h2 class="card-title">${title}</h2>
              <p>${time}</p>
                <div class="avatar">
                  <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="${icon}" />
                  </div>
                </div>
                <div class="card-actions justify-end">
                  <a href='${url}'><button class="btn btn-primary">Watch now</button></a>
                </div>
            </div>
          </div>`)}
          console.log(title)

        }});

    return (
        <div id='cardarea' className='md:px-80 px-20 space-y-10'></div>
    )
}

export default Fetch;