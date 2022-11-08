var tl3dCoreObj;
var tl3dCoreBusiness;

function InitPage(_1) {
	tl3dCoreObj = new tl3DCore();
	tl3dCoreBusiness = new TL3DCoreBusiness();
	var initOption = {
		antialias: true,
		loadSyn: false,
		showHelpGrid: true,//地面格栅
		clearCoolr: 8995,
		clearColorOp: 0,
	};
  var Aobjects = tl3dCoreBusiness.tl3ddata();
  
  var arr = Aobjects.objects.concat(tempObj)
  Aobjects.objects = arr
	Aobjects.imageList = [];
	imageUUIDList = [];

	function getImageList(obj) {
		if (obj && typeof(obj) == "object") {
			$.each(obj, function(_2, _0) {
				if (_0 && _0.imgurl) {
					var imgObj = {};
					imgObj.uuid = _0.imgurl;
					imgObj.imgurl = _0.imgurl;
					if ($.inArray(imgObj.uuid, imageUUIDList) < 0) {
						imageUUIDList.push(imgObj.uuid);
						Aobjects.imageList.push(imgObj)
					}
				}
				getImageList(_0)
			})
		}
	}
	getImageList(Aobjects.objects);
	if (_1 != null && typeof(_1) != "undefined" && _1 == 0) {
		$("#canvas-frame").height($(document).height())
	}
	tl3dCoreObj.inittl3DCore("canvas-frame", initOption, Aobjects);
	tl3dCoreObj.start()
};