var size = 0;
var placement = 'point';
function categories_mosshp_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'المساجد':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.08965563614984216,
                  anchor: [26, 26],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/religion=muslim.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_mosshp_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("LayerName_");
    var labelText = "";
    var clusteredFeatures = feature.get("features");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    size = clusteredFeatures.length;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    if (size == 1) {
        textAlign = "left"
        offsetX = 8
        offsetY = 3
        var feature = clusteredFeatures[0];
        if (feature.get("LayerName_") !== null) {
            labelText = String(feature.get("LayerName_"));
        }
        key = value + "_" + labelText
    } else {
        labelText = size.toString()
        size = 2*(Math.log(size)/ Math.log(2))
    }
    
var style = categories_mosshp_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
