var data = {
    '407': { room: '407', type: '研究生工作室', occupant: '赵生捷' },
    '408': { room: '408', type: '多媒体教室', occupant: '暂无' },
    '409': { room: '409', type: '研究生工作室', occupant: '杜庆峰' },
    '410': { room: '410', type: '教研室', occupant: '王冬青 李江峰 夏波涌 张颖' },
    '412': { room: '412', type: '教研室', occupant: '刘岩 张惠娟 孙萍 罗怡桂' },
    '413': { room: '413', type: '弱电间', occupant: '暂无' },
    '414': { room: '414', type: '硬件实验室', occupant: '暂无' },
    '415': { room: '415', type: '强电间', occupant: '暂无' },
    '416': { room: '416', type: '多媒体教学机房', occupant: '杨旻' },
    '417': { room: '417', type: '会议室', occupant: '暂无' },
    '418': { room: '418', type: '(左)教授办公室 (右)研究生工作室', occupant: '(左)张林 江建慧 刘琴 (右)袁时金' },
    '419': { room: '419', type: '计算机系统实验室', occupant: '张晶' },
    '426': { room: '426', type: '多媒体教学机房', occupant: '杨旻' },
    '428': { room: '428', type: '服务器机房', occupant: '杨旻' },
    '430': { room: '430', type: '多媒体教学机房', occupant: '杨旻' },
    '432': { room: '432', type: '党员之家', occupant: '暂无' },
    '434': { room: '434', type: '多媒体教室', occupant: '杨旻' },
    '441': { room: '441', type: '会议室', occupant: '暂无' },
    '442': { room: '442', type: '教育部工程研究中心实验室', occupant: '暂无' },
    '443': { room: '443', type: '办公室', occupant: '杨旻 陈梁' },
    '444': { room: '444', type: '无标签办公室', occupant: '暂无' },
    '446': { room: '446', type: '学工办 创新管理办公室', occupant: '葛蕾 焦嘉欣 钟梦莹 陈璞皎 严海洲' },
    '448': { room: '448', type: '办公室', occupant: '暂无' },
    '450': { room: '450', type: '院长办公室', occupant: '赵生捷' },
    '451': { room: '451', type: '办公室', occupant: '穆斌 陈荣' },
    '455': { room: '455', type: '会议室', occupant: '暂无' },
    '456': { room: '456', type: '学院办公室', occupant: '张晓雅 闫鹏 林伊凡 钱银飞 张晶' },
};

window.onload = function () {
    generateAreas();
    document.getElementById('info-box').style.display = 'none'; // 确保信息框在加载时不显示
    setupStartupScreen();
};

function setupStartupScreen() {
    var startupScreen = document.getElementById('startup-screen');
    var startupText = document.getElementById('startup-text');
    startupScreen.addEventListener('click', function () {
        startupScreen.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(function () {
            startupScreen.style.display = 'none'; // 隐藏启动屏幕
            document.body.style.backgroundImage = 'url("bg.png")'; // 设置背景图片
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundAttachment = 'fixed';
        }, 500); // 动画持续时间与CSS中定义的一致
    });
}
// window.onload = function () {
//     generateAreas();
//     document.getElementById('info-box').style.display = 'none';
//     document.addEventListener('click', function (event) {
//         var infoBox = document.getElementById('info-box');
//         if (event.target.closest("#info-box") === null && infoBox.style.display === 'block') {
//             infoBox.style.display = 'none';
//         }
//     });


// 添加点击事件监听器来获取坐标
// document.getElementById('map-container').addEventListener('click', function (event) {
//     var x = event.offsetX;
//     var y = event.offsetY;
//     alert('点击坐标: (' + x + ', ' + y + ')');  // 使用弹窗显示坐标
// });
// };

function generateAreas() {
    var mapData = [
        { room: "407", coords: "721,507,693,540,743,526,717,559" },
        { room: "408", coords: "675,564,649,597,698,583,670,615" },
        { room: "409", coords: "675,470,649,503,720,507,692,540" },
        { room: "410", coords: "651,545,625,578,676,565,647,596" },
        { room: "412", coords: "629,525,602,560,652,545,625,577" },
        { room: "414", coords: "541,425,548,488,583,425,590,476" },
        { room: "416", coords: "541,364,541,426,583,365,583,426" },
        { room: "417", coords: "614,367,614,425,655,364,655,425" },
        { room: "418", coords: "541,301,541,363,582,301,582,364" },
        { room: "419", coords: "614,301,614,363,656,301,656,364" },
        { room: "426", coords: "600,197,600,226,634,197,634,226" },
        { room: "428", coords: "634,197,634,227,656,197,656,226" },
        { room: "430", coords: "669,209,669,231,740,209,741,231" },
        { room: "432", coords: "760,207,760,228,775,208,775,229" },
        { room: "434", coords: "775,209,775,229,792,209,792,229" },
        { room: "441", coords: "812,304,812,349,841,304,841,349" },
        { room: "442", coords: "760,275,760,329,790,275,790,329" },
        { room: "443", coords: "820,351,822,374,850,351,850,366" },
        { room: "444", coords: "759,329,759,351,790,329,790,351" },
        { room: "446", coords: "759,351,762,385,790,351,794,377" },
        { room: "448", coords: "770,388,776,407,802,381,806,393" },
        { room: "450", coords: "768,406,814,465,798,391,836,439" },
        { room: "451", coords: "859,383,839,399,862,422,882,402" },
        { room: "455", coords: "908,417,894,439,931,432,915,454" },
        { room: "456", coords: "877,460,862,481,899,473,883,496" }
    ];

    var mapElement = document.getElementsByName('building-map')[0];
    mapData.forEach(function (item) {
        var area = document.createElement('area');
        area.shape = 'poly';
        area.coords = item.coords;
        area.href = "#";
        area.alt = "房间" + item.room;
        area.onclick = function (event) {
            showRoomInfo(item.room, data[item.room].type, data[item.room].occupant);
            event.stopPropagation(); // Prevent the click from bubbling up to map-container
            return false;
        };
        mapElement.appendChild(area);
    });
}

function showRoomInfo(roomNumber, roomType, occupant) {
    var infoBox = document.getElementById('info-box');
    var content = document.getElementById('info-content');
    if (roomType && occupant) {
        content.innerHTML = '房间号: ' + roomNumber + '<br>类型: ' + roomType + '<br>占用者: ' + occupant;
    } else {
        content.innerHTML = '未找到关于房间 ' + roomNumber + ' 的相关信息。';
    }

    infoBox.style.display = 'block';
}

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    searchInfo();
});

function searchInfo() {
    var input = document.getElementById('search-input').value.trim();
    var infoBox = document.getElementById('info-box');
    var content = document.getElementById('info-content');
    content.innerHTML = ''; // 清空之前的内容
    var found = false;

    for (var key in data) {
        var occupants = data[key].occupant.split(' ');
        var types = data[key].type.split(/[\s\/]+/); // 使用正则表达式来分割类型字段
        // 检查房间号、类型、或占用者
        if (data[key].room === input || types.includes(input)) {
            appendRoomInfo(data[key]);
            found = true;
        }
        else if (occupants.some(occupant => occupant.includes(input))) {
            appendRoomInfo(data[key]);
            found = true;
        }
    }

    if (!found) {
        content.innerHTML = '没有找到相关信息。';
    }

    infoBox.style.display = 'block'; // 显示信息框
    event.stopPropagation();
}

// 辅助函数来追加房间信息
function appendRoomInfo(roomData) {
    var content = document.getElementById('info-content');
    content.innerHTML += '房间号: ' + roomData.room + '<br>类型: ' + roomData.type + '<br>拥有者: ' + roomData.occupant + '<br><br>';
}

