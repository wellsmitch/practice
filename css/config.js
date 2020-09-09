var globalMapConfig = {
    "projection": "EPSG:4326",
    "localProjection": "EPSG:4526",
    "serverIp": "10.0.0.123",
    "serverPort": "6163",
    "srsCnName": "��˹�������ϵ_�й�2000_38��3_��2",
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
        "name": "Ԥ���õ�",
        "docName": "YSYD",
        "layer": "LYSYD410100YSYD",
        "layerIndex": 0,
        "strClassInfo": "(ר��:YSYD)",
        "updateStrClassInfo": "ר��:YSYD",
        "strTbl": "YSYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YSYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,mpArea",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "YSYD"
    },
    "YSSH": {
        "type": "wms",
        "name": "Ԥ�����",
        "layer": "LYSSH410100YDYSSH",
        "docName": "YSSH",
        "layerIndex": 0,
        "strClassInfo": "(ר��:YSSH)",
        "updateStrClassInfo": "ר��:YSSH",
        "strTbl": "YSSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YSSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,mpArea",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "YSSH"
    },
    "YDYS": {
        "type": "wms",
        "name": "�õ�Ԥ��",
        "layer": "LYDYS410100YDYS",
        "docName": "YDYS",
        "layerIndex": 0,
        "strClassInfo": "(ר��:YDYS)",
        "updateStrClassInfo": "ר��:YDYS",
        "strTbl": "YDYSQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/YDYS/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "ͼ��id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,���",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,�ܳ�",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "YDYS"
    },
    "BPYD": {
        "type": "wms",
        "name": "�����õ�",
        "layer": "LBPYD410100BPYD",
        "docName": "BPYD",
        "layerIndex": 0,
        "strClassInfo": "(ר��:BPYD)",
        "updateStrClassInfo": "ר��:BPYD",
        "strTbl": "BPYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/BPYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "ͼ��id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,���",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,�ܳ�",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "BPYD"
    },
    "BPSH": {
        "type": "wms",
        "name": "�������",
        "layer": "LBPSH410100JSYDBPSH",
        "docName": "BPSH",
        "layerIndex": 0,
        "strClassInfo": "(ר��:BPSH)",
        "updateStrClassInfo": "ר��:BPSH",
        "strTbl": "BPSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/BPSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "ͼ��id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,���",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,�ܳ�",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "BPSH"
    },
    "JSYD": {
        "type": "wms",
        "name": "�õر���",
        "layer": "LJSYD410100JSYD",
        "busiType": "03",
        "layerStatus": "3",
        "docName": "JSYD",
        "layerIndex": 0,
        "strClassInfo": "(ר��:JSYD)",
        "updateStrClassInfo": "ר��:JSYD",
        "strTbl": "JSYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/JSYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "ͼ��id",
                "show": false
            },
            "XM_GUID": {
                "name": "GUID,XM_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "area": {
                "name": "mpArea,���",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter,�ܳ�",
                "title": "�ܳ�",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "JSYD"
    },
    "CBYD": {
        "type": "wms",
        "name": "�����õ�",
        "docName": "CBYD",
        "busiType": "05",
        "layerStatus": "1",
        "layer": "LCBYD410100CBYD",
        "layerIndex": 0,
        "strClassInfo": "(ר��:CBYD)",
        "strTbl": "CBYDTJ",
        "updateStrClassInfo": "ר��:CBYD",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/CBYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID,��Ŀ_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,���Ӽ�ܺ�",
                "title": "���Ӽ�ܺ�",
                "show": true
            },
            "location": {
                "name": "ZDZL,�ڵ�����",
                "title": "�ڵ�����",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,�ڵ����",
                "title": "�ڵ����",
                "show": true
            },
            "rksj": {
                "name": "RKSJ,���ʱ��",
                "title": "���ʱ��",
                "show": true
            },
            "mpArea": {
                "name": "mpArea,���",
                "title": "���",
                "show": true
            },
            "area": {
                "name": "mpArea,���",
                "title": "���",
                "show": false
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "�ܳ�",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "CBYD"
    },
    "CBSH": {
        "type": "wms",
        "name": "�������",
        "docName": "CBSH",
        "busiType": "05",
        "layerStatus": "2",
        "layer": "LCBSH410100TDCBSH",
        "layerIndex": 0,
        "strClassInfo": "(ר��:CBSH)",
        "updateStrClassInfo": "ר��:CBSH",
        "strTbl": "CBSHTJ",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/CBSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID,��Ŀ_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,���Ӽ�ܺ�",
                "title": "���Ӽ�ܺ�",
                "show": true
            },
            "location": {
                "name": "ZDZL,�ڵ�����,LOCATION",
                "title": "�ڵ�����",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,�ڵ����",
                "title": "�ڵ����",
                "show": false
            },
            "rksj": {
                "name": "RKSJ,���ʱ��",
                "title": "���ʱ��",
                "show": true
            },
            "area": {
                "name": "mpArea,���,ZDMJ,AREA",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "�ܳ�",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "CBSH"
    },
    "TDCB": {
        "type": "wms",
        "name": "���ش���",
        "docName": "TDCB",
        "busiType": "05",
        "layerStatus": "3",
        "layer": "LTDCB410100TDCB",
        "layerIndex": 0,
        "strClassInfo": "(ר��:TDCB)",
        "strTbl": "TDCBTJ",
        "updateStrClassInfo": "ר��:TDCB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/TDCB/WMSServ",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID,��Ŀ_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "dzjgh": {
                "name": "DZJGH,���Ӽ�ܺ�",
                "title": "���Ӽ�ܺ�",
                "show": true
            },
            "location": {
                "name": "ZDZL,�ڵ�����,LOCATION",
                "title": "�ڵ�����",
                "show": true
            },
            "zdmj": {
                "name": "ZDMJ,�ڵ����",
                "title": "�ڵ����",
                "show": true
            },
            "rksj": {
                "name": "RKSJ,���ʱ��",
                "title": "���ʱ��",
                "show": true
            },
            "area": {
                "name": "mpArea,���,AREA",
                "title": "���",
                "show": true
            },
            "mpPerimeter": {
                "name": "mpPerimeter",
                "title": "�ܳ�",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": false
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "TDCB"
    },
    "GDYD": {
        "type": "wms",
        "name": "�����õ�",
        "docName": "GDYD",
        "busiType": "06",
        "layerStatus": "1",
        "layer": "LGDYD410100GDYD",
        "layerIndex": 0,
        "strClassInfo": "(ר��:GDYD)",
        "updateStrClassInfo": "ר��:GDYD",
        "strTbl": "GDYDQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDYD/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,������;",
                "title": "������;",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": false
            },
            "area": {
                "name": "AREA,���",
                "title": "���",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "GDYD"
    },
    "GDSH": {
        "type": "wms",
        "name": "�������",
        "docName": "GDSH",
        "busiType": "06",
        "layerStatus": "2",
        "layer": "LGDSH410100GDXMSH",
        "layerIndex": 0,
        "strClassInfo": "(ר��:GDSH)",
        "updateStrClassInfo": "ר��:GDSH",
        "strTbl": "GDSHQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDSH/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,������;",
                "title": "������;",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": false
            },
            "area": {
                "name": "AREA,���",
                "title": "���",
                "show": true
            }
        },
        "simpleName": "GDSH"
    },
    "GDXM": {
        "type": "wms",
        "name": "���ع�Ӧ",
        "docName": "GDXM",
        "busiType": "06",
        "layerStatus": "3",
        "layer": "LGDXM410100GDXM",
        "layerIndex": 0,
        "strClassInfo": "(ר��:GDXM)",
        "updateStrClassInfo": "ר��:GDXM",
        "strTbl": "GDXMQKB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/GDXM/WMSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,�ؿ����",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC,��Ŀ����",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH,�����ĺ�",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ,��Ŀ���",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "tdyt": {
                "name": "TDYT,������;",
                "title": "������;",
                "show": true
            },
            "layerStatus": {
                "name": "LAYER_STATUS,״̬",
                "title": "״̬",
                "show": false
            },
            "area": {
                "name": "AREA,���",
                "title": "���",
                "show": true
            }
        },
        "simpleName": "GDXM"
    },
    "ZDJBXX": {
        "type": "wms",
        "name": "�ڵ�",
        "docName": "QS4101002019ZDJBXX",
        "layer": "D410100QS2019KZDJBXX",
        "layerIndex": 0,
        "strClassInfo": "(ר��:QS,���:2019,������:K)",
        "strTbl": "ZDXX",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/doc/QS4101002019ZDJBXX/WMSServer",
        "properties": {
            "bdcdyh": {
                "name": "��������Ԫ��",
                "title": "��������Ԫ��",
                "show": true
            },
            "zongdicode": {
                "name": "�ڵ�������",
                "title": "�ڵ�������",
                "show": true
            },
            "syqlx": {
                "name": "����Ȩ����",
                "title": "����Ȩ����",
                "show": true
            },
            "mpArea": {
                "name": "�ڵ����",
                "title": "�ڵ����",
                "show": true
            },
            "mianjidw": {
                "name": "�����λ",
                "title": "�����λ",
                "show": true
            },
            "yongtu": {
                "name": "��;",
                "title": "��;",
                "show": true
            },
            "dengji": {
                "name": "�ȼ�",
                "title": "�ȼ�",
                "show": true
            },
            "jiage": {
                "name": "�۸�",
                "title": "�۸�",
                "show": true
            },
            "qllx": {
                "name": "Ȩ������",
                "title": "Ȩ������",
                "show": true
            },
            "qlxz": {
                "name": "Ȩ������",
                "title": "Ȩ������",
                "show": true
            },
            "qlsdfs": {
                "name": "Ȩ���趨��ʽ",
                "title": "Ȩ���趨��ʽ",
                "show": true
            },
            "rognjilv": {
                "name": "�ݻ���",
                "title": "�ݻ���",
                "show": true
            },
            "jianzhumd": {
                "name": "�����ܶ�",
                "title": "�����ܶ�",
                "show": true
            },
            "jianzhuxg": {
                "name": "�����޸�",
                "title": "�����޸�",
                "show": true
            },
            "EAST_TO": {
                "name": "����",
                "title": "����",
                "show": true
            },
            "SOUTH_TO": {
                "name": "����",
                "title": "����",
                "show": true
            },
            "WEST_TO": {
                "name": "����",
                "title": "����",
                "show": true
            },
            "NORTH_TO": {
                "name": "����",
                "title": "����",
                "show": true
            },
            "MAP_NUM": {
                "name": "ͼ����",
                "title": "ͼ����",
                "show": true
            },
            "dijihao": {
                "name": "�ؼ���",
                "title": "�ؼ���",
                "show": true
            },
            "danganhao": {
                "name": "������",
                "title": "������",
                "show": true
            },
            "beihzu": {
                "name": "��ע",
                "title": "��ע",
                "show": true
            },
            "STATUS": {
                "name": "״̬",
                "title": "״̬",
                "show": true
            },
            "quanliren": {
                "name": "Ȩ����",
                "title": "Ȩ����",
                "show": true
            },
            "qsdwmc": {
                "name": "Ȩ����λ����",
                "title": "Ȩ����λ����",
                "show": true
            },
            "yzdh": {
                "name": "ԭ�ڵغ�",
                "title": "ԭ�ڵغ�",
                "show": true
            },
            "ydjh": {
                "name": "ԭ�ؼ���",
                "title": "ԭ�ؼ���",
                "show": true
            },
            "jlsj": {
                "name": "����ʱ��",
                "title": "����ʱ��",
                "show": true
            },
            "txdz": {
                "name": "ͨѶ��ַ",
                "title": "ͨѶ��ַ",
                "show": true
            },
            "tuhao": {
                "name": "ͼ��",
                "title": "ͼ��",
                "show": true
            },
            "tudizh": {
                "name": "����֤��",
                "title": "����֤��",
                "show": true
            },
            "jsydghxkz": {
                "name": "�����õع滮���֤",
                "title": "�����õع滮���֤",
                "show": true
            },
            "jsgcghxkz": {
                "name": "���蹤�̹滮���֤",
                "title": "���蹤�̹滮���֤",
                "show": true
            },
            "jsgcsgxkz": {
                "name": "��������ʩ�����֤",
                "title": "��������ʩ�����֤",
                "show": true
            },
            "landCode": {
                "name": "LAND_CODE",
                "title": "�ؿ����",
                "show": true
            },
            "mappingId": {
                "name": "��������Ԫ��",
                "title": "��ĿGUID",
                "show": false
            },
            "xmmc": {
                "name": "XMMC",
                "title": "��Ŀ����",
                "show": true
            },
            "pfwh": {
                "name": "PFWH",
                "title": "�����ĺ�",
                "show": true
            },
            "xmmj": {
                "name": "XMMJ",
                "title": "��Ŀ���",
                "show": true
            },
            "location": {
                "name": "LOCATION,����",
                "title": "λ��",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "ZDJBXX"
    },
    "XZQH": {
        "type": "wmts",
        "name": "�м�����,�ؼ�����",
        "layer": "INDEX2019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/INDEX2019G/WMTSServer"
    },
    "LW": {
        "type": "wmts",
        "name": "·��",
        "layer": "LW4101002017G",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/LW4101002017G/WMTSServer",
        "simpleName": "LW"
    },
    "TDXZ": {
        "type": "wmts",
        "name": "����������״",
        "layer": "TDXZ4101012017G",
        "strClassInfo": "(ר��:TDXZ,���:2017,������:G)",
        "strTbl": "NCTDLY_YJFL,NCTDLY_EJFL,FRDTDLY_YJFL,FRDTDLY_EJFL,NCTDLY_QSYJ,NCTDLY_QSEJ,GDPDMJHZ,KTZ,KTZHZ,JBNTBHKQKTJ,TDLYXZTB",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101012017GTDLY/WMTSServer",
        "properties": {
            "landCode": {
                "name": "LAND_CODE,��ʶ��",
                "title": "��ʶ��",
                "show": true
            },
            "mappingId": {
                "name": "GUID,��Ŀ_GUID",
                "title": "��ĿGUID",
                "show": false
            },
            "ysdm": {
                "name": "Ҫ�ش���",
                "title": "Ҫ�ش���",
                "show": true
            },
            "tbybh": {
                "name": "ͼ��Ԥ���",
                "title": "ͼ��Ԥ���",
                "show": true
            },
            "tbbh": {
                "name": "ͼ�߱��",
                "title": "ͼ�߱��",
                "show": true
            },
            "dldm": {
                "name": "�������",
                "title": "�������",
                "show": true
            },
            "dlmc": {
                "name": "��������",
                "title": "��������",
                "show": true
            },
            "qsxz": {
                "name": "Ȩ������",
                "title": "Ȩ������",
                "show": true
            },
            "qsdwdm": {
                "name": "Ȩ����λ����",
                "title": "Ȩ����λ����",
                "show": true
            },
            "qsdwmc": {
                "name": "Ȩ����λ����",
                "title": "Ȩ����λ����",
                "show": true
            },
            "zldwdm": {
                "name": "���䵥λ����",
                "title": "���䵥λ����",
                "show": true
            },
            "zldwmc": {
                "name": "���䵥λ����",
                "title": "���䵥λ����",
                "show": true
            },
            "gdlx": {
                "name": "��������",
                "title": "��������",
                "show": true
            },
            "kclx": {
                "name": "�۳�����",
                "title": "�۳�����",
                "show": true
            },
            "dlbz": {
                "name": "���౸ע",
                "title": "���౸ע",
                "show": true
            },
            "gdpdj": {
                "name": "�����¶ȼ�",
                "title": "�����¶ȼ�",
                "show": true
            },
            "kcdldm": {
                "name": "�۳��������",
                "title": "�۳��������",
                "show": true
            },
            "kcdlxs": {
                "name": "�۳�����ϵ��",
                "title": "�۳�����ϵ��",
                "show": true
            },
            "xzdwmj": {
                "name": "��״�������",
                "title": "��״�������",
                "show": true
            },
            "lxdwmj": {
                "name": "���ǵ������",
                "title": "���ǵ������",
                "show": true
            },
            "kcdlmj": {
                "name": "�۳��������",
                "title": "�۳��������",
                "show": true
            },
            "tbdlmj": {
                "name": "ͼ�ߵ������",
                "title": "ͼ�ߵ������",
                "show": true
            },
            "pzwh": {
                "name": "��׼�ĺ�",
                "title": "��׼�ĺ�",
                "show": true
            },
            "bgjlh": {
                "name": "�����¼��",
                "title": "�����¼��",
                "show": true
            },
            "bgrq": {
                "name": "�������",
                "title": "�������",
                "show": true
            },
            "analysisArea": {
                "name": "analysisArea",
                "title": "�������",
                "show": false
            }
        },
        "simpleName": "TDXZ"
    },
    "GFYX": {
        "type": "wmts",
        "name": "�߷�Ӱ��",
        "layer": "GFYX4101012019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/GFYX4101012019G/WMTSServer"
    },
    "DJQ": {
        "properties": {},
        "name": "�ؼ���",
        "simpleName": "DJQ",
        "type": "wms",
        "docName": "DJQ",
        "layer": "DJQ",
        "url": "http://10.0.0.112:6160/igs/rest/ogc/doc/DJQ/WMSServer"
    },
    "FZL2019": {
        "properties": {},
        "name": "����ͼ",
        "simpleName": "FZL2019",
        "type": "wtemp",
        "docName": "FZL2019",
        "layer": "FZL2019"
    },
    "FZL2019_CLUSTER": {
        "properties": {},
        "name": "����",
        "simpleName": "FZL2019_CLUSTER",
        "type": "wtemp",
        "docName": "FZL2019_CLUSTER",
        "layer": "FZL2019_CLUSTER"
    },
    "DJZQ": {
        "properties": {},
        "name": "�ؼ�����",
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
                "title": "��֤��",
                "show": "true",
                "type": "sum",
                "comparison": true
            }
        },
        "name": "2019�귢֤��",
        "simpleName": "FZL",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/fz?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "FZL",
        "layer": "FZL",
        "distance": "100",
        "textColor": "#000",
        "textFont": "normal 14px ΢���ź�",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": "0.8"
    },
    "JYL2019": {
        "properties": {
            "COUNT": {
                "name": "",
                "title": "���ز�������",
                "show": true,
                "type": "sum",
                "comparison": true
            }
        },
        "name": "2019�꽻����",
        "simpleName": "JYL2019",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/jy?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "JYL2019",
        "layer": "JYL2019",
        "distance": "100",
        "textColor": "#000",
        "textFont": "normal 14px ΢���ź�",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": "0.8"
    },
    "JYJJ2019": {
        "properties": {
            "FDCJYJGDJ": {
                "name": "",
                "title": "����ƽ����",
                "show": "true",
                "type": "avg",
                "comparison": true
            }
        },
        "name": "2019�꽻��ƽ����",
        "simpleName": "JYJJ2019",
        "type": "cluster",
        "url": "http://localhost:8088/dzzw/eg/gis/bdc/statistics/jy?beginDate=2019-01-01&endDate=2019-12-31",
        "docName": "JYJJ2019",
        "layer": "JYJJ2019",
        "distance": 100,
        "textColor": "#000",
        "textFont": "normal 14px ΢���ź�",
        "textStrokeColor": "#BD8E00",
        "textStrokeWidth": 0.8
    },
    "TDLYXZ_SJ": {
        "properties": {},
        "name": "����������״���Ͻ֣�",
        "simpleName": "TDLYXZ_SJ",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101062017GTDLY/WMTSServer",
        "layer": "TDXZ4101062017G"
    },
    "TDLYXZ_ZM": {
        "properties": {},
        "name": "����������״����Ĳ��",
        "simpleName": "TDLYXZ_ZM",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101222017GTDLY/WMTSServer",
        "layer": "TDXZ4101222017G"
    },
    "TDLYXZ_XY": {
        "properties": {},
        "name": "����������״��������",
        "simpleName": "TDLYXZ_XY",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101822017GTDLY/WMTSServer",
        "layer": "TDXZ4101822017G"
    },
    "TDLYXZ_XM": {
        "properties": {},
        "name": "����������״�����ܣ�",
        "simpleName": "TDLYXZ_XM",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101832017GTDLY/WMTSServer",
        "layer": "TDXZ4101832017G"
    },
    "TDLYXZ_XZ": {
        "properties": {},
        "name": "����������״����֣��",
        "simpleName": "TDLYXZ_XZ",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101842017GTDLY/WMTSServer",
        "layer": "TDXZ4101842017G"
    },
    "TDLYXZ_DF": {
        "properties": {},
        "name": "����������״���Ƿ⣩",
        "simpleName": "TDLYXZ_DF",
        "type": "wmts",
        "url": "http://16.16.128.114:6160/igs/rest/ogc/TDXZ4101852017GTDLY/WMTSServer",
        "layer": "TDXZ4101852017G"
    }
};
var businessConfig = [{
    'name': 'ysydchrk',
    'title': '�õ�Ԥ�������',
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
    'title': '�õر���������',
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
    'title': '���ش���������',
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
    'title': '���ع�Ӧ������',
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
    'title': '���ش���������',
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
    'title': '���ش���ҵ�����',
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
    'title': '���ع�Ӧҵ�����',
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
    'title': '���ع�Ӧ������',
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
    'title': '�õر���ҵ�����',
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
    'title': '�õر���������',
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
    'title': '�õ�Ԥ��ҵ�����',
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
    'title': '�õ�Ԥ�������',
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
    'title': '����������ͳ��',
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
    'title': 'ҵ��������Ӧ����',
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
    'title': '��������֤ͳ��',
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
    'title': '���ݽ��׻�Ծ�ȷ���',
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
    'title': '���ݽ��׼۸����',
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
