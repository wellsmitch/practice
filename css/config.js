var globalMapConfig = {
    "projection": "EPSG:4326",
    "localProjection": "EPSG:4526",
    "serverIp": "10.0.0.123",
    "serverPort": "6163",
    "srsCnName": "高斯大地坐标系_中国2000_38带3_北2",
    "viewCenter": [38441428.42786, 3828000.39275],
    "projectionExtent": [38446904.8127, 3820993.9438, 38489800.043, 3871604.8417],
    "minX": 38379906.892075,
    "minY": 3791299.29652517,
    "maxX": 38520881.804775,
    "maxY": 3874969.75312517,
    "maxResolution": 13758.333333333334,
    "zoomToExtent": [38358233.33, 3742266.67, 38523333.33, 3907366.67],
    "initZoom": 6,
    "maxZoom": 18,
    "minZoom": 5,
    "analysisRequest": {
        "url": "http://10.0.0.123:6163/lnd/rest/comms/AnalysisClipCondition"
    },
    "areaRequest": {
        "url": "http://10.0.0.123:6163/lnd/rest/comms/Buffer"
    }
};
var layerMap = {
    "YSYD": {
        "type": "wms",
        "name": "预审用地",
        "docName": "YSYD",
        "layer": "LYSYD410100YSYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:YSYD)",
        "updateStrClassInfo": "专题:YSYD",
        "strTbl": "YSYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YSYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,mpArea",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "YSYD"
    },
    "YSSH": {
        "type": "wms",
        "name": "预审审核",
        "layer": "LYSSH410100YDYSSH",
        "docName": "YSSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:YSSH)",
        "updateStrClassInfo": "专题:YSSH",
        "strTbl": "YSSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YSSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,mpArea",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "YSSH"
    },
    "YDYS": {
        "type": "wms",
        "name": "用地预审",
        "layer": "LYDYS410100YDYS",
        "docName": "YDYS",
        "layerIndex": 0,
        "strClassInfo": "(专题:YDYS)",
        "updateStrClassInfo": "专题:YDYS",
        "strTbl": "YDYSQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YDYS/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "图形id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,周长",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "YDYS"
    },
    "BPYD": {
        "type": "wms",
        "name": "报批用地",
        "layer": "LBPYD410100BPYD",
        "docName": "BPYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:BPYD)",
        "updateStrClassInfo": "专题:BPYD",
        "strTbl": "BPYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/BPYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "图形id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,周长",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "BPYD"
    },
    "BPSH": {
        "type": "wms",
        "name": "报批审核",
        "layer": "LBPSH410100JSYDBPSH",
        "docName": "BPSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:BPSH)",
        "updateStrClassInfo": "专题:BPSH",
        "strTbl": "BPSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/BPSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "图形id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,周长",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "BPSH"
    },
    "JSYD": {
        "type": "wms",
        "name": "用地报批",
        "layer": "LJSYD410100JSYD",
        "busiType": "03",
        "layerStatus": "3",
        "docName": "JSYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:JSYD)",
        "updateStrClassInfo": "专题:JSYD",
        "strTbl": "JSYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/JSYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "图形id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "area": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,周长",
                "title": "周长",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "JSYD"
    },
    "CBYD": {
        "type": "wms",
        "name": "储备用地",
        "docName": "CBYD",
        "busiType": "05",
        "layerStatus": "1",
        "layer": "LCBYD410100CBYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:CBYD)",
        "strTbl": "CBYDTJ",
        "updateStrClassInfo": "专题:CBYD",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/CBYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID,项目_GUID",
                "title": "项目GUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,电子监管号",
                "title": "电子监管号",
                "show": true
            },
            "location": {
                "name": "ZDZL,宗地坐落",
                "title": "宗地坐落",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,宗地面积",
                "title": "宗地面积",
                "show": true
            },
            "rksj": {
                "name": "RKSJ,入库时间",
                "title": "入库时间",
                "show": true
            },
            "mpArea": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": true
            },
            "area": {
                "name": "mpArea,面积",
                "title": "面积",
                "show": false
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "周长",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "CBYD"
    },
    "CBSH": {
        "type": "wms",
        "name": "储备审核",
        "docName": "CBSH",
        "busiType": "05",
        "layerStatus": "2",
        "layer": "LCBSH410100TDCBSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:CBSH)",
        "updateStrClassInfo": "专题:CBSH",
        "strTbl": "CBSHTJ",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/CBSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID,项目_GUID",
                "title": "项目GUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,电子监管号",
                "title": "电子监管号",
                "show": true
            },
            "location": {
                "name": "ZDZL,宗地坐落,LOCATION",
                "title": "宗地坐落",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,宗地面积",
                "title": "宗地面积",
                "show": false
            },
            "rksj": {
                "name": "RKSJ,入库时间",
                "title": "入库时间",
                "show": true
            },
            "area": {
                "name": "mpArea,面积,ZDMJ,AREA",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "周长",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "CBSH"
    },
    "TDCB": {
        "type": "wms",
        "name": "土地储备",
        "docName": "TDCB",
        "busiType": "05",
        "layerStatus": "3",
        "layer": "LTDCB410100TDCB",
        "layerIndex": 0,
        "strClassInfo": "(专题:TDCB)",
        "strTbl": "TDCBTJ",
        "updateStrClassInfo": "专题:TDCB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/TDCB/WMSServ",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID,项目_GUID",
                "title": "项目GUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,电子监管号",
                "title": "电子监管号",
                "show": true
            },
            "location": {
                "name": "ZDZL,宗地坐落,LOCATION",
                "title": "宗地坐落",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,宗地面积",
                "title": "宗地面积",
                "show": true
            },
            "rksj": {
                "name": "RKSJ,入库时间",
                "title": "入库时间",
                "show": true
            },
            "area": {
                "name": "mpArea,面积,AREA",
                "title": "面积",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "周长",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": false
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "TDCB"
    },
    "GDYD": {
        "type": "wms",
        "name": "供地用地",
        "docName": "GDYD",
        "busiType": "06",
        "layerStatus": "1",
        "layer": "LGDYD410100GDYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDYD)",
        "updateStrClassInfo": "专题:GDYD",
        "strTbl": "GDYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,土地用途",
                "title": "土地用途",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": false
            },
            "area": {
                "name": "AREA,面积",
                "title": "面积",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "GDYD"
    },
    "GDSH": {
        "type": "wms",
        "name": "供地审核",
        "docName": "GDSH",
        "busiType": "06",
        "layerStatus": "2",
        "layer": "LGDSH410100GDXMSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDSH)",
        "updateStrClassInfo": "专题:GDSH",
        "strTbl": "GDSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,土地用途",
                "title": "土地用途",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": false
            },
            "area": {
                "name": "AREA,面积",
                "title": "面积",
                "show": true
            }
        },
        "simpleName": "GDSH"
    },
    "GDXM": {
        "type": "wms",
        "name": "土地供应",
        "docName": "GDXM",
        "busiType": "06",
        "layerStatus": "3",
        "layer": "LGDXM410100GDXM",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDXM)",
        "updateStrClassInfo": "专题:GDXM",
        "strTbl": "GDXMQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDXM/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,地块编码",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,项目名称",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,批复文号",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,项目面积",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,土地用途",
                "title": "土地用途",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,状态",
                "title": "状态",
                "show": false
            },
            "area": {
                "name": "AREA,面积",
                "title": "面积",
                "show": true
            }
        },
        "simpleName": "GDXM"
    },
    "ZDJBXX": {
        "type": "wms",
        "name": "宗地",
        "docName": "QS4101002019ZDJBXX",
        "layer": "D410100QS2019KZDJBXX",
        "layerIndex": 0,
        "strClassInfo": "(专题:QS,年度:2019,比例尺:K)",
        "strTbl": "ZDXX",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/QS4101002019ZDJBXX/WMSServer",
        "properties": {
            "bdcdyh": {
                "name": "不动产单元号",
                "title": "不动产单元号",
                "show": true
            },
            "zongdicode": {
                "name": "宗地特征码",
                "title": "宗地特征码",
                "show": true
            },
            "syqlx": {
                "name": "所有权类型",
                "title": "所有权类型",
                "show": true
            },
            "mpArea": {
                "name": "宗地面积",
                "title": "宗地面积",
                "show": true
            },
            "mianjidw": {
                "name": "面积单位",
                "title": "面积单位",
                "show": true
            },
            "yongtu": {
                "name": "用途",
                "title": "用途",
                "show": true
            },
            "dengji": {
                "name": "等级",
                "title": "等级",
                "show": true
            },
            "jiage": {
                "name": "价格",
                "title": "价格",
                "show": true
            },
            "qllx": {
                "name": "权利类型",
                "title": "权利类型",
                "show": true
            },
            "qlxz": {
                "name": "权利性质",
                "title": "权利性质",
                "show": true
            },
            "qlsdfs": {
                "name": "权利设定方式",
                "title": "权利设定方式",
                "show": true
            },
            "rognjilv": {
                "name": "容积率",
                "title": "容积率",
                "show": true
            },
            "jianzhumd": {
                "name": "建筑密度",
                "title": "建筑密度",
                "show": true
            },
            "jianzhuxg": {
                "name": "建筑限高",
                "title": "建筑限高",
                "show": true
            },
            "EAST_TO": {
                "name": "东至",
                "title": "东至",
                "show": true
            },
            "SOUTH_TO": {
                "name": "南至",
                "title": "南至",
                "show": true
            },
            "WEST_TO": {
                "name": "西至",
                "title": "西至",
                "show": true
            },
            "NORTH_TO": {
                "name": "北至",
                "title": "北至",
                "show": true
            },
            "MAP_NUM": {
                "name": "图幅号",
                "title": "图幅号",
                "show": true
            },
            "dijihao": {
                "name": "地籍号",
                "title": "地籍号",
                "show": true
            },
            "danganhao": {
                "name": "档案号",
                "title": "档案号",
                "show": true
            },
            "beihzu": {
                "name": "备注",
                "title": "备注",
                "show": true
            },
            "STATUS": {
                "name": "状态",
                "title": "状态",
                "show": true
            },
            "quanliren": {
                "name": "权利人",
                "title": "权利人",
                "show": true
            },
            "qsdwmc": {
                "name": "权属单位名称",
                "title": "权属单位名称",
                "show": true
            },
            "yzdh": {
                "name": "原宗地号",
                "title": "原宗地号",
                "show": true
            },
            "ydjh": {
                "name": "原地籍号",
                "title": "原地籍号",
                "show": true
            },
            "jlsj": {
                "name": "建立时间",
                "title": "建立时间",
                "show": true
            },
            "txdz": {
                "name": "通讯地址",
                "title": "通讯地址",
                "show": true
            },
            "tuhao": {
                "name": "图号",
                "title": "图号",
                "show": true
            },
            "tudizh": {
                "name": "土地证号",
                "title": "土地证号",
                "show": true
            },
            "jsydghxkz": {
                "name": "建设用地规划许可证",
                "title": "建设用地规划许可证",
                "show": true
            },
            "jsgcghxkz": {
                "name": "建设工程规划许可证",
                "title": "建设工程规划许可证",
                "show": true
            },
            "jsgcsgxkz": {
                "name": "建筑工程施工许可证",
                "title": "建筑工程施工许可证",
                "show": true
            },
            "landCode": {
                "name": "LAND_CODE",
                "title": "地块代码",
                "show": true
            },
            "mappingId": {
                "name": "不动产单元号",
                "title": "项目GUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "项目名称",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "批复文号",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "项目面积",
                "show": true
            },
            "location": {
                "name": "LOCATION,坐落",
                "title": "位置",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "ZDJBXX"
    },
    "XZQH": {
        "type": "wmts",
        "name": "市级区划,县级区划",
        "layer": "INDEX2019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/INDEX2019G/WMTSServer"
    },
    "LW": {
        "type": "wmts",
        "name": "路网",
        "layer": "LW4101002017G",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/LW4101002017G/WMTSServer",
        "simpleName": "LW"
    },
    "TDXZ": {
        "type": "wmts",
        "name": "土地利用现状",
        "layer": "TDXZ4101012017G",
        "strClassInfo": "(专题:TDXZ,年度:2017,比例尺:G)",
        "strTbl": "NCTDLY_YJFL,NCTDLY_EJFL,FRDTDLY_YJFL,FRDTDLY_EJFL,NCTDLY_QSYJ,NCTDLY_QSEJ,GDPDMJHZ,KTZ,KTZHZ,JBNTBHKQKTJ,TDLYXZTB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101012017GTDLY/WMTSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,标识码",
                "title": "标识码",
                "show": true
            },
            "mappingId": {
                "name": "GUID,项目_GUID",
                "title": "项目GUID",
                "show": false
            },
            "ysdm": {
                "name": "要素代码",
                "title": "要素代码",
                "show": true
            },
            "tbybh": {
                "name": "图斑预编号",
                "title": "图斑预编号",
                "show": true
            },
            "tbbh": {
                "name": "图斑编号",
                "title": "图斑编号",
                "show": true
            },
            "dldm": {
                "name": "地类编码",
                "title": "地类编码",
                "show": true
            },
            "dlmc": {
                "name": "地类名称",
                "title": "地类名称",
                "show": true
            },
            "qsxz": {
                "name": "权属性质",
                "title": "权属性质",
                "show": true
            },
            "qsdwdm": {
                "name": "权属单位代码",
                "title": "权属单位代码",
                "show": true
            },
            "qsdwmc": {
                "name": "权属单位名称",
                "title": "权属单位名称",
                "show": true
            },
            "zldwdm": {
                "name": "座落单位代码",
                "title": "座落单位代码",
                "show": true
            },
            "zldwmc": {
                "name": "座落单位名称",
                "title": "座落单位名称",
                "show": true
            },
            "gdlx": {
                "name": "耕地类型",
                "title": "耕地类型",
                "show": true
            },
            "kclx": {
                "name": "扣除类型",
                "title": "扣除类型",
                "show": true
            },
            "dlbz": {
                "name": "地类备注",
                "title": "地类备注",
                "show": true
            },
            "gdpdj": {
                "name": "耕地坡度级",
                "title": "耕地坡度级",
                "show": true
            },
            "kcdldm": {
                "name": "扣除地类编码",
                "title": "扣除地类编码",
                "show": true
            },
            "kcdlxs": {
                "name": "扣除地类系数",
                "title": "扣除地类系数",
                "show": true
            },
            "xzdwmj": {
                "name": "线状地物面积",
                "title": "线状地物面积",
                "show": true
            },
            "lxdwmj": {
                "name": "零星地物面积",
                "title": "零星地物面积",
                "show": true
            },
            "kcdlmj": {
                "name": "扣除地类面积",
                "title": "扣除地类面积",
                "show": true
            },
            "tbdlmj": {
                "name": "图斑地类面积",
                "title": "图斑地类面积",
                "show": true
            },
            "pzwh": {
                "name": "批准文号",
                "title": "批准文号",
                "show": true
            },
            "bgjlh": {
                "name": "变更记录号",
                "title": "变更记录号",
                "show": true
            },
            "bgrq": {
                "name": "变更日期",
                "title": "变更日期",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "分析面积",
                "show": false
            }
        },
        "simpleName": "TDXZ"
    },
    "GFYX": {
        "type": "wmts",
        "name": "高分影像",
        "layer": "GFYX4101012019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/GFYX4101012019G/WMTSServer"
    },
    "DJQ": {
        "properties": {},
        "name": "地籍区",
        "simpleName": "DJQ",
        "type": "wms",
        "docName": "DJQ",
        "layer": "DJQ",
        "url": "http://10.0.0.112:6160/igs/rest/ogc/doc/DJQ/WMSServer"
    },
    "FZL2019": {
        "properties": {},
        "name": "热力图",
        "simpleName": "FZL2019",
        "type": "wtemp",
        "docName": "FZL2019",
        "layer": "FZL2019"
    },
    "FZL2019_CLUSTER": {
        "properties": {},
        "name": "聚类",
        "simpleName": "FZL2019_CLUSTER",
        "type": "wtemp",
        "docName": "FZL2019_CLUSTER",
        "layer": "FZL2019_CLUSTER"
    },
    "DJZQ": {
        "properties": {},
        "name": "地籍子区",
        "simpleName": "",
        "type": "wms",
        "docName": "DJZQ",
        "layer": "DJZQ",
        "url": "http://10.0.0.112:6160/igs/rest/ogc/doc/DJZQ/WMSServer"
    },
    "FZL": {
        "properties": {
            "COUNT": {
                "name": "",
                "title": "发证量",
                "show": "true",
                "type": "sum",
                "comparison": true
            }
        },
        "name": "2019年发证量",
        "simpleName": "FZL",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/fz?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "FZL",
        "layer": "FZL",
        "distance": "100",
        "textColor": "#000",
        "textFont": "normal 14px 微软雅黑",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": "0.8"
    },
    "JYL2019": {
        "properties": {
            "COUNT": {
                "name": "",
                "title": "房地产交易量",
                "show": true,
                "type": "sum",
                "comparison": true
            }
        },
        "name": "2019年交易量",
        "simpleName": "JYL2019",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/jy?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "JYL2019",
        "layer": "JYL2019",
        "distance": "100",
        "textColor": "#000",
        "textFont": "normal 14px 微软雅黑",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": "0.8"
    },
    "JYJJ2019": {
        "properties": {
            "FDCJYJGDJ": {
                "name": "",
                "title": "交易平均价",
                "show": "true",
                "type": "avg",
                "comparison": true
            }
        },
        "name": "2019年交易平均价",
        "simpleName": "JYJJ2019",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/jy?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "JYJJ2019",
        "layer": "JYJJ2019",
        "distance": 100,
        "textColor": "#000",
        "textFont": "normal 14px 微软雅黑",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": 0.8
    },
    "TDLYXZ_SJ": {
        "properties": {},
        "name": "土地利用现状（上街）",
        "simpleName": "TDLYXZ_SJ",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101062017GTDLY/WMTSServer",
        "layer": "TDXZ4101062017G"
    },
    "TDLYXZ_ZM": {
        "properties": {},
        "name": "土地利用现状（中牟）",
        "simpleName": "TDLYXZ_ZM",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101222017GTDLY/WMTSServer",
        "layer": "TDXZ4101222017G"
    },
    "TDLYXZ_XY": {
        "properties": {},
        "name": "土地利用现状（荥阳）",
        "simpleName": "TDLYXZ_XY",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101822017GTDLY/WMTSServer",
        "layer": "TDXZ4101822017G"
    },
    "TDLYXZ_XM": {
        "properties": {},
        "name": "土地利用现状（新密）",
        "simpleName": "TDLYXZ_XM",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101832017GTDLY/WMTSServer",
        "layer": "TDXZ4101832017G"
    },
    "TDLYXZ_XZ": {
        "properties": {},
        "name": "土地利用现状（新郑）",
        "simpleName": "TDLYXZ_XZ",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101842017GTDLY/WMTSServer",
        "layer": "TDXZ4101842017G"
    },
    "TDLYXZ_DF": {
        "properties": {},
        "name": "土地利用现状（登封）",
        "simpleName": "TDLYXZ_DF",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101852017GTDLY/WMTSServer",
        "layer": "TDXZ4101852017G"
    }
};
var businessConfig = [{
    'name': 'ysydchrk',
    'title': '用地预审测绘入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1,
        'zoom': '5-10'
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': true,
        'select': false,
        'opacity': 1,
        'zoom': '8-12'
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.YSYD,
        'show': true,
        'select': true,
        'opacity': 0.6,
        'analysis': true
    }]
}, {
    'name': 'ydbpchrk',
    'title': '用地报批测绘入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': true,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.YDYS,
        'show': true,
        'select': true,
        'opacity': 0.6
    }, {
        'layer': layerMap.BPYD,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'tdcbchrk',
    'title': '土地储备测绘入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.JSYD,
        'show': false,
        'select': false,
        'opacity': 0.6
    }, {
        'layer': layerMap.CBYD,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'tdgychrk',
    'title': '土地供应测绘入库',
    'search': true,
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDLYXZ_DF,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.TDLYXZ_XZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.TDLYXZ_XM,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.TDLYXZ_XY,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.TDLYXZ_ZM,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.TDXZ,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.TDLYXZ_SJ,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.TDCB,
        'show': true,
        'select': true,
        'opacity': 0.6,
        'analysis': true
    }, {
        'layer': layerMap.GDYD,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.DJQ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': false
    }]
}, {
    'name': 'tdcbbgrk',
    'title': '土地储备变更入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.CBSH,
        'show': true,
        'select': true,
        'opacity': 1
    }]
}, {
    'name': 'tdcbywrk',
    'title': '土地储备业务入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.CBSH,
        'show': true,
        'select': true,
        'opacity': 1
    }]
}, {
    'name': 'tdgyywrk',
    'title': '土地供应业务入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GDSH,
        'show': true,
        'select': true,
        'opacity': 1
    }, {
        'layer': layerMap.DJQ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'tdgybgrk',
    'title': '土地供应变更入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GDSH,
        'show': true,
        'select': true,
        'opacity': 1
    }]
}, {
    'name': 'ydbpywrk',
    'title': '用地报批业务入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.BPSH,
        'show': true,
        'select': true,
        'opacity': 1
    }]
}, {
    'name': 'ydbpbgrk',
    'title': '用地报批变更入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': true,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.JSYD,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'ydysywrk',
    'title': '用地预审业务入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.YSSH,
        'show': true,
        'select': true,
        'opacity': 1
    }]
}, {
    'name': 'ydysbgrk',
    'title': '用地预审变更入库',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': true,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.YDYS,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'tdpzgtj',
    'title': '土地批征供统计',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDXZ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GFYX,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.ZDJBXX,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.JSYD,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.TDCB,
        'show': false,
        'select': false,
        'opacity': 1
    }, {
        'layer': layerMap.GDXM,
        'show': false,
        'select': false,
        'opacity': 1
    }]
}, {
    'name': 'ywspgypf',
    'title': '业务审批供应批复',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': false
    }, {
        'layer': layerMap.GDXM,
        'show': true,
        'select': true,
        'opacity': 1,
        'analysis': false
    }]
}, {
    'name': 'bdctj',
    'title': '不动产发证统计',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': '0.5',
        'analysis': false
    }, {
        'layer': layerMap.LW,
        'show': true,
        'select': false,
        'opacity': '0.5',
        'analysis': false,
        'zoom': '10-15'
    }, {
        'layer': layerMap.DJZQ,
        'show': true,
        'select': false,
        'opacity': '0.5',
        'analysis': false,
        'zoom': '10-15'
    }, {
        'layer': layerMap.FZL,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': false
    }]
}, {
    'name': 'test',
    'title': 'test',
    'layers': [{
        'layer': layerMap.FZL,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.XZQH,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.DJZQ,
        'show': false,
        'select': false,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'bdcfwjgfx',
    'title': '房屋交易活跃度分析',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true,
        'zoom': '10-17'
    }, {
        'layer': layerMap.DJZQ,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true,
        'zoom': '10-17'
    }, {
        'layer': layerMap.JYL2019,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true
    }]
}, {
    'name': 'bdcfwjyjj',
    'title': '房屋交易价格分析',
    'layers': [{
        'layer': layerMap.XZQH,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true
    }, {
        'layer': layerMap.LW,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true,
        'zoom': '11-17'
    }, {
        'layer': layerMap.JYJJ2019,
        'show': true,
        'select': false,
        'opacity': 1,
        'analysis': true
    }]
}]
