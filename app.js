const videoCardGrid = document.querySelector('.video-grid');

let api_key = "AIzaSyCI5QHi2eHyboxfGJFCNz2zfiUlfBhPzsM";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}


const makeVideoCard = (data) => {
    videoCardGrid.innerHTML += `
    <div class="video-preview" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
    <div class="thumbnail-row">
            <img class="thumbnail" src="${data.snippet.thumbnails.high.url}">
            <div class="video-time">14:20
                    <div class="tooltip">Keep hovering to play</div>
            </div>
        </div>
        <div class="video-info-grid">
            <div class="channel-picture">
            <img class="profile-picture" src="${data.channelThumbnail}">
        </div>
        <div class="video-info">
            <p class="video-title">${data.snippet.title}</p>
            <p class="video-author">${data.snippet.channelTitle}
                    <img class="video-mark" src="icons/video-mark.png">
            </p>
            <p class="video-stats">3.4M views · 6 months ago</p>
        </div>
     </div>
    `;
}


// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-button');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

// side bar

const searchs2 = document.querySelector('.s2');
let searchLinks2 = "https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl";

searchs2.addEventListener('click', () => {
        location.href = searchLinks2;
})

const searchs3 = document.querySelector('.s3');
let searchLinks3 = "https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D";

searchs3.addEventListener('click', () => {
        location.href = searchLinks3;
})

const searchs4 = document.querySelector('.s4');
let searchLinks4 = "https://www.youtube.com/@youtubeoriginals";

searchs4.addEventListener('click', () => {
        location.href = searchLinks4;
})

const searchs5 = document.querySelector('.s5');
let searchLinks5 = "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ";

searchs5.addEventListener('click', () => {
        location.href = searchLinks5;
})

const searchs6 = document.querySelector('.s6');
let searchLinks6 = "https://www.youtube.com/shorts/2UZZfLjvRLY";

searchs6.addEventListener('click', () => {
        location.href = searchLinks6;
})

