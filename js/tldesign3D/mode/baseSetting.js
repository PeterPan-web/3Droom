
function ExtJson() {
  var ajaxval = null
  $.ajax({
      url: 'api/Dense_Shelves_Configuration/'+modelParameter.Id,
      type: 'get',
      async: false, // ajax同步
      success: function(res) {
        ajaxval = res.Data
      }
  });
  console.log(ajaxval)
  return ajaxval;
}
// var List = new ExtJson();

var tempObj = []
// List.forEach(item => {
//   tempObj.push(JSON.parse(item.Position))
// })
// console.log(tempObj)

// 模拟密集架库位模型接口参数
const createList1 = [
  {
    name: 'mjj_1_1',
    x: 170,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_1.jpg'
  },
  {
    name: 'mjj_1_2',
    x: 250,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_2.jpg'
  },
  {
    name: 'mjj_1_3',
    x: 330,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_3.jpg'
  },
  {
    name: 'mjj_1_4',
    x: 410,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_4.jpg'
  },
  {
    name: 'mjj_1_5',
    x: 490,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_5.jpg'
  },
  {
    name: 'mjj_1_6',
    x: 570,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_6.jpg'
  },
  {
    name: 'mjj_1_7',
    x: 650,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_1_7.jpg'
  },
  {
    name: 'mjj_2_1',
    x: 170,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_1.jpg'
  },
  {
    name: 'mjj_2_2',
    x: 250,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_2.jpg'
  },
  {
    name: 'mjj_2_3',
    x: 330,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_3.jpg'
  },
  {
    name: 'mjj_2_4',
    x: 410,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_4.jpg'
  },
  {
    name: 'mjj_2_5',
    x: 490,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_5.jpg'
  },
  {
    name: 'mjj_2_6',
    x: 570,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_6.jpg'
  },
  {
    name: 'mjj_2_7',
    x: 650,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_2_7.jpg'
  },
  {
    name: 'mjj_3_1',
    x: 170,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_1.jpg'
  },
  {
    name: 'mjj_3_2',
    x: 250,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_2.jpg'
  },
  {
    name: 'mjj_3_3',
    x: 330,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_3.jpg'
  },
  {
    name: 'mjj_3_4',
    x: 410,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_4.jpg'
  },
  {
    name: 'mjj_3_5',
    x: 490,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_5.jpg'
  },
  {
    name: 'mjj_3_6',
    x: 570,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_6.jpg'
  },
  {
    name: 'mjj_3_7',
    x: 650,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_3_7.jpg'
  },
  {
    name: 'mjj_4_1',
    x: -460,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_1.jpg'
  },
  {
    name: 'mjj_4_2',
    x: -540,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_2.jpg'
  },
  {
    name: 'mjj_4_3',
    x: -620,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_3.jpg'
  },
  {
    name: 'mjj_4_4',
    x: -700,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_4.jpg'
  },
  {
    name: 'mjj_4_5',
    x: -780,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_5.jpg'
  },
  {
    name: 'mjj_4_6',
    x: -860,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_6.jpg'
  },
  {
    name: 'mjj_4_7',
    x: -940,
    y: 106,
    z: -330,
    imgurl: 'mjjSide_4_7.jpg'
  },
  {
    name: 'mjj_5_1',
    x: -460,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_1.jpg'
  },
  {
    name: 'mjj_5_2',
    x: -540,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_2.jpg'
  },
  {
    name: 'mjj_5_3',
    x: -620,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_3.jpg'
  },
  {
    name: 'mjj_5_4',
    x: -700,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_4.jpg'
  },
  {
    name: 'mjj_5_5',
    x: -780,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_5.jpg'
  },
  {
    name: 'mjj_5_6',
    x: -860,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_6.jpg'
  },
  {
    name: 'mjj_5_7',
    x: -940,
    y: 106,
    z: 130,
    imgurl: 'mjjSide_5_7.jpg'
  },
  {
    name: 'mjj_6_1',
    x: -460,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_1.jpg'
  },
  {
    name: 'mjj_6_2',
    x: -540,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_2.jpg'
  },
  {
    name: 'mjj_6_3',
    x: -620,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_3.jpg'
  },
  {
    name: 'mjj_6_4',
    x: -700,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_4.jpg'
  },
  {
    name: 'mjj_6_5',
    x: -780,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_5.jpg'
  },
  {
    name: 'mjj_6_6',
    x: -860,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_6.jpg'
  },
  {
    name: 'mjj_6_7',
    x: -940,
    y: 106,
    z: 590,
    imgurl: 'mjjSide_6_7.jpg'
  }
]
// 根据密集架模型参数信息画出密集架模型
const mjjList = createList1.map(item => {
  return {
    "rotation": [{
      "direction": "x",
      "degree": 0
    }, {
      "direction": "y",
      "degree": 0
    }, {
      "direction": "z",
      "degree": 0
    }],
    "show": true,
    "length": 80,
    "scale": {
      "x": 1,
      "y": 1,
      "z": 1
    },
    "uuid": "",
    "showSortNub": 58,
    "name": item.name,
    "width": 320,
    "x": item.x,
    "y": item.y,
    "z": item.z,
    "style": {
      "skinColor": 16777215,
      "skin": {
        "skin_up": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": "../..\\\\upload\\3dimgs\\mjjtop.jpg"
        },
        "skin_down": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": "../..\\\\upload\\3dimgs\\mjjtop.jpg"
        },
        "skin_fore": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": "../..\\\\upload\\3dimgs\\face1.jpg"
        },
        "skin_behind": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": "../..\\\\upload\\3dimgs\\face1.jpg"
        },
        "skin_left": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": `../../img/3dImg/mjjFace/${item.imgurl}`
        },
        "skin_right": {
          "skinColor": 16777215,
          "side": 2,
          "opacity": 1,
          "imgurl": "../..\\\\upload\\3dimgs\\mjjSide.jpg"
        }
      }
    },
    "objType": "cube2",
    "height": 200,
    "customType1": "dev",
    "customType2": "mjj",
    "animation": null,
    "dbclickEvents": null,
    "thick": null,
    "BindDevId": null,
    "BindDevName": null,
    "devInfo": null,
    "BindMeteId": null,
    "BindMeteName": null
  }
})

// 模拟密集架上按钮接口参数
const createList2 = [
  {
    name: 'ring_1_1',
    x: 170,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_2',
    x: 250,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_3',
    x: 330,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_4',
    x: 410,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_5',
    x: 490,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_6',
    x: 570,
    y: 130,
    z: -490
  },
  {
    name: 'ring_1_7',
    x: 650,
    y: 130,
    z: -490
  },
  {
    name: 'ring_2_1',
    x: 170,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_2',
    x: 250,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_3',
    x: 330,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_4',
    x: 410,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_5',
    x: 490,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_6',
    x: 570,
    y: 130,
    z: -30
  },
  {
    name: 'ring_2_7',
    x: 650,
    y: 130,
    z: -30
  },
  {
    name: 'ring_3_1',
    x: 170,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_2',
    x: 250,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_3',
    x: 330,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_4',
    x: 410,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_5',
    x: 490,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_6',
    x: 570,
    y: 130,
    z: 430
  },
  {
    name: 'ring_3_7',
    x: 650,
    y: 130,
    z: 430
  },
  {
    name: 'ring_4_1',
    x: -460,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_2',
    x: -540,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_3',
    x: -620,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_4',
    x: -700,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_5',
    x: -780,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_6',
    x: -860,
    y: 130,
    z: -490
  },
  {
    name: 'ring_4_7',
    x: -940,
    y: 130,
    z: -490
  },
  {
    name: 'ring_5_1',
    x: -460,
    y: 130,
    z: -30
  },
  {
    name: 'ring_5_2',
    x: -540,
    y: 130,
    z: -30
  },
  {
    name: 'ring_5_3',
    x: -620,
    y: 130,
    z: -30
  },
  {
    name: 'ring_5_4',
    x: -700,
    y: '130',
    z: '-30'
  },
  {
    name: 'ring_5_5',
    x: -780,
    y: 130,
    z: -30
  },
  {
    name: 'ring_5_6',
    x: -860,
    y: 130,
    z: -30
  },
  {
    name: 'ring_5_7',
    x: -940,
    y: 130,
    z: -30
  },
  {
    name: 'ring_6_1',
    x: -460,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_2',
    x: -540,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_3',
    x: -620,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_4',
    x: -700,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_5',
    x: -780,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_6',
    x: -860,
    y: 130,
    z: 430
  },
  {
    name: 'ring_6_7',
    x: -940,
    y: 130,
    z: 430
  }
]
const ringList = createList2.map(item => {
  return {
    "segmentsY": 0,
    "segmentsX": 16,
    "rotation": [{
      "degree": -1.5707963267948966,
      "direction": "x"
    }, {
      "degree": 0,
      "direction": "y"
    }, {
      "degree": 0,
      "direction": "z"
    }],
    "scale": {
      "x": 1,
      "y": 1,
      "z": 1
    },
    "openEnded": false,
    "radiusTop": 20,
    "radiusBottom": 1,
    "showSortNub": 100,
    "name": item.name,
    "style": {
      "skinColor": 16776960,
      "skin": {
        "skin_up": {
          "imgurl": "../..\\\\upload\\3dimgs\\1503214476192_ring2.png",
          "skinColor": 5197647
        },
        "skin_side": {
          "imgurl": "../..\\\\upload\\3dimgs\\1503215240713_ring3.png",
          "skinColor": 4013373
        },
        "skin_down": {
          "skinColor": 56797
        }
      }
    },
    "position": {
      "x": item.x,
      "y": item.y,
      "z": item.z
    },
    "objType": "cylinder",
    "height": 15
  }
})


// 模拟地面线条接口参数
const createList3 = [
  {
    name: 'track1_1',
    x: 380,
    y: 6,
    z: -410
  },
  {
    name: 'track1_2',
    x: 380,
    y: 6,
    z: -350
  },
  {
    name: 'track1_3',
    x: 380,
    y: 6,
    z: -290
  },
  {
    name: 'track2_1',
    x: 380,
    y: 6,
    z: 70
  },
  {
    name: 'track2_2',
    x: 380,
    y: 6,
    z: 130
  },
  {
    name: 'track2_3',
    x: 380,
    y: 6,
    z: 190
  },
  {
    name: 'track3_1',
    x: 380,
    y: 6,
    z: 530
  },
  {
    name: 'track3_2',
    x: 380,
    y: 6,
    z: 590
  },
  {
    name: 'track3_3',
    x: 380,
    y: 6,
    z: 650
  },
  {
    name: 'track4_1',
    x: -730,
    y: 6,
    z: -410
  },
  {
    name: 'track4_2',
    x: -730,
    y: 6,
    z: -350
  },
  {
    name: 'track4_3',
    x: -730,
    y: 6,
    z: -290
  },
  {
    name: 'track5_1',
    x: -730,
    y: 6,
    z: 70
  },
  {
    name: 'track5_2',
    x: -730,
    y: 6,
    z: 130
  },
  {
    name: 'track5_3',
    x: -730,
    y: 6,
    z: 190
  },
  {
    name: 'track6_1',
    x: -730,
    y: 6,
    z: 530
  },
  {
    name: 'track6_2',
    x: -730,
    y: 6,
    z: 590
  },
  {
    name: 'track6_3',
    x: -730,
    y: 6,
    z: 650
  }
]
const trackList = createList3.map(item => {
  return {
    "rotation": [{
      "degree": 0,
      "direction": "x"
    }, {
      "degree": 0,
      "direction": "y"
    }, {
      "degree": 0,
      "direction": "z"
    }],
    "show": true,
    "length": 600,
    "scale": {
      "x": 1,
      "y": 1,
      "z": 1
    },
    "uuid": "",
    "showSortNub": 29,
    "name": item.name,
    "width": 4,
    "x": item.x,
    "y": item.y,
    "z": item.z,
    "style": {
      "skinColor": 16777215,
      "skin": {
        "skin_behind": {
          "skinColor": 14540253
        },
        "skin_up": {
          "skinColor": 7697781
        },
        "skin_left": {
          "skinColor": 14540253
        },
        "skin_fore": {
          "skinColor": 14540253
        },
        "skin_down": {
          "skinColor": 14540253
        },
        "skin_right": {
          "skinColor": 14540253
        }
      }
    },
    "objType": "cube",
    "height": 5
  }
})


// 模拟灭火器接口参数
const createList4 = [
  {
    name: 'FireExtinguisher_1',
    x: 940,
    y: 10,
    z: -700
  },
  {
    name: 'FireExtinguisher_2',
    x: 940,
    y: 10,
    z: -660
  },
  {
    name: 'FireExtinguisher_3',
    x: 940,
    y: 10,
    z: -680
  },
  {
    name: 'FireExtinguisher_4',
    x: 660,
    y: 10,
    z: -40
  },
  {
    name: 'FireExtinguisher_5',
    x: 660,
    y: 10,
    z: -70
  },
  {
    name: 'FireExtinguisher_6',
    x: 660,
    y: 10,
    z: 390
  },
  {
    name: 'FireExtinguisher_7',
    x: 660,
    y: 10,
    z: 420
  },
  {
    name: 'FireExtinguisher_8',
    x: 660,
    y: 10,
    z: 850
  },
  {
    name: 'FireExtinguisher_9',
    x: 660,
    y: 10,
    z: 880
  },
  {
    name: 'FireExtinguisher_10',
    x: 660,
    y: 10,
    z: 1310
  },
  {
    name: 'FireExtinguisher_11',
    x: 660,
    y: 10,
    z: 1340
  },
  {
    name: 'FireExtinguisher_12',
    x: -960,
    y: 10,
    z: -40
  },
  {
    name: 'FireExtinguisher_13',
    x: -960,
    y: 10,
    z: -70
  }
]
const fireList = createList4.map(item => {
  return {
    "showSortNub": 54,
    "rotation": [{
      "degree": 0,
      "direction": "x"
    }, {
      "degree": 0.3141592653589793,
      "direction": "y"
    }, {
      "degree": 0,
      "direction": "z"
    }],
    "name": item.name,
    "scale": {
      "x": 15,
      "y": 12,
      "z": 15
    },
    "fileurl": "../../img/3dImg/OBJS/FireExtinguisher.json",
    "position": {
      "x": item.x,
      "y": item.y,
      "z": item.z
    },
    "objType": "jsonobj"
  }
})


// 模拟密集架上烟感模拟器接口参数
const createList5 = [
  {
    name: 'smokeSensor_1',
    x: 400,
    y: 370,
    z: -300
  },
  {
    name: 'smokeSensor_2',
    x: 400,
    y: 370,
    z: 150
  },
  {
    name: 'smokeSensor_3',
    x: 400,
    y: 370,
    z: 600
  },
  {
    name: 'smokeSensor_4',
    x: -710,
    y: 370,
    z: -300
  },
  {
    name: 'smokeSensor_5',
    x: -710,
    y: 370,
    z: 150
  },
  {
    name: 'smokeSensor_6',
    x: -710,
    y: 370,
    z: 600
  }
]
const smokeList = createList5.map(item => {
  return {
    "segmentsY": 0,
    "segmentsX": 16,
    "rotation": [{
      "degree": 0,
      "direction": "x"
    }, {
      "degree": 0,
      "direction": "y"
    }, {
      "degree": 0,
      "direction": "z"
    }],
    "scale": {
      "x": 1,
      "y": 1,
      "z": 1
    },
    "openEnded": false,
    "radiusTop": 12,
    "radiusBottom": 4,
    "showSortNub": 142,
    "name": item.name,
    "style": {
      "skinColor": 16776960,
      "skin": {
        "skin_up": {
          "imgurl": "../..\\\\upload\\3dimgs\\1503217712698_ygback.jpg",
          "skinColor": 15461355
        },
        "skin_side": {
          "imgurl": "../..\\\\upload\\3dimgs\\1503218400422_ygside.jpg",
          "skinColor": 16777215
        },
        "skin_down": {
          "skinColor": 11776947
        }
      }
    },
    "position": {
      "x": item.x,
      "y": item.y,
      "z": item.z
    },
    "objType": "cylinder",
    "height": 8
  }
})

tempObj = tempObj.concat(mjjList).concat(ringList).concat(trackList).concat(fireList).concat(smokeList)
console.log(tempObj)
var List = createList1;