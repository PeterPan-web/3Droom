//设置的是内部的密集架的样式


var tl3dCoreObj;
function threeStart(_height) {
  tl3dCoreObj = new tl3DCore();
  var initOption = {
    antialias: true,
    loadSyn: false, // 是否启用异步加载
    showHelpGrid: false,
    clearColorOp: 0,
    clearCoolr: 0x112233,
    camera: {
      position: { x: -12, y: 235, z: 560 },
      up: { x: 0, y: 1, z: 0 },
      lookAt: { x: 9, y: 195, z: -55 },
    },
  };

  var mjjparam = {
    // 密集架多少行多少列
    rows: 8,
    colums: 4,
  };
  // 画密集架模型
  var mjj = [
    {
      show: true,
      uuid: "",
      name: "cube_left",
      objType: "cube",
      length: 6,
      width: 100,
      height: 320,
      x: -200,
      y: 200,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 14540253,
          },
          skin_down: {
            skinColor: 14540253,
          },
          skin_fore: {
            skinColor: 14540253,
            imgurl: "../..\\\\upload\\3dimgs\\mjjSide.jpg",
          },
          skin_behind: {
            skinColor: 14540253,
            imgurl: "../..\\\\upload\\3dimgs\\mjjSide.jpg",
          },
          skin_left: {
            skinColor: 14540253,
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/rack1.png",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
        {
          direction: "y",
          degree: 0,
        },
        {
          direction: "z",
          degree: 0,
        },
      ],
      thick: null,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    },
    {
      show: true,
      uuid: "",
      name: "cube_right",
      objType: "cube",
      length: 6,
      width: 100,
      height: 320,
      x: 200,
      y: 200,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 14540253,
          },
          skin_down: {
            skinColor: 14540253,
          },
          skin_fore: {
            skinColor: 14540253,
            imgurl: "../..\\\\upload\\3dimgs\\mjjSide.jpg",
          },
          skin_behind: {
            skinColor: 14540253,
            imgurl: "../..\\\\upload\\3dimgs\\mjjSide.jpg",
          },
          skin_left: {
            skinColor: 14540253,
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/rack2.png",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
        {
          direction: "y",
          degree: 0,
        },
        {
          direction: "z",
          degree: 0,
        },
      ],
      thick: null,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    },
    {
      show: true,
      uuid: "",
      name: "cube_top",
      objType: "cube",
      length: 400,
      width: 100,
      height: 1,
      x: 0,
      y: 360,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 14540253,
          },
          skin_down: {
            skinColor: 14540253,
          },
          skin_fore: {
            skinColor: 14540253,
          },
          skin_behind: {
            skinColor: 14540253,
          },
          skin_left: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/inside_lightmap.jpg",
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/rack_panel.jpg",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
        {
          direction: "y",
          degree: 0,
        },
        {
          direction: "z",
          degree: 0,
        },
      ],
      thick: null,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    },
    {
      show: true,
      uuid: "",
      name: "cube_bottom",
      objType: "cube",
      length: 400,
      width: 100,
      height: 1,
      x: 0,
      y: 60,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 14540253,
          },
          skin_down: {
            skinColor: 14540253,
          },
          skin_fore: {
            skinColor: 14540253,
          },
          skin_behind: {
            skinColor: 14540253,
          },
          skin_left: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/inside_lightmap.jpg",
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/pump_metalreflect.jpg",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
        {
          direction: "y",
          degree: 0,
        },
        {
          direction: "z",
          degree: 0,
        },
      ],
      thick: null,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    },
    {
      show: true,
      uuid: "",
      name: "cube_back",
      objType: "cube",
      length: 400,
      width: 2,
      height: 320,
      x: 0,
      y: 200,
      z: -50,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 14540253,
          },
          skin_down: {
            skinColor: 14540253,
          },
          skin_fore: {
            skinColor: 14540253,
          },
          skin_behind: {
            skinColor: 14540253,
          },
          skin_left: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/inside_lightmap.jpg",
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/pump_metalreflect.jpg",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
        {
          direction: "y",
          degree: 0,
        },
        {
          direction: "z",
          degree: 0,
        },
      ],
      thick: null,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    },
  ];

  // 创建横向隔板
  var rowHeigtht = 300 / mjjparam.rows; // 每隔高度
  for (var i = 0; i < mjjparam.rows - 1; i++) {
    mjj.push({
      show: true,
      uuid: "",
      name: "r" + (i + 1),
      objType: "cube",
      length: 400,
      width: 100,
      height: 1,
      x: 0,
      y: 360 - (i + 1) * rowHeigtht,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: { skinColor: 14540253 },
          skin_down: { skinColor: 14540253 },
          skin_fore: { skinColor: 14540253 },
          skin_behind: { skinColor: 14540253 },
          skin_left: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/inside_lightmap.jpg",
          },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/rack_panel.jpg",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        { direction: "x", degree: 0 },
        { direction: "y", degree: 0 },
        { direction: "z", degree: 0 },
      ],
      thick: null,
      scale: { x: 1, y: 1, z: 1 },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    });
    mjj.push({
      show: true,
      uuid: "",
      name: "r" + (i + 1) + "_right",
      objType: "cube",
      length: 1,
      width: 100,
      height: 2,
      x: 198,
      y: 357 - (i + 1) * rowHeigtht,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: { skinColor: 12434877 },
          skin_down: { skinColor: 11250603 },
          skin_fore: { skinColor: 7039851 },
          skin_behind: { skinColor: 14540253 },
          skin_left: { skinColor: 14540253 },
          skin_right: { skinColor: 3684408 },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        { direction: "x", degree: 0 },
        { direction: "y", degree: 0 },
        { direction: "z", degree: 0 },
      ],
      thick: null,
      scale: { x: 1, y: 1, z: 1 },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    });
    mjj.push({
      show: true,
      uuid: "",
      name: "r" + (i + 1) + "_left",
      objType: "cube",
      length: 1,
      width: 100,
      height: 2,
      x: -198,
      y: 357 - (i + 1) * rowHeigtht,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: { skinColor: 12434877 },
          skin_down: { skinColor: 11250603 },
          skin_fore: { skinColor: 14540253 },
          skin_behind: { skinColor: 14540253 },
          skin_left: { skinColor: 14540253 },
          skin_right: { skinColor: 3684408 },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        { direction: "x", degree: 0 },
        { direction: "y", degree: 0 },
        { direction: "z", degree: 0 },
      ],
      thick: null,
      scale: { x: 1, y: 1, z: 1 },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    });
  }
  //创建竖向隔板
  var columlength = 400 / mjjparam.colums;
  for (var i = 0; i < mjjparam.colums - 1; i++) {
    mjj.push({
      show: true,
      uuid: "",
      name: "c1",
      objType: "cube",
      length: 4,
      width: 100,
      height: 300,
      x: -200 + (i + 1) * columlength,
      y: 210,
      z: 0,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: { skinColor: 14540253 },
          skin_down: { skinColor: 14540253 },
          skin_fore: {
            skinColor: 0x888888,
            imgurl: "../../img/3dImg/floor2.jpg",
          },
          skin_behind: {
            skinColor: 0x888888,
            imgurl: "../../img/3dImg/floor2.jpg",
          },
          skin_left: { skinColor: 14540253 },
          skin_right: {
            skinColor: 14540253,
            imgurl: "../../img/3dImg/card_panel.png",
          },
        },
      },
      showSortNub: 4,
      animation: null,
      dbclickEvents: null,
      rotation: [
        { direction: "x", degree: 0 },
        { direction: "y", degree: 0 },
        { direction: "z", degree: 0 },
      ],
      thick: null,
      scale: { x: 1, y: 1, z: 1 },
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    });
  }

  // 获取当前点击密集架是那一面
  var ss = sessionStorage.getItem("content");
  console.log("点击密集架开关", ss);
  // 获取密集架上图书
  var filesBook = List.filter((item) => {
    return item.Type === 10;
  });
  console.log("显示密集架档案", filesBook);
  var tempObj = {};
  filesBook.forEach((item) => {
    Object.assign(tempObj, JSON.parse(item.Position));
  });
  console.log(tempObj);
  var fileBoxNubs = tempObj;
  var fileBoxNubs = {
    lattice_1_1: [
      {
        title: "档案借阅",
        PDF: [
          {
            name: "档案借阅pdf1",
            url: "showFile.html",
          },
          {
            name: "档案借阅pdf2",
            url: "showFile.html",
          },
        ],
      },
      {
        title: "档案移交流程",
        PDF: [
          {
            name: "档案移交流程pdf",
            url: "showFile.html",
          },
        ],
      },
      {
        title: "数据进馆流程",
        PDF: [
          {
            name: "数据进馆流程pdf",
            url: "showFile.html",
          },
        ],
      },
      {
        title: "档案进馆流程",
        PDF: [
          {
            name: "档案进馆流程pdf1",
            url: "showFile.html",
          },
          {
            name: "档案进馆流程pdf2",
            url: "showFile.html",
          },
        ],
      },
    ],
  };

  // 创建格子
  for (var i = 0; i < mjjparam.rows; i++) {
    for (var j = 0; j < mjjparam.colums; j++) {
      // var boxnub = parseInt(Math.random() * parseInt((columlength - 2) / 7)) + 1;
      // fileBoxNubs["lattice_" + (i + 1) + "_" + (j + 1)] = boxnub;
      // 案卷格子数量(这里是连接数据库的关键)
      var list = [
        [4, 6, 4, 5],
        [4, 4, 2, 7],
        [2, 5, 5, 2],
        [5, 1, 1, 13],
        [7, 7, 4, 3],
        [1, 6, 1, 0],
        [2, 1, 1, 2],
        [3, 1, 5, 4],
      ];
      mjj.push({
        show: true,
        uuid: "",
        name: "lattice_" + (i + 1) + "_" + (j + 1),
        objType: "cube",
        length: columlength - 2,
        width: 2,
        height: rowHeigtht - 2,
        x: -200 + j * columlength + (columlength - 2) / 2,
        y: 360 - (i + 1) * rowHeigtht + (rowHeigtht - 2) / 2,
        z: 45,
        style: {
          skinColor: 16777215,
          skin: {
            skin_up: {
              skinColor: 10382134,
              imgurl: "../../img/3dImg/transparent.png",
            },
            skin_down: {
              skinColor: 10382134,
              imgurl: "../../img/3dImg/transparent.png",
            },
            skin_fore: {
              skinColor: 9525548,
              imgurl: "../../img/3dImg/transparent.png",
            },
            skin_behind: {
              skinColor: 9525548,
              imgurl: "../../img/3dImg/transparent.png",
            },
            skin_left: {
              skinColor: 13076036,
              imgurl: "../../img/3dImg/transparent.png",
            },
            skin_right: {
              skinColor: 13203019,
              imgurl: "../../img/3dImg/transparent.png",
            },
          },
        },
        showSortNub: 11,
        animation: null,
        dbclickEvents: null,
        rotation: [
          { direction: "x", degree: 0 },
          { direction: "y", degree: 0 },
          { direction: "z", degree: 0 },
        ],
        thick: null,
        scale: { x: 1, y: 1, z: 1 },
        BindDevId: null,
        BindDevName: null,
        devInfo: null,
        BindMeteId: null,
        BindMeteName: null,
      });
      for (var w = 0; w < list[i][j]; w++) {
        mjj.push({
          show: true,
          uuid: "",
          name: "filebox_" + (i + 1) + "_" + (j + 1),
          objType: "cube",
          length: 5,
          width: 30,
          height: rowHeigtht - 10,
          x: -200 + j * columlength + 7 * (1 + w),
          y: 360 - (i + 1) * rowHeigtht + (rowHeigtht - 10) / 2 + 2,
          z: 20,
          style: {
            skinColor: 16777215,
            skin: {
              skin_up: { skinColor: 10382134 },
              skin_down: { skinColor: 10382134 },
              skin_fore: { skinColor: 9525548 },
              skin_behind: { skinColor: 9525548 },
              skin_left: { skinColor: 13076036 },
              skin_right: { skinColor: 13203019 },
            },
          },
          showSortNub: 11,
          animation: null,
          dbclickEvents: null,
          rotation: [
            { direction: "x", degree: 0 },
            { direction: "y", degree: 0 },
            { direction: "z", degree: 0 },
          ],
          thick: null,
          scale: { x: 1, y: 1, z: 1 },
          BindDevId: null,
          BindDevName: null,
          devInfo: null,
          BindMeteId: null,
          BindMeteName: null,
        });
      }
    }
  }
  var Aobjects = {
    objects: mjj,
    Animation: [
      {
        obj_name: "",
        obj_animation: function (_obj) {},
        animationType: 0, // 动画类型 -1永久循环执行 0触发执行 >=1执行多少次
        aniInterval: 1000, // 执行时间间隔 毫秒
      },
    ],
    events: {
      dbclick: [
        {
          obj_name: "ALL",
          obj_event: function (_obj) {
            if (
              parent &&
              parent.tl3dCoreBusiness &&
              parent.tl3dCoreBusiness.showLattice
            ) {
              parent.tl3dCoreBusiness.showLattice(_obj, fileBoxNubs);
            }
          },
        },
      ],
      mouseDown: [],
      mouseUp: {},
      mouseMove: [],
    },
    // tl3dCoreObj.viewState;表示0编辑状态 1表示运行状态
    btns: [],
  };
  Aobjects.imageList = [];
  imageUUIDList = [];
  //遍历获取图片资源
  function getImageList(obj) {
    if (obj && typeof obj == "object") {
      $.each(obj, function (_index, _obj) {
        if (_obj && _obj.imgurl) {
          var imgObj = {};
          imgObj.uuid = _obj.imgurl;
          imgObj.imgurl = _obj.imgurl;
          if ($.inArray(imgObj.uuid, imageUUIDList) < 0) {
            imageUUIDList.push(imgObj.uuid);
            Aobjects.imageList.push(imgObj);
          }
        }
        getImageList(_obj);
      });
    }
  }
  getImageList(Aobjects.objects);
  if (_height != null && typeof _height != "undefined" && _height == 0) {
    $("#canvas-frame").height($(document).height());
  }
  tl3dCoreObj.inittl3DCore("canvas-frame", initOption, Aobjects);
  tl3dCoreObj.start();
}
