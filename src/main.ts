import { LineChart } from './LineChart';
import * as jquery from 'jquery';
import { data1 } from './json_data/data1';
import { data2 } from './json_data/data2';
import { data3 } from './json_data/data3';
import { data4 } from './json_data/data4';
import { data5 } from './json_data/data5';
import { data6 } from './json_data/data6';
import { data7 } from './json_data/data7';
import { data8 } from './json_data/data8';
import { data9 } from './json_data/data9';
import { data10 } from './json_data/data10';
import { data11 } from './json_data/data11';
import { data12 } from './json_data/data12';
import { data13 } from './json_data/data13';

// 获取浏览器窗口的可视区域的宽度
function getViewPortWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
}

// 获取浏览器窗口的可视区域的高度
function getViewPortHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight;
}

window.onload = function () {
    let width: number = getViewPortWidth();
    let height: number = getViewPortHeight();

    let ele3 = jquery('#a3');
    ele3.height(height - 300);
    ele3.width(width);

    let ele1 = jquery('#a1');
    ele1.width(width);

    let ele2 = jquery('#a2');
    ele2.width(width);

    let ele4 = jquery('#a4');
    ele4.width(width);

    let contentCanvas = jquery('#contentCanvas');
    contentCanvas.attr("width", width);
    contentCanvas.attr("height", height);

    let xAxisCanvas = jquery('#xAxisCanvas');
    xAxisCanvas.attr("width", width);
    xAxisCanvas.attr("height", ele2.height());

    let chart = new LineChart('xAxisCanvas', 'contentCanvas');
    chart.draw(data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13);

}

