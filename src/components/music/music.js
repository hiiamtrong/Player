let songlist= [
{
    title:"Đường tôi chở em về",
    src: './music/Duong-Toi-Cho-Em-Ve-buitruonglinh.mp3',
    banner:'./picture/maxresdefault.jpg',
    singer:'buitruonglinh'
},
{
    title:"5.AM",
    src: './music/5AM - Ca Hoi Hoang.mp3',
    banner:'./picture/5am.jpg',
    singer:'Cá hồi hoang'
},
{
    title:"Hương hồng hoa",
    src: './music/HuongHongHoa.mp3',
    banner:'./picture/hhh.jpg',
    singer:'Tofu ft PC'
},

{
    title:"Hà nội xịn",
    src: './music/Ha-Noi-Xin-LK.mp3',
    banner:'./picture/ha-noi-xin.jpg',
    singer:'LK'
},
{
    title:"Mây lang thang",
    src: './music/May Lang Thang - Tung TeA_ PC_ New_oulZ.mp3',
    banner:'./picture/may-lang-thang.jpg',
    singer:'TeA ft PC'
},
{
    title:"Một mình ta",
    src: './music/Mot-Minh-Ta-buitruonglinh.mp3',
    banner:'./picture/mot-minh-ta.jpg',
    singer:'buitruonglinh'
},
{
    title:"Đến bao giờ",
    src: './music/Den-Bao-Gio-Ca-Hoi-Hoang-Dat-Maniac.mp3',
    banner:'./picture/den-bao-gio.png',
    singer:'Cá hồi hoang ft Datmaniac'
},
{
    title:"Em là mưa",
    src: './music/Em-La-Mua-Vu.mp3',
    banner:'./picture/Em-la-mua.jpg',
    singer:'Vũ'
},
{
    title:"Mấy con mèo",
    src: './music/May-con-meo-DatManiac.mp3',
    banner:'./picture/may-con-meo.jpg',
    singer:'Datmaniac'
},
{
    title:"Ngày nào",
    src: './music/Ngay-Nao-Datmaniac-ft-Ca-Hoi-Hoang.mp3',
    banner:'./picture/ngay-nao.jpg',
    singer:'Cá hồi hoang ft Datmaniac'
},
{
    title:"Tầng thượng 102",
    src: './music/Tang-Thuong-102-Ca-Hoi-Hoang.mp3',
    banner:'./picture/tang-thuong-102.jpg',
    singer:'Cá hồi hoang '
},
{
    title:"Không tán tỉnh em đâu",
    src: './music/Khong-Tan-Tinh-Em-Dau-Tung-TeA-PC.mp3',
    banner:'./picture/khong-tted.jpg',
    singer:'TeA ft PC '
}
]
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
   
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
   
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
   
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
   return array
  }
songlist = shuffle(songlist)
export default songlist