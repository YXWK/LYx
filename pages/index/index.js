//index.js
//获取应用实例
import * as echarts from '../../ec-canvas/echarts';
var product = require("../../components/public/public.js");
var Chart = null;

const app = getApp()
let chartLine;
Page({
  data: {
    msgurl: '',
    environment: false,
    video: true,
    onevideoshow: false,
    fourvideoshow: true,
    selectd:0,
    selectdbase:0,
    baseitem:'圪台乡长石头村',
    list: ["圪台乡长石头村", "圪台乡党安新村", "圪台乡王家峁村", "圪台乡王家峁村1"],
    marqueeList: [{
        name: "圪台乡长石头村    土壤湿度    30%     偏低"
      },
      {
        name: "圪台乡党安新村    空气温度    16℃     偏低"
      },
      {
        name: "圪台乡党安新村    空气温度    16℃     偏低"
      },
      {
        name: "圪台乡王家峁村"
      }
    ],
    basebox:'三岔镇长石头村1',
    base: ["三岔镇长石头村1", "三岔镇长石头村2", "三岔镇长石头村3", "三岔镇长石头村4", "三岔镇长石头村5", "三岔镇长石头村6"],
    isone:true,
    isfour:false,
    ec: {
      onInit: function (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart);
        return chart;
      },
      lazyLoad: true // 延迟加载
    }
  },
  changeblue:function(e){
    var classify = e.currentTarget.dataset.classify;
    var that = this;
    console.log(classify)  //输出的结果就是你点击的
    this.setData({
      baseitem: classify,  //更新
    })
    console.log(e);
  },
  changebase: function (e) {
    var baseclass = e.currentTarget.dataset.classify;
    var that = this;
    console.log(baseclass)  //输出的结果就是你点击的
    this.setData({
      basebox: baseclass,  //更新
    })
    console.log(e);
  },
  onLoad: function (options) {
    // public imgurl
    console.log(this.data.msgurl)
    this.setData({
      msgurl: product.data.msgurl
    })
    // echarts
    this.echartsComponnet = this.selectComponent('#mychart');
    //如果是第一次绘制
    if (!Chart) {
      this.init_echarts(); //初始化图表
    } else {
      this.setOption(Chart); //更新数据
    }
  },
  onReady() {
  },
  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      this.setOption(Chart)
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  setOption: function (Chart) {
    Chart.clear();  // 清除
    Chart.setOption(this.getOption());  //获取新数据
  },
  // 图表配置项
  getOption() {
    var self = this;
    var option = {
      title: {
        text: '空气温度',
        left:"22rpx"
      },
      color: ["#4363DF", "#79D5E7"],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['扬尘监测系统', '大厅环境监测系统'],
        left:"40%",
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
      },
      yAxis: {
        // type: 'value',
        type: 'value',
        position: 'left',
        name: '',//纵坐标名称
        nameTextStyle: {//在name值存在下，设置name的样式
          color: 'red',
          fontStyle: 'normal'
        },
        splitNumber: 6,//坐标轴的分割段数
        splitLine: {//坐标轴在 grid 区域中的分隔线。
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {//坐标轴刻度标签
          formatter: function (value) {
            var xLable = [];
            if (value == 20) {
              xLable.push('1%');
            }
            if (value == 40) {
              xLable.push('2%');
            }
            if (value == 60) {
              xLable.push('3%');
            }
            if (value == 80) {
              xLable.push('4%');
            }
            if (value == 100) {
              xLable.push('5%');
            }
            return xLable
          },
          textStyle: {
            fontSize: 13,
            color: '#5D5D5D',
          }
        },
        min: 0,
        max: 100,
      },
      // series: [
      //   {
      //     name: '扬尘监测系统',
      //     type: 'line',
      //     stack: '总量',
      //     data: [23,34,56,58,54,68,54]
      //   },
      //   {
      //     name: '大厅环境监测系统',
      //     type: 'line',
      //     stack: '总量',
      //     data: [25,34,45,56,65,70,40]
      //   }
      // ]
      series: [{
        name: '扬尘监测系统',
        type: 'line',
        data: [18, 36, 65, 30, 78, 40, 33],
        // symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#4363DF'
            }
          }
        }
      }, {
        name: '大厅环境监测系统',
        type: 'line',
        data: [12, 50, 51, 35, 70, 30, 20],
        // data: ["80", "20", "50", "70", "80", "60", "70"],
        // symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#79D5E7'
            }
          }
        }
      }
      ],
    };
    return option;
  },



  // 视屏监控
  videoshow: function() {
    this.setData({
      environment: true,
      video: false
    })
  },
  // 环境监测
  environshow: function() {
    this.setData({
      environment: false,
      video: true
    })
  },
  // 一屏
  catchone: function() {
    
    this.setData({
      onevideoshow: false,
      fourvideoshow: true,
      isone:true,
      isfour:false
    })
  },
  // 四屏
  catchfour: function() {
    this.setData({
      onevideoshow: true,
      fourvideoshow: false,
      isone: false,
      isfour: true
    })
  }
})