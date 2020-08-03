/* jshint esversion: 6 */
import APlayer from 'aplayer';
//import 'aplayer/dist/APlayer.min.css';

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
            name: "梁汉文",
            artist: '七友',
            url: 'http://excan.vicp.net/%E6%A2%81%E6%B1%89%E6%96%87%20-%20%E4%B8%83%E5%8F%8B.mp3',
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
        }
    ]
});

ap();