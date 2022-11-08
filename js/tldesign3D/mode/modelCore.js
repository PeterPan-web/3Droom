function TL3DCoreBusiness() {
  this.openMjjGroup = -1;
  this._mjjArrays = [];
  this.hideAllMjj = function (a) {
    this._mjjArrays = this.getMjjArray();
    for (var b = 0; b < this._mjjArrays.length; b++)
      for (var c = 0; c < this._mjjArrays[b].length; c++) {
        var d = this._mjjArrays[b][c];
        if (null == a || void 0 == a || d.mjj.name != a.name)
          (d.mjj.visible = !1), (d.ring.visible = !1);
      }
    this.hideAllDetails();
  };
  this.showAllMjj = function (a) {
    this._mjjArrays = this.getMjjArray();
    for (var b = 0; b < this._mjjArrays.length; b++)
      for (var c = 0; c < this._mjjArrays[b].length; c++) {
        var d = this._mjjArrays[b][c];
        if (null == a || void 0 == a || d.mjj.name != a.name)
          (d.mjj.visible = !0), (d.ring.visible = !0);
      }
  };
  this.VirtualAllMjj = function (a) {
    this._mjjArrays = this.getMjjArray();
    console.log(this._mjjArrays);
    for (var b = 0; b < this._mjjArrays.length; b++)
      for (var c = 0; c < this._mjjArrays[b].length; c++) {
        var d = this._mjjArrays[b][c];
        if (null == a || void 0 == a || d.mjj.name != a.name)
          $.each(d.mjj.material.materials, function (a, c) {
            0.15 < c.opacity && (c.opacity = 0.15);
          }),
            $.each(d.ring.material.materials, function (a, c) {
              0.15 < c.opacity && (c.opacity = 0.15);
            });
      }
    this.hideAllDetails();
  };
  this.EntityAllMjj = function () {
    this._mjjArrays = this.getMjjArray();
    for (var a = 0; a < this._mjjArrays.length; a++)
      for (var b = 0; b < this._mjjArrays[a].length; b++) {
        var c = this._mjjArrays[a][b];
        $.each(c.mjj.material.materials, function (a, c) {
          0.1 < c.opacity && (c.opacity = 1);
        });
        $.each(c.ring.material.materials, function (a, c) {
          0.1 < c.opacity && (c.opacity = 1);
        });
      }
  };
  // 打开密集架有过度动画
  this.loadMjjFace = function (a) {
    $.each(a.material.materials, function (a, b) {
      0.1 < b.opacity && (b.opacity = 0.1);
    });
    var b = tl3DCoreObj.createObjByJson({
      show: !0,
      uuid: "",
      name: a.name + "_animationCube",
      objType: "cube2",
      length: 78,
      width: 319,
      height: 1,
      x: a.position.x,
      y: a.position.y - 99,
      z: a.position.z,
      style: {
        skinColor: 16777215,
        skin: {
          skin_up: {
            skinColor: 7219463,
            opacity: 0.9,
          },
          skin_down: {
            skinColor: 7219463,
            opacity: 0.9,
          },
          skin_fore: {
            skinColor: 7219463,
            opacity: 0.9,
          },
          skin_behind: {
            skinColor: 7219463,
            opacity: 0.9,
          },
          skin_left: {
            skinColor: 7219463,
            opacity: 0.9,
          },
          skin_right: {
            skinColor: 7219463,
            opacity: 0.9,
          },
        },
      },
      showSortNub: 11,
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
    });
    tl3DCoreObj.addObject(b);
    new TWEEN.Tween(b.position)
      .to(
        {
          y: a.position.y,
        },
        700
      )
      .start();
    new TWEEN.Tween(b.scale)
      .to(
        {
          y: 199,
        },
        700
      )
      .onComplete(function () {
        $.each(a.material.materials, function (a, b) {
          0.1 == b.opacity && (b.opacity = 1);
        });
        tl3DCoreObj.destoryObj(a.name + "_animationCube");
      })
      .start();
    // this.createMjjDetail(a)
  };
  this.canSeeMjj = [];
  this.mjjDetails = [];
  // 获取密集架详情
  this.createMjjDetail = function (a) {
    var b = null,
      // 获取密集架序号
      c = parseInt(a.name.split("_")[1]), //组序号
      d = parseInt(a.name.split("_")[2]), //列序号
      e = null, //此处表示密集架行数 列数
      f = null, //每隔高度 此处200表示密集架高度
      h = null; //此处320表示宽度
    e = {
      rows: 12,
      colums: 4,
    };
    f = 200 / e.rows; //每隔高度 此处200表示密集架高度
    h = 320 / e.colums; //此处320表示宽度
    for (
      var k = {
          show: !0,
          uuid: "",
          name: "mjjdetailGroup1",
          objType: "GroupObj",
          scale: {
            x: 1,
            y: 1,
            z: 1,
          },
          position: {
            x: a.position.x,
            y: a.position.y,
            z: a.position.z,
          },
          rotation: [
            {
              //旋转 表示x方向0度  arb表示
              direction: "x",
              degree: 0,
            },
          ],
          childrens: [],
        },
        g = 0;
      g < e.rows - 1;
      g++
    )
      k.childrens.push({
        show: !0,
        uuid: "",
        name: "mjjdetail_r" + (g + 1),
        objType: "cube2",
        length: 79,
        width: 319,
        height: 1,
        x: 0,
        y: 100 - (g + 1) * f,
        z: 0,
        style: {
          skinColor: 16777215,
          skin: {
            skin_up: {
              skinColor: 16777215,
              imgurl: "img/3dImg/outside_lightmap.jpg",
            },
            skin_down: {
              skinColor: 14540253,
            },
            skin_fore: {
              skinColor: 14540253,
              imgurl: "img/3dImg/card_panel.png",
            },
            skin_behind: {
              skinColor: 14540253,
              imgurl: "img/3dImg/card_panel.png",
            },
            skin_left: {
              skinColor: 14540253,
            },
            skin_right: {
              skinColor: 14540253,
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
      });
    // 创建竖向隔板
    for (g = 0; g < e.colums - 1; g++)
      k.childrens.push({
        show: !0,
        uuid: "",
        name: "mjjdetail_c" + (g + 1),
        objType: "cube2",
        length: 10,
        width: 2,
        height: 199,
        x: 35,
        y: 0,
        z: 160 - (g + 1) * h,
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
              skinColor: 11184810,
            },
            skin_behind: {
              skinColor: 11184810,
            },
            skin_left: {
              skinColor: 14540253,
              imgurl: "img/3dImg/card_panel.png",
            },
            skin_right: {
              skinColor: 14540253,
              imgurl: "img/3dImg/card_panel.png",
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
      }),
        k.childrens.push({
          show: !0,
          uuid: "",
          name: "mjjdetail_c3" + (g + 1),
          objType: "cube",
          length: 10,
          width: 2,
          height: 199,
          x: -35,
          y: 0,
          z: 160 - (g + 1) * h,
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
                skinColor: 11184810,
              },
              skin_behind: {
                skinColor: 11184810,
              },
              skin_left: {
                skinColor: 14540253,
                imgurl: "img/3dImg/card_panel.png",
              },
              skin_right: {
                skinColor: 14540253,
                imgurl: "img/3dImg/card_panel.png",
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
        });
    b = tl3DCoreObj.createObjByJson(k);
    void 0 == this.mjjDetails[c - 1] && (this.mjjDetails[c - 1] = []);
    this.mjjDetails[c - 1][d - 1] = b;
    tl3DCoreObj.addObject(b);

    //获取内部实时数据
    /*
    数据格式 将有文件的格子信息 以如下形式输出
        [
            {
            rowNo_:1,//行数
            colNo_:1,//列数
            filesNub:5//文件个数
            },

        ]
    */
    c = [];
    for (g = 1; g <= e.rows; g++)
      for (d = 1; d <= e.colums; d++)
        c.push({
          rowNo_: g, // 列数
          colNo_: d, // 行数
          filesNub: Math.floor(5 * Math.random()) % 5, // 随机生成演示文件个数
        });
    // 刷新文件排布
    b.children.length = e.rows + 2 * e.colums - 3;
    $.each(c, function (c, d) {
      if (0 < d.filesNub)
        for (
          c = 0;
          c < parseInt(Math.random() * parseInt((h - 2) / 22)) + 1;
          c++
        ) {
          var e = tl3DCoreObj.createObjByJson({
            show: !0,
            uuid: "",
            name: "filebox_" + d.rowNo_ + "_" + d.colNo_ + "_w" + c,
            objType: "cube",
            length: 70,
            width: 20,
            height: f - 5,
            x: a.position.x,
            y: (d.rowNo_ - 1) * f + (f - 5) / 2 + 5,
            z: a.position.z + (-160 + (d.colNo_ - 1) * h + 22 * (1 + c)),
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 10382134,
                },
                skin_down: {
                  skinColor: 10382134,
                },
                skin_fore: {
                  skinColor: 9525548,
                },
                skin_behind: {
                  skinColor: 9525548,
                },
                skin_left: {
                  skinColor: 13076036,
                },
                skin_right: {
                  skinColor: 13203019,
                },
              },
            },
            showSortNub: 11,
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
          });
          b.children.push(e);
        }
    });
    b.visible = !1;
    b.position.x = a.position.x;
    b.position.y = a.position.y;
    b.position.z = a.position.z;
    setTimeout(function () {
      b.visible = !0;
    }, 800);
  };
  this.hideAllDetails = function () {
    this.mjjDetails &&
      0 < this.mjjDetails.length &&
      $.each(this.mjjDetails, function (a, b) {
        b &&
          0 < b.length &&
          $.each(b, function (a, b) {
            b && (b.visible = !1);
          });
      });
  };
  // 展示某个库位的密集架
  this.showFace = function (a, b) {
    console.log("点击某个库位号的密集架", a);
    var c = parseInt(a.name.split("_")[1]),
      d = parseInt(a.name.split("_")[2]),
      e = this;
    if (0 != b.normal.x && (this.VirtualAllMjj(), b.normal)) {
      var f = "";
      f = 3 >= c ? (1 == b.normal.x ? "A" : "B") : -1 == b.normal.x ? "A" : "B";
      sessionStorage.setItem("content", a.name + "-" + f); // 将点击的那一面存储
      a = layer.open({
        type: 2,
        title: "密集架" + a.name + "-" + f + "面",
        area: ["500px", "500px"],
        maxmin: !0,
        content: [
          "mjjFace.html?group=" +
            c +
            "&colomn=" +
            d +
            "&face=" +
            f +
            "&v2" +
            Math.random(),
          "no",
        ],
        end: function () {
          e.closeFaceDetail();
        },
      });
      layer.full(a);
    }
  };
  this.moveMjj = function (a, b) {
    var c = this;
    this.hideAllDetails();
    c.unselectObj();
    c.hideCamera();
    c = this;
    this.canSeeMjj = [];
    var d = this.getMjjArray(),
      e = a.name,
      f = parseInt(e.split("_")[1]);
    f != c.openMjjGroup &&
      -1 != c.openMjjGroup &&
      this.CloseMJJGroup(c.openMjjGroup, 120);
    c.openMjjGroup = f;
    e = parseInt(e.split("_")[2]);
    var h = a.position.x,
      k = 1;
    k = d[f - 1][0].mjj.protyPosition < d[f - 1][1].mjj.protyPosition ? -1 : 1;
    var g = 0,
      l = 1;
    5 > Math.abs(h - a.protyPosition)
      ? ((l = 1), (g = k * b))
      : ((l = -1), (g = l * k * b));
    if (1 == l)
      for (a = 0; a < e; a++)
        5 >
          Math.abs(
            d[f - 1][a].mjj.position.x - d[f - 1][a].mjj.protyPosition
          ) &&
          (new TWEEN.Tween(d[f - 1][a].mjj.position)
            .to(
              {
                x: d[f - 1][a].mjj.position.x + g,
              },
              500
            )
            .start(),
          new TWEEN.Tween(d[f - 1][a].ring.position)
            .to(
              {
                x: d[f - 1][a].ring.position.x + g,
              },
              500
            )
            .start(),
          new TWEEN.Tween(d[f - 1][a].ring.rotation)
            .to(
              {
                y: d[f - 1][a].ring.rotation.y + g / 10,
              },
              500
            )
            .start());
    else
      for (a = e - 1; a < d[f - 1].length; a++)
        5 <
          Math.abs(
            d[f - 1][a].mjj.position.x - d[f - 1][a].mjj.protyPosition
          ) &&
          (new TWEEN.Tween(d[f - 1][a].mjj.position)
            .to(
              {
                x: d[f - 1][a].mjj.position.x + g,
              },
              500
            )
            .start(),
          new TWEEN.Tween(d[f - 1][a].ring.position)
            .to(
              {
                x: d[f - 1][a].ring.position.x + g,
              },
              500
            )
            .start(),
          new TWEEN.Tween(d[f - 1][a].ring.rotation)
            .to(
              {
                y: d[f - 1][a].ring.rotation.y + g / 10,
              },
              500
            )
            .start());
    setTimeout(function () {
      for (var a = 0; a < d[f - 1].length; a++)
        a < d[f - 1].length - 1 &&
          150 <
            Math.abs(
              d[f - 1][a].mjj.position.x - d[f - 1][a + 1].mjj.position.x
            ) &&
          (c.canSeeMjj.push(d[f - 1][a].mjj),
          c.canSeeMjj.push(d[f - 1][a + 1].mjj));
      0 >= c.canSeeMjj.length &&
        d[f - 1][d[f - 1].length - 1].mjj.position.x !=
          d[f - 1][d[f - 1].length - 1].mjj.protyPosition &&
        c.canSeeMjj.push(d[f - 1][d[f - 1].length - 1].mjj);
      0 < c.canSeeMjj.length &&
        $.each(c.canSeeMjj, function (a, b) {
          c.loadMjjFace(b);
        });
    }, 600);
  };
  this.getMjjArray = function () {
    var a = this;
    0 == a._mjjArrays.length &&
      $.each(tl3DCoreObj.objects, function (b, c) {
        if (0 <= c.name.indexOf("mjj_") || 0 <= c.name.indexOf("ring_")) {
          b = parseInt(c.name.split("_")[1]);
          var d = parseInt(c.name.split("_")[2]);
          void 0 == a._mjjArrays[b - 1] && (a._mjjArrays[b - 1] = []);
          void 0 == a._mjjArrays[b - 1][d - 1] &&
            (a._mjjArrays[b - 1][d - 1] = {
              mjj: null,
              ring: null,
            });
          c.protyPosition = c.position.x;
          0 <= c.name.indexOf("mjj_")
            ? (a._mjjArrays[b - 1][d - 1].mjj = c)
            : (a._mjjArrays[b - 1][d - 1].ring = c);
        }
      });
    return a._mjjArrays;
  };
  this.CloseMJJGroup = function (a, b) {
    var c = this.getMjjArray();
    b *=
      -1 *
      (c[a - 1][0].mjj.protyPosition < c[a - 1][1].mjj.protyPosition ? -1 : 1);
    for (var d = c[a - 1].length, e = 0; e < d; e++)
      5 <
        Math.abs(c[a - 1][e].mjj.position.x - c[a - 1][e].mjj.protyPosition) &&
        (new TWEEN.Tween(c[a - 1][e].mjj.position)
          .to(
            {
              x: c[a - 1][e].mjj.position.x + b,
            },
            1e3
          )
          .start(),
        new TWEEN.Tween(c[a - 1][e].ring.position)
          .to(
            {
              x: c[a - 1][e].ring.position.x + b,
            },
            1e3
          )
          .start(),
        new TWEEN.Tween(c[a - 1][e].ring.rotation)
          .to(
            {
              y: c[a - 1][e].ring.rotation.y + b / 10,
            },
            1e3
          )
          .start());
  };
  this.closeFaceDetail = function () {
    var a = this;
    a.EntityAllMjj();
    0 < a.canSeeMjj.length &&
      $.each(a.canSeeMjj, function (b, c) {
        b = parseInt(c.name.split("_")[1]);
        c = parseInt(c.name.split("_")[2]);
        a.mjjDetails[b - 1] &&
          a.mjjDetails[b - 1][c - 1] &&
          (a.mjjDetails[b - 1][c - 1].visible = !0);
      });
  };
  this.MyWalls = [];
  this.getWalls = function () {
    var a = this;
    0 == a.MyWalls.length &&
      $.each(tl3DCoreObj.objects, function (b, c) {
        0 <= c.name.indexOf("wall_") && a.MyWalls.push(c);
        0 <= c.name.indexOf("windowGlass") && a.MyWalls.push(c);
        0 <= c.name.indexOf("door") && a.MyWalls.push(c);
        0 <= c.name.indexOf("messagePanel") && a.MyWalls.push(c);
        0 <= c.name.indexOf("door") && a.MyWalls.push(c);
        0 <= c.name.indexOf("curtains") && a.MyWalls.push(c);
      });
    return a.MyWalls;
  };
  this.VirtualWalls = function () {
    for (var a = this.getWalls(), b = 0; b < a.length; b++)
      a[b] &&
        a[b].material &&
        a[b].material.materials &&
        $.each(a[b].material.materials, function (a, b) {
          0.15 < b.opacity &&
            ((b.transparent = !0), (b.renderOrder = 1e3), (b.opacity = 0.15));
        });
  };
  this.EntityWalls = function () {
    for (var a = this.getWalls(), b = 0; b < a.length; b++)
      a[b] &&
        a[b].material &&
        a[b].material.materials &&
        $.each(a[b].material.materials, function (a, b) {
          0.15 >= b.opacity && ((b.transparent = !0), (b.opacity = 1));
        });
  };
  // 仓库档案查询
  this.searchFile = function () {
    //搜索查询
    var a = this;
    $("#toolbar").hide();
    layer.open({
      title: "文件查找",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:250px;min-height:150px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr><td style="text-align:right;width:80px;">类型：</td><td><input id="fsfileType" value="" /></td></tr>
          <tr><td style="text-align:center;width:80px;">关键字：</td><td><input id="fskeyWord" value="" /></td></tr>
          <tr><td style="text-align:right;width:80px;">结果：</td><td colspan=2 id="searchResuleTd"></td></tr>
        </table>
      </div>`,
      btn: "确认查找",
      btnAlign: "c",
      shade: 0,
      yes: function () {
        var b = (Math.floor(12 * Math.random()) % 6) + 1,
          c = (Math.floor(14 * Math.random()) % 7) + 1,
          d = 0.5 < Math.random() ? "A" : "B",
          e = (Math.floor(20 * Math.random()) % 10) + 1,
          f = (Math.floor(20 * Math.random()) % 8) + 1,
          h = (Math.floor(40 * Math.random()) % 20) + 1;
        $("#searchResuleTd").html(
          "密集架组：" +
            b +
            "组</br>密集架号：" +
            c +
            "号</br>密集架面：" +
            d +
            "面</br>所在行数：" +
            e +
            "行</br>所在列数：" +
            f +
            "列</br>文档序号：" +
            h +
            "</br>"
        );
        b = tl3DCoreObj.commonFunc.findObject("mjj_" + b + "_" + c);
        a.selectObj(b);
        c = {
          x: (tl3DCoreObj.camera.position.x + b.position.x) / 2,
          y: 600,
          z: (tl3DCoreObj.camera.position.z + b.position.z) / 2,
        };
        3375e3 >
          (tl3DCoreObj.camera.position.x - b.position.x) *
            (tl3DCoreObj.camera.position.x - b.position.x) +
            (600 - b.position.y) * (600 - b.position.y) +
            (tl3DCoreObj.camera.position.z - b.position.z) *
              (tl3DCoreObj.camera.position.z - b.position.z) &&
          (c = {
            x: tl3DCoreObj.camera.position.x,
            y: 600,
            z: tl3DCoreObj.camera.position.z,
          });
        a.changeCameraPosition(c, b.position, 500);
      },
      end: function () {
        $("#toolbar").show();
        a.unselectObj();
      },
    });
    $("#fsfileType").click(function () {
      $("#fsfileType").focus();
    });
    $("#fskeyWord").click(function () {
      $("#fskeyWord").focus();
    });
  };
  this.selectedObjs = null;
  this.selectObj = function (a) {
    this.selectedObjs && this.unselectObj();
    var b = new THREE.MeshBasicMaterial({
      color: 65280,
      side: THREE.BackSide,
    });
    b = new THREE.Mesh(a.geometry.clone(), b);
    b.scale.multiplyScalar(1.05);
    b.position.x = a.position.x;
    b.position.y = a.position.y;
    b.position.z = a.position.z;
    tl3DCoreObj.scene.add(b);
    this.selectedObjs = b;
    this.flashObj(a);
  };
  this.unselectObj = function () {
    this.selectedObjs &&
      (tl3DCoreObj.scene.remove(this.selectedObjs), (this.selectedObjs = null));
  };
  // 获取窗户配置项
  var window = List.filter((item) => {
    return item.Type === 9;
  });
  if (window.length == 0) {
    // 如果没有配置窗户窗台，则给一个默认值
    window.push({
      Name: "窗户状态",
      Position: true,
      Type: 9,
    });
  }
  this._CurtainArray = null;
  this._CurtainState = "";
  this.changeCurtainsState = function () {
    //打开窗帘
    var a = this;
    a.changeCameraPosition(
      {
        x: -620,
        y: 903,
        z: 105,
      },
      {
        x: -184,
        y: -67,
        z: -560,
      },
      1e3,
      function () {
        null == a._CurtainArray &&
          (a._CurtainArray = [
            tl3DCoreObj.commonFunc.findObject("curtains4"),
            tl3DCoreObj.commonFunc.findObject("curtains3"),
            tl3DCoreObj.commonFunc.findObject("curtains2"),
            tl3DCoreObj.commonFunc.findObject("curtains1"),
          ]);
        "running" != a._CurtainState &&
          ((a._CurtainState = "running"),
          $("#btn_windowsCtrl").attr("data_state") ||
            $("#btn_windowsCtrl").attr("data_state", "close"),
          "close" == $("#btn_windowsCtrl").attr("data_state")
            ? ($.each(a._CurtainArray, function (b, c) {
                a.changeCurtainState(c, "open");
                window[0].Position = true;
                $.ajax({
                  url: "api/Dense_Shelves_Configuration/updateDetail",
                  type: "put",
                  contentType: "application/json", //设置请求参数类型为json字符串
                  data: JSON.stringify(window[0]), //将json对象转换成json字符串发送
                  dataType: "json",
                  success: (res) => {
                    console.log(res);
                    console.log("打开");
                  },
                });
              }),
              $("#btn_windowsCtrl").attr("data_state", "open"),
              $("#btn_windowsCtrl").attr("src", "img/3dImg/winOpen.png"))
            : ($.each(a._CurtainArray, function (b, c) {
                a.changeCurtainState(c, "close");
                window[0].Position = false;
                $.ajax({
                  url: "api/Dense_Shelves_Configuration/updateDetail",
                  type: "put",
                  contentType: "application/json", //设置请求参数类型为json字符串
                  data: JSON.stringify(window[0]), //将json对象转换成json字符串发送
                  dataType: "json",
                  success: (res) => {
                    console.log(res);
                    console.log("关闭");
                  },
                });
              }),
              $("#btn_windowsCtrl").attr("data_state", "close"),
              $("#btn_windowsCtrl").attr("src", "img/3dImg/winClose.png")),
          setTimeout(function () {
            a._CurtainState = "";
          }, 1500));
      }
    );
  };
  this.changeCurtainState = function (a, b) {
    var c = "close";
    if (!a.curtainRunState || "running" != a.curtainRunState)
      if (
        ((a.curtainRunState = "running"),
        a.curtainState ? (c = a.curtainState) : (a.curtainState = c),
        b && b == c)
      )
        a.curtainRunState = "";
      else {
        var d = a.children[6],
          e = a.children[5],
          f = a.children[7];
        d.matrixAutoUpdate = !0;
        e.matrixAutoUpdate = !0;
        f.matrixAutoUpdate = !0;
        new TWEEN.Tween(d.rotation)
          .to(
            {
              x: "close" == c ? 10 * Math.PI : 0,
            },
            1e3
          )
          .onComplete(function () {})
          .start();
        new TWEEN.Tween(d.scale)
          .to(
            {
              x: "close" == c ? 2 : 1,
              z: "close" == c ? 2 : 1,
            },
            1e3
          )
          .onComplete(function () {
            d.matrixAutoUpdate = !1;
          })
          .start();
        new TWEEN.Tween(e.scale)
          .to(
            {
              y: "close" == c ? 0.1 : 1,
            },
            1e3
          )
          .onComplete(function () {})
          .start();
        b = e.position.y;
        new TWEEN.Tween(e.position)
          .to(
            {
              y: "close" == c ? b + 58.5 : b - 58.5,
            },
            1e3
          )
          .onComplete(function () {
            e.matrixAutoUpdate = !1;
          })
          .start();
        b = f.position.y;
        new TWEEN.Tween(f.position)
          .to(
            {
              y: "close" == c ? b + 117 : b - 117,
            },
            1e3
          )
          .onComplete(function () {
            f.matrixAutoUpdate = !1;
            "close" == c
              ? (a.curtainState = "open")
              : (a.curtainState = "close");
            a.curtainRunState = "";
          })
          .start();
      }
  };
  this.smokeSensors = [];
  this.getSmokeSensors = function () {
    var a = this;
    a.smokeSensors &&
      0 == a.smokeSensors.length &&
      $.each(tl3DCoreObj.objects, function (b, c) {
        0 <= c.name.indexOf("smokeSensor_") && a.smokeSensors.push(c);
      });
  };
  this.showSmokeModel = function () {
    //烟感模拟
    var a = this;
    a.getSmokeSensors();
    a.VirtualAllMjj();
    a.VirtualWalls();
    $("#toolbar").hide();
    $.each(a.smokeSensors, function (b, c) {
      a.alarmSmokeSensor(c);
    });
    layer.open({
      title: "告警列表",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:280px;min-height:150px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr><td>1、一号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>2、二号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>3、三号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>4、四号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>5、五号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>6、六号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>7、七号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>8、八号烟感、一级告警、烟雾告警</td></tr>
          <tr><td>9、九号烟感、一级告警、烟雾告警</td></tr>
        </table>
      </div>`,
      btn: !1,
      btnAlign: "c",
      shade: 0,
      yes: function () {},
      end: function () {
        $("#toolbar").show();
        a.closeSmokeModel();
      },
    });
  };
  this.closeSmokeModel = function () {
    var a = this;
    a.getSmokeSensors();
    a.EntityAllMjj();
    $("#toolbar").show();
    a.EntityWalls();
    $.each(a.smokeSensors, function (b, c) {
      a.clearSmokeAlarm(c);
    });
  };
  this.alarmSmokeSensor = function (a) {
    console.log(a);
    this.alarmObj(a, 16711680, a.name);
    this.addSmoke(
      16711680,
      {
        x: a.position.x,
        y: a.position.y - 350,
        z: a.position.z,
      },
      a.name + "_smoke"
    );
  };
  this.clearSmokeAlarm = function (a) {
    this.cleanAlarm(a, a.name);
    this.removeSmoke(a.name + "_smoke");
  };
  this.addSmoke = function (a, b, c) {
    a = tl3DCoreObj.createObjByJson({
      show: !0,
      uuid: "",
      name: c,
      objType: "Smoke",
      positionRadius: 2,
      sizeTween: [
        [0, 1],
        [32, 128],
      ],
      velocityBase: [0, 150, 0],
      velocitySpread: [80, 50, 80],
      accelerationBase: [0, -10, 0],
      img: "img/3dImg/smokeparticle.png",
      colorBase: a,
      opacityTween: [
        [0.8, 2],
        [0.5, 0],
      ],
      particlesPerSecond: 200,
      particleDeathAge: 2,
      emitterDeathAge: 1e4,
      x: b.x,
      y: b.y,
      z: b.z,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      rotation: [
        {
          direction: "x",
          degree: 0,
        },
      ],
      angleBase: 0,
      angleSpread: 720,
      angleVelocityBase: 0,
      angleVelocitySpread: 720,
      showSortNub: 4,
    });
    tl3DCoreObj.addObject(a);
  };
  this.removeSmoke = function (a) {
    tl3DCoreObj.destoryObj(a);
  };
  var dampness = List.filter((item) => {
    return item.Type === 8;
  });
  console.log(dampness);
  if (dampness.length == 0) {
    dampness.push(
      // 如果没有配置库房湿度，则默认给一个参数
      {
        Name: "库房湿度",
        Position: "32",
        Type: 8,
      }
    );
  }
  this.humiditys = [];
  this.changehumidity = function () {
    //湿度调节
    var a = this;
    $("#toolbar").hide();
    a.hideCamera();
    a.changeCameraPosition(
      {
        x: -35,
        y: 647,
        z: -1190,
      },
      {
        x: -37,
        y: 190,
        z: 95,
      },
      1e3
    );
    this.hideAllMjj();
    if (0 == this.humiditys.length)
      for (
        var b = [300, -100, 300, 500, -500, -100, -500, 500], c = 0;
        4 > c;
        c++
      ) {
        var d = tl3DCoreObj.createObjByJson({
          show: !0,
          name: "humidity",
          objType: "Humidity",
          position: {
            x: b[2 * c],
            y: 400,
            z: b[2 * c + 1],
          },
          rotation: [
            {
              direction: "x",
              degree: 0,
            },
          ],
          scale: {
            x: 1,
            y: 1,
            z: 1,
          },
          value: parseFloat(dampness[0].Position),
        });
        tl3DCoreObj.addObject(d);
        a.humiditys.push(d);
      }
    for (c = 0; c < a.humiditys.length; c++)
      (a.humiditys[c].position.y = 400), (a.humiditys[c].visible = !0);
    new TWEEN.Tween(a.humiditys[0].position)
      .to(
        {
          y: 200,
        },
        2e3
      )
      .onUpdate(function () {
        for (var b = 1; b < a.humiditys.length; b++)
          a.humiditys[b].position.y = this.y;
      })
      .easing(TWEEN.Easing.Elastic.Out)
      .start();
    layer.closeAll();
    layer.open({
      title: "调节湿度",
      type: 1,
      anim: 2,
      content: `<div style="padding: 10px;width:240px;height:80px;background-color:rgba(255,255,255,0.71);text-align:center;">
        湿度:<input type="text" style="width:100px" id="humidity_input" value="${dampness[0].Position}" />%
      </div>`,
      btn: ["调节", "关闭"],
      shade: 0,
      yes: function () {
        dampness[0].Position = $("#humidity_input").val();
        // $.ajax({
        //   url: "api/Dense_Shelves_Configuration/updateDetail",
        //   type: "put",
        //   contentType: "application/json", // 设置请求参数类型为json字符串
        //   data: JSON.stringify(dampness[0]), // 将json对象转换成json字符串发送
        //   dataType: "json",
        //   success: function (res) {
        //     console.log(res);
        //     a.hideHumidity();
        //     layer.closeAll();
        //   },
        // });
         for (var b = parseFloat($("#humidity_input").val()), c = 0; c < a.humiditys.length; c++) a.humiditys[c].changeThermoneter(b)
      },
      end: function () {
        a.hideHumidity();
      },
    });
    b = $("#humidity_input").val();
    $("#humidity_input").val("").focus().val(b);
  };
  this.hideHumidity = function () {
    var a = this;
    $("#toolbar").show();
    a.hideCamera();
    a = this;
    if (0 < this.humiditys.length)
      for (var b = 0; b < a.humiditys.length; b++)
        (a.humiditys[b].position.y = 400), (a.humiditys[b].visible = !1);
    a.showAllMjj();
  };
  var temperature = List.filter((item) => {
    return item.Type === 7;
  });
  console.log(temperature);
  if (temperature.length == 0) {
    temperature.push(
      // 如果没有配置库房温度，则默认给一个参数
      {
        Name: "库房温度",
        Position: "32",
        Type: 7,
      }
    );
  }
 

  this.templates = [];
  this.changeTemplate = function () {
    // 温度调节
    var a = this;
    $("#toolbar").hide();
    a.hideCamera();
    a.changeCameraPosition(
      {
        x: 540,
        y: 388,
        z: -524,
      },
      {
        x: 0,
        y: 260,
        z: 130,
      },
      1e3
    );
     this.hideAllMjj();
    if (0 == this.templates.length)
      for (
        var b = [300, -100, 300, 500, -500, -100, -500, 500], c = 0;
        4 > c;
        c++
      ) {
        var d = tl3DCoreObj.createObjByJson({
          show: !0,
          name: "thermometer",
          objType: "Thermometer3D",
          position: {
            x: b[2 * c],
            y: 400,
            z: b[2 * c + 1],
          },
          rotation: [
            {
              direction: "x",
              degree: 0,
            },
          ],
          scale: {
            x: 2,
            y: 1.5,
            z: 2,
          },
          value: parseFloat(temperature[0].Position),
        });
        tl3DCoreObj.addObject(d);
        a.templates.push(d);
      }
    for (c = 0; c < a.templates.length; c++)
      (a.templates[c].position.y = 400), (a.templates[c].visible = !0);
    new TWEEN.Tween(a.templates[0].position)
      .to(
        {
          y: 200,
        },
        2e3
      )
      .onUpdate(function () {
        for (var b = 1; b < a.templates.length; b++)
          a.templates[b].position.y = this.y;
      })
      .easing(TWEEN.Easing.Elastic.Out)
      .start();
    layer.closeAll();
    layer.open({
      title: "调节温度",
      type: 1,
      anim: 2,
      content: `<div style="padding: 10px;width:240px;height:80px;background-color:rgba(255,255,255,0.71);text-align:center;">
        温度:<input type="text" style="width:100px" id="template_input" value="${temperature[0].Position}" />%
      </div>`,
      btn: ["调节", "关闭"],
      shade: 0,
      yes: () => {
        temperature[0].Position = $("#template_input").val();
        console.log(temperature[0]);
        //进行网络传递
        // $.ajax({
        //   url: "api/Dense_Shelves_Configuration/updateDetail",
        //   type: "put",
        //   contentType: "application/json",//设置请求参数类型为json字符串
        //   data: JSON.stringify(temperature[0]),//将json对象转换成json字符串发送
        //   dataType: "json",
        //   success:(res) => {
        //     console.log(res)
        //     a.hideTemplate()
        //     layer.closeAll()
        //   }
        // })
        for (
          var b = parseFloat($("#template_input").val()), c = 0;
          c < a.templates.length;
          c++
        )
          a.templates[c].changeThermoneter(b);
      },
      end: function () {
        a.hideTemplate();
      },
    });
    b = $("#template_input").val();
    $("#template_input").val("").focus().val(b);
  };
  this.hideTemplate = function () {
    var a = this;
    $("#toolbar").show();
    a.hideCamera();
    a = this;
    if (0 < this.templates.length)
      for (var b = 0; b < a.templates.length; b++)
        (a.templates[b].position.y = 400), (a.templates[b].visible = !1);
    a.showAllMjj();
  };
  this.FireControl = function () {
    //消防-灭火器定位
    function a() {
      new TWEEN.Tween(c.marks[0].position)
        .to(
          {
            y: 230,
          },
          700
        )
        .onUpdate(function () {
          var a = this;
          $.each(c.marks, function (b, c) {
            0 != b && (c.position.y = a.y);
          });
        })
        .onComplete(function () {
          0 < c.marks.length && b();
        })
        .start();
    }

    function b() {
      new TWEEN.Tween(c.marks[0].position)
        .to(
          {
            y: 200,
          },
          700
        )
        .onUpdate(function () {
          var a = this;
          $.each(c.marks, function (b, c) {
            0 != b && (c.position.y = a.y);
          });
        })
        .onComplete(function () {
          0 < c.marks.length && a();
        })
        .start();
    }
    var c = this;
    c.VirtualWalls();
    c.hideAllMjj();
    c.hideCamera();
    c.removeMark();
    c.addMark({
      x: 940,
      y: 200,
      z: -660,
    });
    c.addMark({
      x: 660,
      y: 200,
      z: -70,
    });
    c.addMark({
      x: 660,
      y: 200,
      z: 400,
    });
    c.addMark({
      x: -960,
      y: 200,
      z: -70,
    });
    c.addMark({
      x: -960,
      y: 200,
      z: 400,
    });
    a();
    (function () {
      c.changeCameraPosition(
        {
          x: -270,
          y: 1274,
          z: -714,
        },
        {
          x: 209,
          y: 705,
          z: -750,
        },
        1e3,
        function () {
          c.changeCameraPosition(
            {
              x: -574,
              y: 1430,
              z: -161,
            },
            {
              x: 486,
              y: 134,
              z: -90,
            },
            2e3,
            function () {
              c.changeCameraPosition(
                {
                  x: 196,
                  y: 1262,
                  z: 340,
                },
                {
                  x: -639,
                  y: 277,
                  z: 216,
                },
                4e3,
                function () {
                  c.changeCameraPosition(
                    {
                      x: 12,
                      y: 1749,
                      z: -2468,
                    },
                    {
                      x: 61,
                      y: 156,
                      z: 194,
                    },
                    1e3,
                    function () {}
                  );
                }
              );
            }
          );
        }
      );
    })();
    $("#toolbar").hide();
    layer.open({
      title: "消防-灭火器定位",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:300px;min-height:200px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr><td style="text-align:right;width:80px;">序号</td><td>位置</td><td>定位</td></tr>
          <tr><td style="text-align:center;width:80px;">1</td><td>大门口</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: -270, y: 1274, z: -714 },{ x: 209, y: 705, z: -750 },1000)">定位</button></tr>
          <tr><td style="text-align:center;width:80px;">2</td><td>密集架5和密集架6中间</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: -574, y: 1430, z: -161 },{ x: 486, y: 134, z: -90 },1000)">定位</button></td></tr>
          <tr><td style="text-align:center;width:80px;">3</td><td>密集架4和密集架5中间</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: -574, y: 1430, z: -161 },{ x: 486, y: 134, z: -90 },1000)">定位</button></tr>
          <tr><td style="text-align:center;width:80px;">4</td><td>密集架1和密集架2中间</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: 196, y: 1262, z: 340},{ x: -639, y: 277, z: 216 },1000)">定位</button></tr>
          <tr><td style="text-align:center;width:80px;">5</td><td>密集架2和密集架3中间</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: 196, y: 1262, z: 340},{ x: -639, y: 277, z: 216 },1000)">定位</button></tr>
        </table>
      </div>`,
      btn: !1,
      btnAlign: "c",
      shade: 0,
      end: function () {
        c.hideFireControls();
      },
    });
  };
  this.hideFireControls = function () {
    $("#toolbar").show();
    this.EntityWalls();
    this.showAllMjj();
    this.removeMark();
  };
  this.cameraRange = [];
  this.showCamera = function () {
    //摄像机
    var a = this;
    if (0 >= a.cameraRange.length) {
      var b = tl3DCoreObj.createObjByJson({
        segmentsY: 0,
        segmentsX: 6,
        rotation: [
          {
            degree: 1.836627410320584,
            direction: "x",
          },
          {
            degree: -0.01857030395023093,
            direction: "y",
          },
          {
            degree: -0.10075785157596659,
            direction: "z",
          },
        ],
        show: !0,
        scale: {
          x: 1.1,
          y: 1,
          z: 0.3,
        },
        openEnded: !1,
        radiusTop: 500,
        radiusBottom: 5,
        showSortNub: 211,
        name: "camera_range",
        style: {
          skinColor: 16776960,
          skin: {
            skin_up: {
              side: 0,
              skinColor: 16777215,
              opacity: 0,
            },
            skin_side: {
              imgurl: "img/3dImg/camarerange.png",
              side: 2,
              skinColor: 2746367,
              opacity: 0.3,
            },
            skin_down: {
              side: 1,
              skinColor: 6881093,
              opacity: 0,
            },
          },
        },
        position: {
          x: -129.087,
          y: 170.956,
          z: -314.488,
        },
        objType: "cylinder",
        height: 500,
      });
      tl3DCoreObj.addObject(b);
      a.cameraRange.push(b);
      b = tl3DCoreObj.createObjByJson({
        segmentsY: 0,
        segmentsX: 6,
        rotation: [
          {
            direction: "x",
            degree: 1.5415097019464317,
          },
          {
            direction: "y",
            degree: -0.08611454529340022,
          },
          {
            direction: "z",
            degree: -3.0382866151642487,
          },
        ],
        show: !0,
        scale: {
          x: 1.1,
          y: 1,
          z: 0.3,
        },
        openEnded: !1,
        radiusTop: 500,
        radiusBottom: 5,
        showSortNub: 211,
        name: "camera_range2",
        style: {
          skinColor: 16776960,
          skin: {
            skin_up: {
              skinColor: 16777215,
              side: 0,
              opacity: 0,
            },
            skin_down: {
              skinColor: 6881093,
              side: 1,
              opacity: 0,
            },
            skin_side: {
              skinColor: 2746367,
              side: 2,
              opacity: 0.3,
              imgurl: "img/3dImg/camarerange.png",
            },
          },
        },
        position: {
          x: 45.312,
          y: 247.096,
          z: 534.465 + modelParameter.Camera_Projection_Z, // 摄像机投影z轴
        },
        objType: "cylinder",
        height: 500,
        customType1: "",
        customType2: "",
        animation: null,
        dbclickEvents: null,
        BindDevId: null,
        BindDevName: null,
        devInfo: null,
        BindMeteId: null,
        BindMeteName: null,
      });
      tl3DCoreObj.addObject(b);
      a.cameraRange.push(b);
    }
    0 < a.cameraRange.length &&
      $.each(a.cameraRange, function (b, d) {
        d.visible = !0;
        a.flashObj(d, 11729671);
      });
    a.changeCameraPosition(
      {
        x: -1284,
        y: 1787,
        z: -378,
      },
      {
        x: -237,
        y: 308,
        z: 145,
      },
      1e3
    );
  };
  this.hideCamera = function () {
    0 < this.cameraRange.length &&
      $.each(this.cameraRange, function (a, b) {
        b.visible = !1;
      });
  };
  const reults = List.filter((item) => {
    return item.Type === 6; // 拿到视频参数
  });
  console.log(reults);
  if (reults.length == 0) {
    // 如果没有配置短视频则默认给一个参数
    reults.push({
      Position:
        "https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4",
      Name: "短视频",
      Type: 6,
    });
  }
  this.showVideo = function (a) {
    var b = this;
    layer.closeAll();
    layer.open({
      title: "视频",
      area: ["555px", "280px"],
      type: 1,
      content: `<video id="video" autoplay loop webkit-playsinline style="width:100%;" >
        <source src="${reults[0].Position.replace(/\"/g, "")}">
      </video>`,
      btn: !1,
      shade: 0,
      yes: function () {},
      end: function () {
        b.hideCamera();
      },
    });
  };
  this.bigScreens = [];
  this.getScreens = function () {
    var a = this;
    0 == a.bigScreens.length &&
      $.each(tl3DCoreObj.objects, function (b, c) {
        0 <= c.name.indexOf("wall_bigScreen_") && a.bigScreens.push(c);
      });
    return a.bigScreens;
  };
  this.showBigScreenCtrls = function () {
    //大屏控制
    this.getScreens();
    $("#toolbar").hide();
    layer.open({
      title: "大屏定位-设置",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:300px;min-height:200px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr><td style="text-align:right;width:60px;">序号</td><td style="text-align:center;width:120px;">位置</td><td style="width:60px;">定位</td><td style="width:60px;">设置</td></tr>
          <tr><td style="text-align:center;width:80px;">1</td><td style="text-align:center;">一号外墙大屏</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x:1013, y:335, z: -456 },{ x: 328, y: -37, z: -532 },1000)">定位</button></td><td><button onclick="tl3dCoreBusiness.setSreenParams(\'wall_bigScreen_1\')">设置</button></td></tr>
          <tr><td style="text-align:center;width:80px;">2</td><td style="text-align:center;">二号室内大屏</td><td><button onclick="tl3dCoreBusiness.changeCameraPosition({ x: -310, y: 187, z: 452+modelParameter.Indoor_Second_Large_Screen_Z},{ x: -325, y: 147, z: 870+modelParameter.Indoor_Second_Large_Screen_Z },1000)">定位</button></td><td><button onclick="tl3dCoreBusiness.setSreenParams(\'wall_bigScreen_2\')">设置</button></td></tr>
        </table>
      </div>`,
      btn: !1,
      btnAlign: "c",
      shade: 0,
      end: function () {
        $("#toolbar").show();
      },
    });
  };
  this.setSreenParams = function (a) {
    for (var b = null, c = 0; c < this.bigScreens.length; c++)
      this.bigScreens[c].name == a && (b = this.bigScreens[c]);
    c = "1";
    var d = "img/3dImg/tv.jpg";
    b && b.screenType && (c = b.screenType);
    b && b.screenUrl && (d = b.screenUrl);
    var e = layer.open({
      title: "大屏定位-设置",
      type: 1,
      offset: "lt",
      content:
        '<div style="padding: 10px;width:300px;min-height:100px;background-color:rgba(255,255,255,1);">\t        <table class="table">\t        <tr><td style="text-align:right;width:60px;">类型:</td><td><label><input name="screenTypeAndUrl" type="radio" ' +
        ("1" == c ? " checked='checked' " : "") +
        ' value="1" />图片 </label><label><input name="screenTypeAndUrl" type="radio" ' +
        ("2" == c ? "  checked='checked' " : "") +
        ' value="2" />视频 </label> </td></tr>\t        <tr><td style="text-align:right;width:60px;">url:</td><td><input onclick="var t = $(\'#screenUrl\').val();$(\'#screenUrl\').val(\'\').focus().val(t)" id="screenUrl" value="' +
        d +
        '" /></td></tr>\t        </table></div>',
      btn: ["确定", "取消"],
      btnAlign: "c",
      shade: 0,
      yes: function () {
        var c = $("input:radio[name='screenTypeAndUrl']:checked").val(),
          d = $("#screenUrl").val();
        "1" == c
          ? tl3DCoreObj.commonFunc.setObjSkinImg(b, 0, d)
          : tl3DCoreObj.commonFunc.setObjSkinVideo(b, 0, d, a);
        b.screenType = c;
        b.screenUrl = d;
        layer.close(e);
      },
      end: function () {},
    });
    $("#canvas-frame canvas").dblclick();
    c = $("#screenUrl").val();
    $("#screenUrl").val("").focus().val(c);
  };
  this.showWindsCtrl = function () {
    //风控
    var a = this;
    console.log(a.windsISOPEN);
    $("#toolbar").hide();
    a.changeCameraPosition(
      {
        x: 430,
        y: 1449,
        z: -2557,
      },
      {
        x: 8,
        y: 234,
        z: 814,
      },
      1e3
    );
    a.windsISOPEN
      ? (a.openWinds(),
        layer.confirm(
          "当前风控开启状态，是否关闭风控按钮？",
          {
            offset: "lt",
            btn: ["关闭", "取消"],
            cancel: function () {
              $("#toolbar").show();
              layer.closeAll();
            },
          },
          function () {
            a.closeWinds();
            layer.msg("已关闭");
            a.windsISOPEN = !1;
            $("#toolbar").show();
            layer.closeAll();
          },
          function () {
            $("#toolbar").show();
            a.hiddenIngWinds();
            layer.closeAll();
          }
        ))
      : layer.confirm(
          "当前风控关闭状态，是否开启风控按钮？",
          {
            offset: "lt",
            btn: ["开启", "取消"],
            cancel: function () {
              $("#toolbar").show();
              layer.closeAll();
            },
          },
          function () {
            a.openWinds();
            layer.msg("已开启");
            layer.closeAll();
            a.windsISOPEN = !0;
            setTimeout(function () {
              a.hiddenIngWinds();
              $("#toolbar").show();
            }, 2e3);
          },
          function () {
            $("#toolbar").show();
            layer.closeAll();
          }
        );
  };
  // 模拟风控接口参数
  const createList6 = [
    {
      name: "win_1_1",
      x: 0,
      y: -100,
      z: -400,
    },
    {
      name: "win_1_2",
      x: 0,
      y: -100,
      z: 60,
    },
    {
      name: "win_1_3",
      x: 0,
      y: -100,
      z: 520,
    },
    {
      name: "win_1_4",
      x: 0,
      y: -100,
      z: 980,
    },
    {
      name: "win_1_5",
      x: 0,
      y: -100,
      z: 1440,
    },
    {
      name: "win_1_6",
      x: -240,
      y: -100,
      z: -400,
    },
    {
      name: "win_1_7",
      x: -240,
      y: -100,
      z: 60,
    },
    {
      name: "win_1_8",
      x: -240,
      y: -100,
      z: 520,
    },
    {
      name: "win_1_9",
      x: -240,
      y: -100,
      z: 980,
    },
    {
      name: "win_1_10",
      x: -240,
      y: -100,
      z: 1440,
    },
  ];
  const windsList = createList6.map((item, index) => {
    return {
      name: item.name,
      position: {
        x: item.x,
        y: item.y,
        z: item.z,
      },
      rotation: {
        x: index < 5 ? 0 : -3,
        y: 0,
        z: index < 5 ? 0 : -3,
      },
    };
  });
  console.log(windsList);
  this.openWinds = function () {
    var a = this,
      b = windsList;
    0 >= a.winds.length &&
      $.each(b, function (b, d) {
        a.createWind(d.position, d.name, d.rotation);
      });
    $.each(a.winds, function (a, b) {
      b.visible = !0;
    });
  };
  this.closeWinds = function () {
    0 < this.winds.length &&
      $.each(this.winds, function (a, b) {
        b.visible = !1;
      });
  };
  this.hiddenIngWinds = function () {
    var a = this;
    if (0 < a.winds.length) {
      var b = null;
      b =
        a.winds[0].material.materials && a.winds[0].material.materials[0]
          ? a.winds[0].material.materials[0]
          : a.winds[0].material;
      new TWEEN.Tween(b)
        .to(
          {
            opacity: 0,
          },
          4e3
        )
        .onUpdate(function () {
          var b = this;
          $.each(a.winds, function (a, c) {
            c.material.materials
              ? $.each(c.material.materials, function (a, c) {
                  c.opacity = b.opacity;
                })
              : (c.material.opacity = b.opacity);
          });
        })
        .onComplete(function () {
          setTimeout(function () {
            $.each(a.winds, function (a, b) {
              b.visible = !1;
              b.material.materials
                ? $.each(b.material.materials, function (a, b) {
                    b.opacity = 1;
                  })
                : (b.material.opacity = 1);
            });
          }, 500);
        })
        .start();
    }
  };
  this.winds = [];
  this.windsISOPEN = !1;
  this.createWind = function (a, b, c) {
    a = tl3DCoreObj.createObjByJson({
      show: !0,
      uuid: "",
      name: b,
      objType: "flowTube",
      points: [
        {
          x: 0,
          y: 650,
          z: 0,
        },
        {
          x: 100,
          y: 500,
          z: 0,
        },
        {
          x: 450,
          y: 400,
          z: 0,
        },
      ],
      position: a,
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      rotation: [
        {
          direction: "x",
          degree: c.x,
        },
        {
          direction: "y",
          degree: c.y,
        },
        {
          direction: "z",
          degree: c.z,
        },
      ],
      style: {
        skinColor: 16772846,
        imgurl: "img/3dImg/right1.png",
        opacity: 1,
        canvasSkin: {
          cwidth: 1024,
          cheight: 128,
          cwNub: 8,
          chNub: 2,
          cMarginW: 0.2,
          cMarginH: 0.2,
          speed: 8,
          fps: 40,
          direction: "w",
          forward: "f",
          side: 1,
          run: !0,
          bgcolor: "rgba(0, 0, 0, 0.008)",
        },
      },
      segments: 16,
      radialSegments: 2,
      closed: !1,
      radius: 80,
      showSortNub: 196,
      customType1: "",
      customType2: "",
      animation: null,
      dbclickEvents: null,
      BindDevId: null,
      BindDevName: null,
      devInfo: null,
      BindMeteId: null,
      BindMeteName: null,
    });
    tl3DCoreObj.addObject(a);
    this.winds.push(a);
  };
  this.DoorAccessControls = function () {
    //门禁系统
    $("#toolbar").hide();
    layer.open({
      title: "门禁控制",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:200px;min-height:150px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr>
            <td style="text-align:center;width:80px;">门</td>
            <td style="text-align:center;width:100px;">操作</td>
          </tr>
          <tr>
            <td style="text-align:center;;">左门</td>
            <td style="text-align:center;">
              <button onclick="tl3dCoreBusiness.changeCameraPosition({x: 456, y: 564, z: -1052},{x: 449, y: -188, z: -155},1000)">定位</button>
            </td>
          </tr>
          <tr>
            <td style="text-align:center;">中门</td>
            <td style="text-align:center;">
              <button onclick="tl3dCoreBusiness.changeCameraPosition({x: -156, y: 417, z: -956},{x: -85, y: -176, z: -150},1000)">定位</button>
            </td>
          </tr>
          <tr>
            <td style="text-align:center;">右门</td>
            <td style="text-align:center;">
              <button onclick="tl3dCoreBusiness.changeCameraPosition({x: -763, y: 382, z: -929},{x: -693, y: -211, z: -122},1000)">定位</button>
            </td>
          </tr>
        </table>
      </div>`,
      btn: !1,
      btnAlign: "c",
      shade: 0,
      end: function () {
        $("#toolbar").show();
      },
    });
  };
  this.ctrlDoor = function (a) {
    0 <= a.name.indexOf("doorLeft_")
      ? this.openLeftDoor(a, null, "open")
      : this.openRightDoor(a, null, "open");
  };
  this.openRightDoor = function (a, b, c) {
    var d = "close",
      e = null;
    if (null != a.doorState && "undefined" != typeof a.doorState)
      (d = a.doorState), (e = a.parent);
    else {
      a.oldPosition = {
        x: a.position.x,
        y: a.position.y,
        z: a.position.z,
      };
      a.doorState = "close";
      var f = a.parent;
      e = new THREE.Object3D();
      e.position.set(
        a.position.x - a.geometry.parameters.width / 2,
        a.position.y,
        a.position.z
      );
      a.position.set(a.geometry.parameters.width / 2, 0, 0);
      e.add(a);
      f.add(e);
    }
    if ("undefined" == typeof c || null == c || "" == c)
      a.doorState = "close" == d ? "open" : "close";
    else {
      if (c == a.doorState) {
        null != b && b();
        return;
      }
      a.doorState = c;
    }
    new TWEEN.Tween(e.rotation)
      .to(
        {
          y: "open" == a.doorState ? 0.5 * Math.PI : 0 * Math.PI,
        },
        3e3
      )
      .easing(TWEEN.Easing.Elastic.Out)
      .onComplete(function () {
        null != b && b();
      })
      .start();
  };
  this.openLeftDoor = function (a, b, c) {
    var d = "close",
      e = null;
    if (null != a.doorState && "undefined" != typeof a.doorState)
      (d = a.doorState), (e = a.parent);
    else {
      a.oldPosition = {
        x: a.position.x,
        y: a.position.y,
        z: a.position.z,
      };
      a.doorState = "close";
      var f = a.parent;
      e = new THREE.Object3D();
      e.position.set(
        a.position.x + a.geometry.parameters.width / 2,
        a.position.y,
        a.position.z
      );
      a.position.set(-a.geometry.parameters.width / 2, 0, 0);
      e.add(a);
      f.add(e);
    }
    if ("undefined" == typeof c || null == c || "" == c)
      a.doorState = "close" == d ? "open" : "close";
    else {
      if (c == a.doorState) {
        null != b && b();
        return;
      }
      a.doorState = c;
    }
    new TWEEN.Tween(e.rotation)
      .to(
        {
          y: "open" == a.doorState ? -0.5 * Math.PI : 0 * Math.PI,
        },
        3e3
      )
      .easing(TWEEN.Easing.Elastic.Out)
      .onComplete(function () {
        null != b && b();
      })
      .start();
  };
  this.ctrlDoorFailed = function (a) {
    this.flashObj(a);
    layer.msg("门禁操作失败");
  };
  this.airConditionerCtls = function () {
    //空调控制
    var a = this;
    $("#toolbar").hide();
    layer.open({
      title: "空调控制",
      type: 1,
      offset: "lt",
      content: `<div style="padding: 10px;width:300px;min-height:120px;background-color:rgba(255,255,255,0.4);">
        <table class="table">
          <tr>
            <td style="text-align:center;width:80px;">空调</td>
            <td style="text-align:center;width:200px;">操作</td>
          </tr>
          <tr>
            <td style="text-align:left;width:80px;">立柜空调</td>
            <td style="text-align:center;">
              <button id="LGAC_btn1" onclick="tl3dCoreBusiness.changeCameraPosition({x: -98, y: 356, z: 407+modelParameter.Cabinet_Air_Conditioner_Z},{x: -75, y: 121, z: 762+modelParameter.Cabinet_Air_Conditioner_Z},1000)">定位</button>
              <button id="LGAC_btn2" onclick="tl3dCoreBusiness.openLSAirconditioner(\'aircondition_57\')">开启</button>
              <button id="LGAC_btn3" onclick="tl3dCoreBusiness.closeLSAirconditioner(\'aircondition_57\')">关闭</button>
            </td>
          </tr>
        </table>
      </div>`,
      btn: !1,
      btnAlign: "c",
      shade: 0,
      end: function () {
        $("#toolbar").show();
        a.hideCenterAirConditioner();
        a.hideLSAirconditioner();
      },
    });
  };
  this.LGAirConditions = [];
  this.openLSAirconditioner = function (a) {
    var b = null,
      c = tl3DCoreObj.commonFunc.findObject(a);
    this.LGAirConditions &&
      0 < this.LGAirConditions.length &&
      $.each(this.LGAirConditions, function (c, e) {
        e.name == a + "_wind_1" && (b = e);
      });
    null == b &&
      ((c = tl3DCoreObj.createObjByJson({
        show: !0,
        uuid: "",
        name: a + "_wind_1",
        objType: "flowTube",
        points: [
          {
            x: 0,
            y: 200,
            z: 0,
          },
          {
            x: 0,
            y: 150,
            z: -60,
          },
          {
            x: 0,
            y: 150,
            z: -200,
          },
        ],
        position: {
          x: c.position.x,
          y: c.position.y - 122,
          z: c.position.z - 13,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
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
        style: {
          skinColor: 16772846,
          imgurl: "img/3dImg/right2wind.png",
          opacity: 1,
          canvasSkin: {
            cwidth: 1024,
            cheight: 128,
            cwNub: 16,
            chNub: 8,
            cMarginW: 0.2,
            cMarginH: 0.2,
            speed: 8,
            fps: 40,
            direction: "w",
            forward: "f",
            side: 1,
            run: !0,
            bgcolor: "rgba(255, 227, 248, 0.02)",
          },
        },
        segments: 64,
        radialSegments: 2,
        closed: !1,
        radius: 20,
        showSortNub: 196,
        customType1: "",
        customType2: "",
        animation: null,
        dbclickEvents: null,
        BindDevId: null,
        BindDevName: null,
        devInfo: null,
        BindMeteId: null,
        BindMeteName: null,
      })),
      tl3DCoreObj.addObject(c),
      this.LGAirConditions.push(c),
      (b = c));
    b && (b.visible = !0);
  };
  this.closeLSAirconditioner = function (a, b) {
    this.LGAirConditions &&
      0 < this.LGAirConditions.length &&
      $.each(this.LGAirConditions, function (c, d) {
        d.name == a + "_wind_1" && (d.visible = !1);
        b && (d.visible = !1);
      });
  };
  this.hideLSAirconditioner = function () {
    this.LGAirConditions &&
      0 < this.LGAirConditions.length &&
      $.each(this.LGAirConditions, function (a, b) {
        b.visible = !1;
      });
  };
  this.centerAirConditionerDevs = [];
  this.showCenterAirConditioner = function () {
    var a = this;
    0 >= a.centerAirConditionerDevs.length &&
      $.each(
        [
          {
            show: !0,
            uuid: "",
            name: "center_air_conditioning_2_2",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -80.785,
            y: 370.664,
            z: -456.654,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_2_3",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -80.785,
            y: 370.664,
            z: 518.684,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_2_1",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -80.785,
            y: 370.664,
            z: 48.478,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_1_1",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -605.659,
            y: 370.664,
            z: 48.478,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_1_2",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -605.659,
            y: 370.664,
            z: -467.654,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_1_3",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: -605.659,
            y: 370.664,
            z: 553.501,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_3_1",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: 442.379,
            y: 370.664,
            z: 48.478,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_3_2",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: 442.379,
            y: 370.664,
            z: -461.396,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_3_3",
            objType: "cube2",
            length: 78,
            width: 78,
            height: 40,
            x: 442.379,
            y: 370.664,
            z: 526.744,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0,
                },
                skin_down: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 1,
                  opacity: 0.3,
                },
              },
            },
            showSortNub: 7,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "cacWind_1",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 0,
                z: 1500,
              },
              {
                x: 0,
                y: 0,
                z: 0,
              },
            ],
            position: {
              x: -70.779,
              y: 419.052,
              z: -751.968,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 32,
                chNub: 8,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 3,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 2,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 4,
            radialSegments: 4,
            closed: !1,
            radius: 40,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_3",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 0,
                z: 1500,
              },
              {
                x: 0,
                y: 0,
                z: 0,
              },
            ],
            position: {
              x: 443.302,
              y: 419.052,
              z: -751.968,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 32,
                chNub: 8,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 3,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 2,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 4,
            radialSegments: 4,
            closed: !1,
            radius: 40,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_2",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 0,
                z: 1500,
              },
              {
                x: 0,
                y: 0,
                z: 0,
              },
            ],
            position: {
              x: -604.569,
              y: 419.052,
              z: -751.968,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 32,
                chNub: 8,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 3,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 2,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 4,
            radialSegments: 4,
            closed: !1,
            radius: 40,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "center_air_conditioning_1",
            objType: "cube2",
            length: 80,
            width: 1500,
            height: 80,
            x: 444.17,
            y: 426.022,
            z: 0,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.4,
                },
                skin_down: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
              },
            },
            showSortNub: 196,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_2",
            objType: "cube2",
            length: 80,
            width: 1500,
            height: 80,
            x: -76.111,
            y: 419.507,
            z: 0,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.4,
                },
                skin_down: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
              },
            },
            showSortNub: 196,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "center_air_conditioning_3",
            objType: "cube2",
            length: 80,
            width: 1500,
            height: 80,
            x: -604.307,
            y: 426.022,
            z: 0,
            style: {
              skinColor: 16777215,
              skin: {
                skin_up: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.4,
                },
                skin_down: {
                  skinColor: 7895160,
                  side: 0,
                  opacity: 0.3,
                },
                skin_fore: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_behind: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0.3,
                },
                skin_left: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
                skin_right: {
                  skinColor: 16777215,
                  side: 0,
                  opacity: 0,
                },
              },
            },
            showSortNub: 196,
            customType1: "",
            customType2: "",
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
            show: !0,
            uuid: "",
            name: "cacWind_1_1",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -51.031,
              y: 182.086,
              z: -450.709,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_1_3",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -51.031,
              y: 182.086,
              z: 518.391,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_1_2",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -51.031,
              y: 182.086,
              z: 56.652,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_3_1",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -596.596,
              y: 182.086,
              z: -450.709,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_3_2",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -596.596,
              y: 182.086,
              z: 69.057,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_3_3",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: -596.596,
              y: 182.086,
              z: 571.083,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_2_1",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: 449.11,
              y: 182.086,
              z: -450.709,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_2_2",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: 449.11,
              y: 182.086,
              z: 58.707,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "../../img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
          {
            show: !0,
            uuid: "",
            name: "cacWind_2_3",
            objType: "flowTube",
            points: [
              {
                x: 0,
                y: 200,
                z: 0,
              },
              {
                x: 50,
                y: 50,
                z: 0,
              },
              {
                x: 150,
                y: -50,
                z: null,
              },
            ],
            position: {
              x: 449.11,
              y: 182.086,
              z: 550.649,
            },
            scale: {
              x: 1,
              y: 1,
              z: 1,
            },
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
            style: {
              skinColor: 16772846,
              imgurl: "../../img/3dImg/right2wind.png",
              opacity: 1,
              canvasSkin: {
                cwidth: 1024,
                cheight: 128,
                cwNub: 8,
                chNub: 2,
                cMarginW: 0.2,
                cMarginH: 0.2,
                speed: 8,
                fps: 40,
                direction: "w",
                forward: "f",
                side: 1,
                run: !0,
                bgcolor: "rgba(4, 4, 4, 0.098)",
              },
            },
            segments: 6,
            radialSegments: 2,
            closed: !1,
            radius: 20,
            showSortNub: 16,
            customType1: "",
            customType2: "",
            animation: null,
            dbclickEvents: null,
            BindDevId: null,
            BindDevName: null,
            devInfo: null,
            BindMeteId: null,
            BindMeteName: null,
          },
        ],
        function (b, c) {
          b = tl3DCoreObj.createObjByJson(c);
          tl3DCoreObj.addObject(b);
          a.centerAirConditionerDevs.push(b);
        }
      );
    0 < a.centerAirConditionerDevs.length &&
      $.each(a.centerAirConditionerDevs, function (a, c) {
        c.visible = !0;
      });
    a.openCenterAirConditioner();
  };
  this.hideCenterAirConditioner = function () {
    0 < this.centerAirConditionerDevs.length &&
      $.each(this.centerAirConditionerDevs, function (a, b) {
        b.visible = !1;
      });
  };
  this.openCenterAirConditioner = function () {
    this.showCenterAirConditioner();
    0 < this.centerAirConditionerDevs.length &&
      $.each(this.centerAirConditionerDevs, function (a, b) {
        0 <= b.name.indexOf("cacWind_") && (b.visible = !0);
      });
  };
  this.closeCenterAirConditioner = function () {
    var a = this;
    $("#centerAC_btn1").attr("disabled", !0);
    $("#centerAC_btn2").attr("disabled", !0);
    $("#centerAC_btn3").attr("disabled", !0);
    0 < a.centerAirConditionerDevs.length &&
      $.each(a.centerAirConditionerDevs, function (a, c) {
        0 <= c.name.indexOf("cacWind_") && (c.visible = !1);
      });
    setTimeout(function () {
      a.hideCenterAirConditioner();
      $("#centerAC_btn1").attr("disabled", !1);
      $("#centerAC_btn2").attr("disabled", !1);
      $("#centerAC_btn3").attr("disabled", !1);
    }, 2e3);
  };
  this.alarmIntervals = [];
  this.alarmObj = function (a, b, c) {
    var d = !0;
    0 < this.alarmIntervals.length &&
      $.each(this.alarmIntervals, function (a, b) {
        c == b.alarmId && (d = !1);
      });
    if (d) {
      var e = setInterval(function () {
        a && a.alarmColor && a.alarmColor == b
          ? (tl3DCoreObj.commonFunc.setSkinColorByObj(a, 0), (a.alarmColor = 0))
          : (tl3DCoreObj.commonFunc.setSkinColorByObj(a, b),
            (a.alarmColor = b));
      }, 400);
      this.alarmIntervals.push({
        alarmobjname: a.name,
        alarmInterval: e,
        alarmId: c,
      });
    }
  };
  this.cleanAlarm = function (a, b) {
    var c = -1;
    0 < this.alarmIntervals.length &&
      $.each(this.alarmIntervals, function (d, e) {
        b == e.alarmId &&
          ((c = d),
          tl3DCoreObj.commonFunc.setSkinColorByObj(a, 0),
          (a.alarmColor = 0),
          clearInterval(e.alarmInterval));
      });
    0 <= c && this.alarmIntervals.splice(c, 1);
  };
  this.alarmMonitorIntervals = null;
  this.alarmMonitorBackgroundColorOprity = 0;
  this.alarmMonitorBackgroundColorOprityOP = 1;
  this.alarmMonitorCtrl = function () {
    //启动告警监控
    var a = this;
    a.changeCameraPosition(
      {
        x: 430,
        y: 1449,
        z: -2557,
      },
      {
        x: 8,
        y: 234,
        z: 814,
      },
      1e3
    );
    $("#btn_alarmCtrl").css("border-radius", "25px 25px 25px 25px");
    $("#btn_alarmCtrl").attr("data_state") &&
    "runing" == $("#btn_alarmCtrl").attr("data_state")
      ? (layer.msg("告警监控已关闭"),
        $("#btn_alarmCtrl").attr("data_state", "close"),
        $("#btn_alarmCtrl").css("background", "rgba(255, 255, 0, 0)"),
        $("#btn_alarmCtrl").attr("title", "启动告警监控"),
        a.alarmMonitorIntervals && clearInterval(a.alarmMonitorIntervals),
        a.closeAlarmMonitor())
      : (a.startAlarmMonitor(),
        (a.alarmMonitorBackgroundColorOprity = 0),
        $("#btn_alarmCtrl").attr("data_state", "runing"),
        $("#btn_alarmCtrl").attr("title", "关闭告警监控"),
        layer.msg("告警监控已开启"),
        a.alarmMonitorIntervals && clearInterval(a.alarmMonitorIntervals),
        (a.alarmMonitorIntervals = setInterval(function () {
          a.alarmMonitorBackgroundColorOprity =
            1 == a.alarmMonitorBackgroundColorOprityOP
              ? a.alarmMonitorBackgroundColorOprity + 0.05
              : a.alarmMonitorBackgroundColorOprity - 0.05;
          1 <= a.alarmMonitorBackgroundColorOprity
            ? (a.alarmMonitorBackgroundColorOprityOP = -1)
            : 0 >= a.alarmMonitorBackgroundColorOprity &&
              (a.alarmMonitorBackgroundColorOprityOP = 1);
          $("#btn_alarmCtrl").css(
            "background",
            "rgba(255, 255, 0, " + a.alarmMonitorBackgroundColorOprity + ")"
          );
        }, 50)));
  };
  this.alarmObjList = [];
  this.getAlarmObjList = function () {
    return [
      {
        alarmObjName: "mjj_3_6",
        AlarmColor: 16711680,
        alarmId: "mjj_3_6",
        alarmState: "start",
      },
      {
        alarmObjName: "smokeSensor_1",
        AlarmColor: 16711680,
        alarmId: "smokeSensor_1",
        alarmState: "start",
      },
      {
        alarmObjName: "mjj_1_1",
        AlarmColor: 16711680,
        alarmId: "mjj_1_1",
        alarmState: "start",
      },
      {
        alarmObjName: "mjj_5_3",
        AlarmColor: 16711680,
        alarmId: "mjj_5_3",
        alarmState: "start",
      },
    ];
  };
  this.startAlarmMonitor = function () {
    var a = this;
    a.closeAlarmMonitor();
    this.alarmObjList = a.getAlarmObjList();
    a.alarmObjList &&
      0 < a.alarmObjList.length &&
      $.each(a.alarmObjList, function (b, c) {
        if ((b = tl3DCoreObj.commonFunc.findObject(c.alarmObjName)))
          (c.tl3dObj = b),
            "start" == c.alarmState &&
              (0 <= b.name.indexOf("smokeSensor_")
                ? a.alarmSmokeSensor(b)
                : a.alarmObj(b, c.AlarmColor, c.alarmId));
      });
  };
  this.closeAlarmMonitor = function () {
    var a = this;
    a.alarmObjList &&
      0 < a.alarmObjList.length &&
      $.each(a.alarmObjList, function (b, c) {
        0 <= c.tl3dObj.name.indexOf("smokeSensor_")
          ? a.clearSmokeAlarm(c.tl3dObj)
          : a.cleanAlarm(c.tl3dObj, c.alarmId);
      });
  };
  this.closeAlarm = function (a) {
    var b = this;
    b.alarmObjList &&
      0 < b.alarmObjList.length &&
      $.each(b.alarmObjList, function (c, d) {
        d.alarmId == a &&
          ((d.alarmState = "end"),
          0 <= d.tl3dObj.name.indexOf("smokeSensor_")
            ? b.clearSmokeAlarm(d.tl3dObj)
            : b.cleanAlarm(d.tl3dObj, d.alarmId));
      });
  };
  this.showAlarmDetail = function (a) {
    console.log(a);
    if ("runing" == $("#btn_alarmCtrl").attr("data_state")) {
      var b = this.getAlarmObjList(),
        c = !1;
      $.each(b, function (b, e) {
        e.alarmObjName == a.name && (c = !0);
      });
      c &&
        layer.open({
          type: 1,
          title: a.name + "-告警详情",
          area: ["500px", "500px"],
          maxmin: !0,
          content: "此处自定义显示告警详情",
        });
    }
  };
  this.changeCameraPosition = function (a, b, c, d) {
    new TWEEN.Tween(tl3DCoreObj.camera.position)
      .to(a, c)
      .onComplete(function () {
        d && d();
      })
      .start();
    new TWEEN.Tween(tl3DCoreObj.controls.target)
      .to(b, c)
      .onComplete(function () {
        d && d();
      })
      .start();
  };
  this.marks = [];
  this.addMark = function (a) {
    a = tl3DCoreObj.createObjByJson({
      name: "picIdentification_" + this.marks.length,
      objType: "picIdentification",
      size: {
        x: 40,
        y: 80,
      },
      position: {
        x: a.x,
        y: a.y,
        z: a.z,
      },
      imgurl: "../../img/3dImg/mark.png",
      showSortNub: 4,
    });
    tl3DCoreObj.addObject(a);
    this.marks.push(a);
  };
  this.removeMark = function () {
    this.marks &&
      0 < this.marks.length &&
      ($.each(this.marks, function (a, b) {
        tl3DCoreObj.scene.remove(b);
      }),
      (this.marks = []));
  };
  this.flashObj = function (a, b) {
    for (var c = 0, d = 0; 8 > d; d++)
      setTimeout(function () {
        b
          ? tl3DCoreObj.commonFunc.setSkinColorByObj(a, 0 == c % 2 ? b : 0)
          : tl3DCoreObj.commonFunc.setSkinColorByObj(
              a,
              0 == c % 2 ? 16711680 : 0
            );
        c++;
      }, 400 * d);
  };

  // 展示档案架上详细档案
  this.showLattice = function (a, b) {
    console.log("展示档案盒档案", b);
    b = b[a.name];
    // var bookName = '档案一'
    // for (var c = "", d = 0; 15 > d; d++) d < b.length && (c +=
    //   // "<div class='boxParentContent'><div class='boxFile'>档案一</div><div class='deleteBoxFile'><img src='../img/delete.png' title='下架' style='width:22px;height:22px;' /></div></div>"
    //   `<div class='boxParentContent'><div class='boxFile'>${bookName}</div><div class='deleteBoxFile'><img src='../img/delete.png' title='下架' style='width:22px;height:22px;' /></div></div>`
    // );
    var bookList = "";
    for (var i = 0; i < b.length; i++) {
      bookList += `<div class='boxParentContent'>
        <div class='boxFile'>
          <div class="box" style="display:none;">${JSON.stringify(
            b[i].PDF
          )}</div>
          ${b[i].title}
        </div>
        <div class='deleteBoxFile'>
          <img src='../img/delete.png' title='下架' style='width:22px;height:22px;' />
        </div>
      </div>`;
    }
    layer.open({
      type: 1,
      title: !1,
      skin: "layui-layer-rim",
      area: ["1040px", "240px"],
      content: `<div style="width:100%;height:240px;background-color:rgba(255,255,255,0.7);">
        ${bookList}
        <div class='upBox'>
          <img title='上架' src='../img/add.png' style='width:30px;height:30px;margin-top:75px;margin-left:10px;' />
        </div>
      </div>`,
    });
    $(".boxFile").click(function () {
      var JsonVal = $(this).find(".box").text();
      console.log(JsonVal);
      var htmlVal = "";
      JSON.parse(JsonVal).forEach((item) => {
        htmlVal += `<li>
          <a style="text-decoration:none;color:#82dbff;text-align:center;height:30px;border:2px solid #210e05;background:#8d5335;margin-bottom:10px;display:flex;align-items:center;justify-content:center;" href="${item.url}" target="_blank">${item.name}</a>
        </li>`;
      });
      console.log(htmlVal);
      layer.open({
        type: 1,
        title: "选择PDF",
        skin: "layui-layer-rim",
        area: ["360px", "340px"],
        content: `<div>
          <ul style="list-style:none;padding:0 10px;">
            ${htmlVal}
          </ul>
        </div>`,
      });
    });
    $(".deleteBoxFile").click(function () {
      layer.msg("下架接口");
      console.log(this.parentNode);
      this.parentNode.remove();
      // $(".boxParentContent").remove()
    });
    $(".upBox").click(function () {
      layer.open({
        type: 1,
        skin: "layui-layer-molv",
        title: "上架档案",
        area: ["340px", "340px"],
        content: `<table class="table">
          <tr><td>档案名称:<input type="text"  name="DAname"></input></td></td></td><td></td></tr>
          <tr><td>档案盒：<input type="text"  name="DAbox"></input></td><td></td></tr>
          <tr><td>文件地址：<input type="text"  name="DAdress"></input></td><td></td></tr>
          <tr><td>责任人：<input type="text"  name="DApeople"></input></td><td></td></tr>
          <tr><td>备注：<input type="text"  name="DAnote"></input></td><td></td></tr>
        </table>`,
        btn: ["确定", "取消"],
      });
      // layer.prompt({title: '上架档案', formType: 1}, function(pass, index){
      //   layer.close(index);
      //   layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text, index){
      //     layer.close(index);
      //     layer.msg('演示完毕！您的口令：'+ pass +'<br>您最后写下了：'+text);
      //   });
      // });
    });
  };
}
