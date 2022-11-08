

/*
 * forDecimal(decimalValue,decimals):数值格式化函数，decimals要 格式化的 数字，How要保留的小数位数。
 */
function forDecimal(decimalValue, decimals) {
    Dight = Math.round(decimalValue * Math.pow(10, decimals))
			/ Math.pow(10, decimals);
    return Dight;
}
 

 

/**
* 判断空
*/
function isNotNull(obj) {
    if (typeof (obj) == 'undefined' || obj == null) {
        return false;
    } else {
        return true;
    }
}
 

  
//日期格式化
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function formatDateToString(date) {
    var dateTime = new Date(date);
    var hours = dateTime.getHours() >= 10 ? dateTime.getHours() : "0"
			+ dateTime.getHours();
    var minutes = dateTime.getMinutes() >= 10 ? dateTime.getMinutes() : "0"
			+ dateTime.getMinutes();
    var seconds = dateTime.getSeconds() >= 10 ? dateTime.getSeconds() : "0"
			+ dateTime.getSeconds();
    var timeStr = dateTime.getFullYear() + "-" + (dateTime.getMonth() + 1)
			+ "-" + dateTime.getDate() + " " + hours + ":" + minutes + ":"
			+ seconds;
    return timeStr;
}
/**
 * 获取上一个月
 * 
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; // 获取当前日期的年份
    var month = arr[1]; // 获取当前日期的月份
    var day = arr[2]; // 获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); // 获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}



function getTime(/** timestamp=0 **/) {
    var ts = arguments[0] || 0;
    var t, y, m, d, h, i, s;
    if (ts) {
        t = new Date(ts);
    }
    else {
        return "";
    }
    y = t.getFullYear();
    m = t.getMonth() + 1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式  
    return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
}

/**
 * 格式化数字 00
 */
function FormatIntToDD(d) {
    if (d < 10)
        return "0" + d;
    else
        return d + "";
}

/**
 * 异步执行方法
 */
function asynLoad(callbackMethod, times) {
    if (callbackMethod != null) {
        var _times = 1;
        if (times) {
            _times = times;
        }
        setTimeout(function () {
            callbackMethod();
        }, _times);
    }
};


/**
 * 向左补位
 */
function padLeft(str, length) {
    if (str.length >= length) {
        return str;
    } else {
        return padLeft("0" + str, length);
    }
}

/**
 * 向左补位
 */
function padLeftStr(str, length, mark) {
    if (str.length >= length) {
        return str;
    } else {
        return padLeftStr(mark + str, length, mark);
    }
}
  
/**
 * 验证是否为正确的手机号码
 */
function isPhone(phoneNo) {
    var reg = /^((1[3-9]{2})+\d{8})$/;
    if (!reg.test(phoneNo)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 验证是否为正确的电子邮箱号码
 */
function isEmail(emailNo) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!reg.test(emailNo)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 验证是否为正确的电话号码
 */
function isTel(telNo) {
    var reg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    if (!reg.test(telNo)) {
        return false;
    } else {
        return true;
    }
}
/**
 * 获取密码强度
 */
function getPasswordStrength(password) {
    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    var strengthValue = 0;
    if (password != numbers && password.length > 3) {
        if (password.match(numbers)) {
            strengthValue++;
        }
        if (password.match(lowerCase) || password.match(upperCase)) {
            strengthValue++;
        }
        if (password.match(lowerCase) && password.match(upperCase)) {
            strengthValue++;
        }

        if (!password.match(numbers) && !password.match(lowerCase)
				&& !password.match(lowerCase)) {
            strengthValue++;
        }

        if (strengthValue > 3 && password.length <= 8) {
            strengthValue = 3;
        } else if (strengthValue == 3 && password.length > 8) {
            strengthValue = 4;
        }
    }

    return strengthValue;
};
 
/**
 * 清空左侧树的内容
 */
function clearMainTree() {
    $("#treeList").empty();
};

/**
 * 移动DIV div名称 div识别列表 矫正x 矫正y
 */
function moveDiv(divName, firstName, correctX, correctY, divWidth) {

    //移动-鼠标事件
    $('#' + divName).mousedown(
        function (event) {
            var _zindex = $('#' + divName).css('z-index');
            if (_zindex == null || _zindex == 'auto') {
                _zindex = 10000;
            }
            $("div[id^='" + firstName + "']").css('z-index', _zindex);
            $('#' + divName).css('z-index', _zindex + 1);

            var isMove = true;
            var abs_x = event.pageX - $('#' + divName).offset().left;
            var abs_y = event.pageY - $('#' + divName).offset().top;
            $(document).mousemove(function (event) {
                if (isMove) {
                    var obj = $('#' + divName);
                    obj.css({ 'left': event.pageX - abs_x + correctX, 'top': event.pageY - abs_y + correctY });
                }
            }
            ).mouseup(
            function () {
                isMove = false;
            }
            );
        }
      );
    //移动 touch事件
    $('#' + divName).attr("data-betouched", "false");
    $('#' + divName).on("touchend", function (e) {
        console.log("touchend");
        $('#' + divName).attr("data-betouched", "false");
    });
    document.getElementById('' + divName).addEventListener('touchstart', function (e) {
        console.log("touchstart");
        var _zindex = $('#' + divName).css('z-index');
        if (_zindex == null || _zindex == 'auto') {
            _zindex = 10000;
        }
        $("div[id^='" + firstName + "']").css('z-index', _zindex);
        $('#' + divName).css('z-index', _zindex + 1);
        $('#' + divName).attr("data-betouched", "true");
        $('#' + divName).attr("data-tx", parseInt($('#' + divName).css("left")));
        $('#' + divName).attr("data-ty", parseInt($('#' + divName).css("top")));
        $('#' + divName).attr("data-x", e.touches[0].pageX);
        $('#' + divName).attr("data-y", e.touches[0].pageY);
        return false;
    });
    document.getElementById('' + divName).addEventListener('touchmove', function (e) {
        console.log("touchmove");
        if ($('#' + divName).attr("data-betouched") == "true") {
            var n = parseInt($('#' + divName).attr("data-tx")) + e.touches[0].pageX - parseInt($('#' + divName).attr("data-x"));
            var m = parseInt($('#' + divName).attr("data-ty")) + e.touches[0].pageY - parseInt($('#' + divName).attr("data-y"));
            if (n > 0 && n < $(window).width() - divWidth) {
                $('#' + divName).css("left", n);
            }
            if (m > 0 && m < $(window).height() - divWidth) {
                $('#' + divName).css("top", m);
            }
            return false;
        }
    });


}
//上传文件到媒体服务器
function uploadFileToMediaServer() {

}
//转为液晶字体
function changeToLEDFont(fnub,fcolor,fsize) {
    var nubArr = (fnub + "").split("");
    var newnub = "";
    $.each(nubArr, function (_index, _obj) {
        switch (_obj) {
            case ".":
                newnub += '<i class="icon iconfont icon-icon-fdot" style="font-size:' + fsize + 'px;color:' + fcolor + ';margin-left:-' + parseInt(fsize / 4) + 'px;margin-right:-' + parseInt(fsize / 4) + 'px;"></i>';
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                newnub += '<i class="icon iconfont icon-icon-f' + _obj + '" style="font-size:' + fsize + 'px;color:' + fcolor + ';margin-left:-' + parseInt(fsize / 4) + 'px;margin-right:-' + parseInt(fsize / 4) + 'px;"></i>';
                break;
            default:
                newnub += '<font style="font-size:' + fsize + 'px;color:' + fcolor + ';">' + _obj + '</font>';
                break;
        }
    });
    return newnub;
}
function LEDFontNub(nub, width, height, RADIUS) {
    var digit =
        [
            [
                [0, 0, 1, 1, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 0, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0]
            ],//0  
            [
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]
            ],//1  
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1]
            ],//2  
            [
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//3  
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 1, 0, 0, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 1]
            ],//4  
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//5  
            [
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0],
                [1, 1, 0, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//6  
            [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0]
            ],//7  
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 1, 0]
            ],//8  
            [
                [0, 1, 1, 1, 1, 1, 0],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 1, 1],
                [0, 1, 1, 1, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 0, 0],
                [0, 1, 1, 0, 0, 0, 0]
            ],//9  
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],//: 
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0]
            ]//.  
        ];
    var WINDOW_WIDTH = width;
    var WINDOW_HEIGHT = height;
    var RADIUS = 8;
    var MARGIN_TOP = 60;
    var MARGIN_LEFT = 30;

    var endTime = new Date(2015, 1, 22, 18, 47, 52);
    var curShowTimeSeconds = 0;

    window.onload = function () {
        //自适应屏幕
        WINDOW_WIDTH = document.body.clientWidth;
        WINDOW_HEIGHT = document.body.clientHeight;

        MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
        RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108) - 1;

        MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);
        time();
    };
    /**
     * 绘制LED点阵数字
     */
    function render(cxt) {
        var curTime = new Date();
        cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
        cxt.fillStyle = "black";
        cxt.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);  //填充颜色 x y坐标 宽 高
        cxt.strokeRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);  //填充边框 x y坐标 宽 高

        var hours = parseInt(curTime.getHours());
        var minutes = parseInt(curTime.getMinutes());
        var seconds = parseInt(curTime.getSeconds());

        renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
        renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
        renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
        renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
        renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), cxt);
        renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
        renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), cxt);
        renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), cxt);
    }

    function renderDigit(x, y, num, cxt) {
        for (var i = 0 ; i < digit[num].length ; i++) {
            for (var j = 0 ; j < digit[num][i].length ; j++) {
                if (digit[num][i][j] == 1) {
                    cxt.fillStyle = "red";
                } else {
                    cxt.fillStyle = "rgb(20,20,20)";
                }
                cxt.beginPath();
                cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
    /**
     * 开始计时
     * @return {[type]} [description]
     */
    function time() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext("2d");
        canvas.width = WINDOW_WIDTH;
        canvas.height = WINDOW_HEIGHT;
        context.clearRect(0, 0, canvas.width, canvas.height);
        setInterval(
            function () {
                render(context);
            },
            50
        );
    }

}
/**
 * 创建基于jquery的dictionary
 */
(function ($) {
    $.extend({
        "JQDictionary": function () {
            this.keyList = [];
            this.valueList = [];
        }
    });
    $.JQDictionary.prototype.Add = function (key, value) {
        if (this.keyList != null && this.keyList.length > 0) {
            if ($.inArray(key, this.keyList) >= 0) {
                this.Update(key, value);
                return true;
            }
        }
        this.keyList.push(key);
        this.valueList.push(value);
    };
    $.JQDictionary.prototype.RemoveByKey = function (key) {
        var index = $.inArray(key, this.keyList);
        this.keyList.splice(index, 1);
        this.valueList.splice(index, 1);
    };
    $.JQDictionary.prototype.Update = function (key, value) {
        var index = $.inArray(key, this.keyList);
        this.valueList[index] = value;
    };
    $.JQDictionary.prototype.Select = function (key) {
        var index = $.inArray(key, this.keyList);
        if (index < 0) {
            return null;
        }
        return this.valueList[index];
    };
    $.JQDictionary.prototype.GetData = function () {
        var objList = [];
        for (var i = 0; i < this.keyList.length; i++) {
            var obj = {};
            obj.key = this.keyList[i];
            obj.value = this.valueList[i];
            objList.push(obj);
        }
        return objList;
    };
    $.JQDictionary.prototype.SortData = function (sortFunc) {
        return this.GetData().sort(sortFunc);
    };
})(jQuery);