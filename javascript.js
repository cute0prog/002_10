/* login.html */

const id = "sojaehyun";
const password = "1234qwer";

var id_checking = "";
var password_checking = "";

function login() {
    id_checking = document.getElementById("log-in_ID").value;
    password_checking = document.getElementById("log-in_PASSWORD").value;

    if (id == id_checking && password == password_checking) {
        alert("로그인 성공.")
        window.location.href = "main.html";
    }
    else if (id != id_checking || password != password_checking) {
        alert("ID또는 비밀번호를 확인하세요.")
    }
}

function search() {
    const keyword = document.getElementById("search-keyword").value;
    
    window.location.href = `result.html?keyword=${encodeURIComponent(keyword)}`;
}

const song1 = {
    title : "dassut(다섯) - ,",
    image : "img/다섯 - ,.jpg",
    link : "detailpages/d,.html"
};
const song2 = {
    title : "신지훈 - 겨울동화",
    image : "img/신지훈 - 겨울동화.jpg",
    link : "detailpages/sjhws.html"
};
const song3 = {
    title : "신지훈 - 별과 추억과 시",
    image : "img/신지훈 - 별과 추억과 시.jpg",
    link : "detailpages/sjhsamap.html"
};
const song4 = {
    title : "신지훈 - 시가 될 이야기",
    image : "img/신지훈 - 시가 될 이야기.jpg",
    link : "detailpages/sjhsbp.html"
};
const song5 = {
    title : "알레프 - 너만은 그러지 말았어야지",
    image : "img/알레프 - 너만은 그러지 말았어야지.jpg",
    link : "detailpages/ayddt.html"
};
const song6 = {
    title : "알레프 - 사과향",
    image : "img/알레프 - 사과향.jpg",
    link : "detailpages/aas.html"
};
const song7 = {
    title : "알레프 - 샤덴프로이데",
    image : "img/알레프 - 샤덴프로이데.jpg",
    link : "detailpages/asf.html"
};
const song8 = {
    title : "알레프, 밍기뉴 - 그럼에도 불구하고",
    image : "img/알레프, 밍기뉴 - 그럼에도 불구하고.jpg",
    link : "detailpages/ama.html"
};
const song9 = {
    title : "윤지영 - 나의 정원에서",
    image : "img/윤지영 - 나의 정원에서.jpg",
    link : "detailpages/yjyimy.html"
};
const song10 = {
    title : "윤지영 - 언젠가 너와 나",
    image : "img/윤지영 - 언젠가 너와 나.jpg",
    link : "detailpages/yjysyai.html"
};
const song11 = {
    title : "윤지영 - Blue Bird",
    image : "img/윤지영 - Blue Bird.jpg",
    link : "detailpages/yjybb.html"
};

const dummyData = [
    song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11
];

const params = new URLSearchParams(window.location.search);
const keyword = params.get("keyword")?.toLowerCase() || "";

const resultList = document.getElementById("resultList");

const results = dummyData.filter(item => item.title.toLowerCase().includes(keyword));

results.forEach(item => {
    const li = document.createElement("li"); // HTML <li> 만들고
    li.className = "result-li"

    li.innerHTML = `
        <a href = "${item.link}">
            <img src="${item.image}" class = "result-image">
        </a>
        <p class = "gor result-title">${item.title}</p>
    `;
    document.getElementById("resultList").appendChild(li); // ul 안에 넣기
});