import { fabric } from 'fabric';

export class LineChart {
    xAxisCanvas: fabric.Canvas;
    canvas: fabric.Canvas;
    width: number;
    height: number;
    bottomHeight: number = 30; //底部状态样栏的高度
    xAxisHeight: number = 150; //上方X轴区域的高度
    
    constructor(xAxisCanvasId: string, contentCanvasId: string) {
        this.xAxisCanvas = new fabric.Canvas(xAxisCanvasId, { selection: false });
        this.canvas = new fabric.Canvas(contentCanvasId, { selection: false });

        this.width = this.canvas.getWidth();
        this.height = this.canvas.getHeight();
    }

    drawXAxis() {
        let line = new fabric.Line([0, 0, this.width, 0], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line);

        let lineBottom = new fabric.Line([0, this.xAxisHeight - 1, this.width, this.xAxisHeight - 1], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(lineBottom);
    }

    //画几个通道的垂直边线
    drawVertical() {
        let yHeight = this.xAxisHeight;
        let line1 = new fabric.Line([1, 0, 1, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line1);

        let c1Width = this.width / 3;
        let line2 = new fabric.Line([c1Width - 100, 0, c1Width - 100, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line2);

        let line3 = new fabric.Line([c1Width, 0, c1Width, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line3);

        let line4 = new fabric.Line([c1Width * 2, 0, c1Width * 2, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line4);

        let line5 = new fabric.Line([c1Width * 3 - 1, 0, c1Width * 3 - 1, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line5);
    }

    drawContentVertical() {
        let yHeight = this.height;//this.height - this.bottomHeight;
        let line1 = new fabric.Line([1, 0, 1, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.canvas.add(line1);

        let c1Width = this.width / 3;
        let line2 = new fabric.Line([c1Width - 100, 0, c1Width - 100, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.canvas.add(line2);

        let line3 = new fabric.Line([c1Width, 0, c1Width, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.canvas.add(line3);

        let line4 = new fabric.Line([c1Width * 2, 0, c1Width * 2, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.canvas.add(line4);

        let line5 = new fabric.Line([c1Width * 3 - 1, 0, c1Width * 3 - 1, yHeight], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.canvas.add(line5);
    }

    //第一个通道四条X轴
    drawXAxis_1() {
        let padding = (this.xAxisHeight - 1) / 4;
        let c1Width = this.width / 3 - 100;//减去100的宽度是两个通道之间的Y轴显示宽度
        let line1 = new fabric.Line([0, padding, c1Width, padding], {
            strokeWidth: 1,
            stroke: 'red',
            selectable: false
        });
        this.xAxisCanvas.add(line1);

        let line2 = new fabric.Line([0, padding * 2, c1Width, padding * 2], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line2);

        let line3 = new fabric.Line([0, padding * 3, c1Width, padding * 3], {
            strokeWidth: 1,
            stroke: 'BlueViolet',
            selectable: false
        });
        this.xAxisCanvas.add(line3);

        let line4 = new fabric.Line([0, padding * 4 - 3, c1Width, padding * 4 - 3], {
            strokeWidth: 1,
            stroke: 'Blue',
            selectable: false
        });
        this.xAxisCanvas.add(line4);
    }

    //第二个通道四条X轴
    drawXAxis_2() {
        let padding = (this.xAxisHeight - 1) / 4;
        let c1Width = this.width / 3;
        let line1 = new fabric.Line([c1Width, padding, c1Width * 2, padding], {
            strokeWidth: 1,
            stroke: 'Gold',
            selectable: false
        });
        this.xAxisCanvas.add(line1);

        let line2 = new fabric.Line([c1Width, padding * 2, c1Width * 2, padding * 2], {
            strokeWidth: 1,
            stroke: 'blue',
            selectable: false
        });
        this.xAxisCanvas.add(line2);

        let line3 = new fabric.Line([c1Width, padding * 3, c1Width * 2, padding * 3], {
            strokeWidth: 1,
            stroke: 'Green',
            selectable: false
        });
        this.xAxisCanvas.add(line3);

        let line4 = new fabric.Line([c1Width, padding * 4 - 3, c1Width * 2, padding * 4 - 3], {
            strokeWidth: 1,
            stroke: 'BlueViolet',
            selectable: false
        });
        this.xAxisCanvas.add(line4);
    }

    //第三个通道五条X轴
    drawXAxis_3() {
        let padding = (this.xAxisHeight - 1) / 5;
        let c1Width = this.width / 3;
        let line1 = new fabric.Line([c1Width * 2, padding, c1Width * 3, padding], {
            strokeWidth: 1,
            stroke: 'red',
            selectable: false
        });
        this.xAxisCanvas.add(line1);

        let line2 = new fabric.Line([c1Width * 2, padding * 2, c1Width * 3, padding * 2], {
            strokeWidth: 1,
            stroke: 'green',
            selectable: false
        });
        this.xAxisCanvas.add(line2);

        let line3 = new fabric.Line([c1Width * 2, padding * 3, c1Width * 3, padding * 3], {
            strokeWidth: 1,
            stroke: 'Feldspar',
            selectable: false
        });
        this.xAxisCanvas.add(line3);

        let line4 = new fabric.Line([c1Width * 2, padding * 4, c1Width * 3, padding * 4], {
            strokeWidth: 1,
            stroke: 'LightSalmon',
            selectable: false
        });
        this.xAxisCanvas.add(line4);

        let line5 = new fabric.Line([c1Width * 2, padding * 5 - 3, c1Width * 3, padding * 5 - 3], {
            strokeWidth: 1,
            stroke: 'black',
            selectable: false
        });
        this.xAxisCanvas.add(line5);
    }

    drawGrid() {
        let c1Width = this.width / 3;
        //第一个通道竖线
        let w = (c1Width - 100) / 8;//网络的宽度
        for (var i = 1; i < 8; i++) {
            if (i % 2 == 0) {
                let line = new fabric.Line([w * i, 0, w * i, this.height], {
                    strokeWidth: 1,
                    stroke: 'gray',
                    selectable: false
                });
                this.canvas.add(line);
            } else {
                let line = new fabric.Line([w * i, 0, w * i, this.height], {
                    fill: 'gray',
                    stroke: 'gray',
                    strokeDashArray: [1, 1],
                    selectable: false
                });
                this.canvas.add(line);
            }
        }
        //第二个通道竖线
        w = c1Width / 8;//网络的宽度
        for (let i = 1; i < 8; i++) {
            if (i % 2 == 0) {
                let line = new fabric.Line([w * i + c1Width, 0, w * i + c1Width, this.height], {
                    strokeWidth: 1,
                    stroke: 'gray',
                    selectable: false
                });
                this.canvas.add(line);
            } else {
                let line = new fabric.Line([w * i + c1Width, 0, w * i + c1Width, this.height], {
                    fill: 'gray',
                    stroke: 'gray',
                    strokeDashArray: [1, 1],
                    selectable: false
                });
                this.canvas.add(line);
            }
        }

        //第三个通道竖线
        for (let i = 1; i < 8; i++) {
            if (i % 2 == 0) {
                let line = new fabric.Line([w * i + c1Width * 2, 0, w * i + c1Width * 2, this.height], {
                    strokeWidth: 1,
                    stroke: 'gray',
                    selectable: false
                });
                this.canvas.add(line);
            } else {
                let line = new fabric.Line([w * i + c1Width * 2, 0, w * i + c1Width * 2, this.height], {
                    fill: 'gray',
                    stroke: 'gray',
                    strokeDashArray: [1, 1],
                    selectable: false
                });
                this.canvas.add(line);
            }
        }

        //第一个通道横线
        let ycount = Math.round(this.height / w);//Y轴网络数
        for (let i = 1; i < ycount; i++) {
            let line = new fabric.Line([0, w * i, c1Width - 100, w * i], {
                fill: 'gray',
                stroke: 'gray',
                strokeDashArray: [1, 1],
                selectable: false
            });
            this.canvas.add(line);
        }

        //第二个通道横线
        for (let i = 1; i < ycount; i++) {
            let line = new fabric.Line([c1Width, w * i, c1Width * 2, w * i], {
                fill: 'gray',
                stroke: 'gray',
                strokeDashArray: [1, 1],
                selectable: false
            });
            this.canvas.add(line);
        }

        //第三个通道横线
        for (let i = 1; i < ycount; i++) {
            let line = new fabric.Line([c1Width * 2, w * i, c1Width * 3, w * i], {
                fill: 'gray',
                stroke: 'gray',
                strokeDashArray: [1, 1],
                selectable: false
            });
            this.canvas.add(line);
        }
    }

    drawYAxisTick() {
        let c1Width = this.width / 3;
        let w = c1Width / 8;//网络的宽度
        let ycount = Math.round(this.height / w);//Y轴网络数
        for (let i = 1; i < ycount; i++) {
            let line = new fabric.Line([c1Width - 100, w * i, c1Width - 100 + 10, w * i], {
                strokeWidth: 1,
                stroke: 'black',
                selectable: false
            });
            this.canvas.add(line);
        }

        for (let i = 1; i < ycount; i++) {
            let line = new fabric.Line([c1Width - 10, w * i, c1Width, w * i], {
                strokeWidth: 1,
                stroke: 'black',
                selectable: false
            });
            this.canvas.add(line);
        }
    }

    drawLine(t: number, data: any, color: string) {
        let ah = this.height / data.length; //根据数据条数将Y轴等分
        let arr = [];
        //求数组中最大及最小值
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i].value);
        }
        let max = Math.max.apply(null, arr);
        //var min = Math.min.apply(null, arr);

        let start = 0, end = max + (max / 4);
        let c1Width = this.width / 3;
        let aw = (c1Width - 100) / end;
        if (t != 1) {
            aw = c1Width / end;
        }

        let tt = c1Width * (t - 1);//根据通道偏移

        let lines = [];
        let x1 = 0, y1 = 0;
        let x2 = 0, y2 = 0;
        for (let i = 0; i < data.length; i++) {
            if (i == 0) {
                x1 = data[i].value * aw;
                y1 = ah;
            } else {
                x2 = data[i].value * aw;
                y2 = ah * (i + 1);
                let line = new fabric.Line([x1 + tt, y1, x2 + tt, y2], {
                    strokeWidth: 1,
                    stroke: color,
                    selectable: false
                });
                lines.push(line);
                x1 = x2;
                y1 = y2;
            }
        }
        let group = new fabric.Group(lines, { selectable: false });
        this.canvas.add(group);
    }

    //绘图逻辑测试
    draw(data1: any, data2: any, data3: any, data4: any, data5: any, data6: any, data7: any, data8: any, data9: any, data10: any, data11: any, data12: any, data13: any) {

        //this.init('xAxisCanvas', 'contentCanvas');
        this.drawXAxis();

        this.drawXAxis_1();//通道1的X轴
        this.drawXAxis_2();//通道2的X轴
        this.drawXAxis_3();//通道3的X轴

        this.drawVertical();
        this.drawContentVertical();

        this.drawGrid();

        this.drawYAxisTick();


        console.time('1');
        this.drawLine(1, data1, 'red');
        console.timeEnd('1');

        console.time('2');
        this.drawLine(1, data2, 'black');
        console.timeEnd('2');

        console.time('3');
        this.drawLine(1, data3, 'BlueViolet');
        console.timeEnd('3');

        console.time('4');
        this.drawLine(1, data4, 'Blue');
        console.timeEnd('4');

        console.time('5');
        this.drawLine(2, data5, 'Gold');
        console.timeEnd('5');

        console.time('6');
        this.drawLine(2, data6, 'blue');
        console.timeEnd('6');

        console.time('7');
        this.drawLine(2, data7, 'Green');
        console.timeEnd('7');

        console.time('8');
        this.drawLine(2, data8, 'BlueViolet');
        console.timeEnd('8');

        console.time('9');
        this.drawLine(3, data9, 'red');
        console.timeEnd('9');

        console.time('10');
        this.drawLine(3, data10, 'green');
        console.timeEnd('10');

        console.time('11');
        this.drawLine(3, data11, 'Feldspar');
        console.timeEnd('11');

        console.time('12');
        this.drawLine(3, data12, 'LightSalmon');
        console.timeEnd('12');

        console.time('13');
        this.drawLine(3, data13, 'black');
        console.timeEnd('13');
    }
}