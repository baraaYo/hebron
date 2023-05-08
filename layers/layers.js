ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([-554.648021, -582.555355, 179512.311400, 130471.463700]);
var wms_layers = [];

var format_Building_0 = new ol.format.GeoJSON();
var features_Building_0 = format_Building_0.readFeatures(json_Building_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Building_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_0.addFeatures(features_Building_0);
var lyr_Building_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_0, 
                style: style_Building_0,
                interactive: true,
    title: 'Building<br />\
    <img src="styles/legend/Building_0_0.png" /> <br />'
        });
var format_featshp_1 = new ol.format.GeoJSON();
var features_featshp_1 = format_featshp_1.readFeatures(json_featshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_featshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_featshp_1.addFeatures(features_featshp_1);
var lyr_featshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_featshp_1, 
                style: style_featshp_1,
                interactive: true,
    title: 'featshp<br />\
    <img src="styles/legend/featshp_1_0.png" /> <br />\
    <img src="styles/legend/featshp_1_1.png" /> archaeological_s<br />\
    <img src="styles/legend/featshp_1_2.png" /> bank<br />\
    <img src="styles/legend/featshp_1_3.png" /> cafe;restaurant<br />\
    <img src="styles/legend/featshp_1_4.png" /> car_wash<br />\
    <img src="styles/legend/featshp_1_5.png" /> cinema<br />\
    <img src="styles/legend/featshp_1_6.png" /> clinic<br />\
    <img src="styles/legend/featshp_1_7.png" /> community_centre<br />\
    <img src="styles/legend/featshp_1_8.png" /> emergency_access<br />\
    <img src="styles/legend/featshp_1_9.png" /> factory<br />\
    <img src="styles/legend/featshp_1_10.png" /> fire_station<br />\
    <img src="styles/legend/featshp_1_11.png" /> fuel<br />\
    <img src="styles/legend/featshp_1_12.png" /> hospital<br />\
    <img src="styles/legend/featshp_1_13.png" /> hotel<br />\
    <img src="styles/legend/featshp_1_14.png" /> pharmacy<br />\
    <img src="styles/legend/featshp_1_15.png" /> police<br />\
    <img src="styles/legend/featshp_1_16.png" /> school<br />\
    <img src="styles/legend/featshp_1_17.png" /> university<br />\
    <img src="styles/legend/featshp_1_18.png" /> <br />'
        });
var format_mosshp_2 = new ol.format.GeoJSON();
var features_mosshp_2 = format_mosshp_2.readFeatures(json_mosshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_mosshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mosshp_2.addFeatures(features_mosshp_2);
var lyr_mosshp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mosshp_2, 
                style: style_mosshp_2,
                interactive: true,
    title: 'mosshp<br />\
    <img src="styles/legend/mosshp_2_0.png" /> المساجد<br />'
        });
var format_stret_3 = new ol.format.GeoJSON();
var features_stret_3 = format_stret_3.readFeatures(json_stret_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_stret_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stret_3.addFeatures(features_stret_3);
var lyr_stret_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stret_3, 
                style: style_stret_3,
                interactive: true,
    title: 'stret<br />\
    <img src="styles/legend/stret_3_0.png" /> Internal<br />\
    <img src="styles/legend/stret_3_1.png" /> Local<br />\
    <img src="styles/legend/stret_3_2.png" /> Main<br />\
    <img src="styles/legend/stret_3_3.png" /> Other<br />\
    <img src="styles/legend/stret_3_4.png" /> Regional<br />'
        });

lyr_Building_0.setVisible(true);lyr_featshp_1.setVisible(true);lyr_mosshp_2.setVisible(true);lyr_stret_3.setVisible(true);
var layersList = [lyr_Building_0,lyr_featshp_1,lyr_mosshp_2,lyr_stret_3];
lyr_Building_0.set('fieldAliases', {'Id': 'Id', 'TYPE': 'TYPE', });
lyr_featshp_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', });
lyr_mosshp_2.set('fieldAliases', {'Governorat': 'Governorat', 'CommunityN': 'CommunityN', 'Commercial': 'Commercial', 'Economic_A': 'Economic_A', 'x': 'x', 'y': 'y', 'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', });
lyr_stret_3.set('fieldAliases', {'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'RoadName_A': 'RoadName_A', 'RoadName_E': 'RoadName_E', 'ValueName_': 'ValueName_', 'ValueName1': 'ValueName1', 'RoadType_A': 'RoadType_A', 'RoadType_E': 'RoadType_E', 'Classifi_2': 'Classifi_2', 'Classifi_3': 'Classifi_3', 'RoadNameTe': 'RoadNameTe', 'RoadName_1': 'RoadName_1', 'Shape_Leng': 'Shape_Leng', 'InLine_FID': 'InLine_FID', 'SimLnFlag': 'SimLnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_Building_0.set('fieldImages', {'Id': 'Range', 'TYPE': 'TextEdit', });
lyr_featshp_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', });
lyr_mosshp_2.set('fieldImages', {'Governorat': 'TextEdit', 'CommunityN': 'TextEdit', 'Commercial': 'TextEdit', 'Economic_A': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', });
lyr_stret_3.set('fieldImages', {'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', 'Classifica': 'TextEdit', 'Classifi_1': 'TextEdit', 'RoadName_A': 'TextEdit', 'RoadName_E': 'TextEdit', 'ValueName_': 'TextEdit', 'ValueName1': 'TextEdit', 'RoadType_A': 'TextEdit', 'RoadType_E': 'TextEdit', 'Classifi_2': 'TextEdit', 'Classifi_3': 'TextEdit', 'RoadNameTe': 'TextEdit', 'RoadName_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'InLine_FID': 'TextEdit', 'SimLnFlag': 'Range', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_Building_0.set('fieldLabels', {'Id': 'no label', 'TYPE': 'no label', });
lyr_featshp_1.set('fieldLabels', {'name': 'inline label', 'type': 'inline label', 'LayerName_': 'inline label', 'LayerName1': 'inline label', });
lyr_mosshp_2.set('fieldLabels', {'Governorat': 'inline label', 'CommunityN': 'inline label', 'Commercial': 'no label', 'Economic_A': 'no label', 'x': 'no label', 'y': 'header label', 'LayerName_': 'inline label', 'LayerName1': 'inline label', });
lyr_stret_3.set('fieldLabels', {'LayerName_': 'inline label', 'LayerName1': 'inline label', 'Classifica': 'no label', 'Classifi_1': 'inline label', 'RoadName_A': 'inline label', 'RoadName_E': 'inline label', 'ValueName_': 'no label', 'ValueName1': 'no label', 'RoadType_A': 'no label', 'RoadType_E': 'no label', 'Classifi_2': 'no label', 'Classifi_3': 'no label', 'RoadNameTe': 'no label', 'RoadName_1': 'no label', 'Shape_Leng': 'no label', 'InLine_FID': 'no label', 'SimLnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_stret_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});