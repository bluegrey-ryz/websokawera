ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.293949, -7.540796, 109.334560, -7.517501]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasRT_1 = new ol.format.GeoJSON();
var features_BatasRT_1 = format_BatasRT_1.readFeatures(json_BatasRT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasRT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_1.addFeatures(features_BatasRT_1);
var lyr_BatasRT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_1, 
                style: style_BatasRT_1,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_1_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/BatasRT_1_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/BatasRT_1_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/BatasRT_1_3.png" /> RT 01 RW 04<br />\
    <img src="styles/legend/BatasRT_1_4.png" /> RT 01 RW 05<br />\
    <img src="styles/legend/BatasRT_1_5.png" /> RT 01 RW 06<br />\
    <img src="styles/legend/BatasRT_1_6.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/BatasRT_1_7.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/BatasRT_1_8.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/BatasRT_1_9.png" /> RT 02 RW 04<br />\
    <img src="styles/legend/BatasRT_1_10.png" /> RT 02 RW 05<br />\
    <img src="styles/legend/BatasRT_1_11.png" /> RT 02 RW 06<br />\
    <img src="styles/legend/BatasRT_1_12.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/BatasRT_1_13.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/BatasRT_1_14.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/BatasRT_1_15.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/BatasRT_1_16.png" /> RT 03 RW 05<br />\
    <img src="styles/legend/BatasRT_1_17.png" /> RT 03 RW 06<br />\
    <img src="styles/legend/BatasRT_1_18.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/BatasRT_1_19.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/BatasRT_1_20.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/BatasRT_1_21.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/BatasRT_1_22.png" /> RT 04 RW 05<br />\
    <img src="styles/legend/BatasRT_1_23.png" /> RT 04 RW 06<br />\
    <img src="styles/legend/BatasRT_1_24.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/BatasRT_1_25.png" /> RT 05 RW 02<br />\
    <img src="styles/legend/BatasRT_1_26.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/BatasRT_1_27.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/BatasRT_1_28.png" /> <br />'
        });
var format_Sawah_2 = new ol.format.GeoJSON();
var features_Sawah_2 = format_Sawah_2.readFeatures(json_Sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_2.addFeatures(features_Sawah_2);
var lyr_Sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_2, 
                style: style_Sawah_2,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_2.png" /> Sawah'
            });
var format_ADMINISTRASIDESA_AR_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_3 = format_ADMINISTRASIDESA_AR_25K_3.readFeatures(json_ADMINISTRASIDESA_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_3.addFeatures(features_ADMINISTRASIDESA_AR_25K_3);
var lyr_ADMINISTRASIDESA_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_3, 
                style: style_ADMINISTRASIDESA_AR_25K_3,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_3.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Sokawera_poly_4 = new ol.format.GeoJSON();
var features_Sokawera_poly_4 = format_Sokawera_poly_4.readFeatures(json_Sokawera_poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sokawera_poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sokawera_poly_4.addFeatures(features_Sokawera_poly_4);
var lyr_Sokawera_poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sokawera_poly_4, 
                style: style_Sokawera_poly_4,
                popuplayertitle: "Sokawera_poly",
                interactive: false,
                title: '<img src="styles/legend/Sokawera_poly_4.png" /> Sokawera_poly'
            });
var format_Lapangan_5 = new ol.format.GeoJSON();
var features_Lapangan_5 = format_Lapangan_5.readFeatures(json_Lapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_5.addFeatures(features_Lapangan_5);
var lyr_Lapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_5, 
                style: style_Lapangan_5,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_5.png" /> Lapangan'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_Perusahaan_7 = new ol.format.GeoJSON();
var features_Perusahaan_7 = format_Perusahaan_7.readFeatures(json_Perusahaan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Perusahaan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perusahaan_7.addFeatures(features_Perusahaan_7);
var lyr_Perusahaan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perusahaan_7, 
                style: style_Perusahaan_7,
                popuplayertitle: "Perusahaan",
                interactive: true,
                title: '<img src="styles/legend/Perusahaan_7.png" /> Perusahaan'
            });
var format_Sekolahan_8 = new ol.format.GeoJSON();
var features_Sekolahan_8 = format_Sekolahan_8.readFeatures(json_Sekolahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahan_8.addFeatures(features_Sekolahan_8);
var lyr_Sekolahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahan_8, 
                style: style_Sekolahan_8,
                popuplayertitle: "Sekolahan",
                interactive: true,
                title: '<img src="styles/legend/Sekolahan_8.png" /> Sekolahan'
            });
var format_house_9 = new ol.format.GeoJSON();
var features_house_9 = format_house_9.readFeatures(json_house_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_house_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house_9.addFeatures(features_house_9);
var lyr_house_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_house_9, 
                style: style_house_9,
                popuplayertitle: "house",
                interactive: true,
                title: '<img src="styles/legend/house_9.png" /> house'
            });
var format_Sungai_10 = new ol.format.GeoJSON();
var features_Sungai_10 = format_Sungai_10.readFeatures(json_Sungai_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sungai_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_10.addFeatures(features_Sungai_10);
var lyr_Sungai_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_10, 
                style: style_Sungai_10,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_10.png" /> Sungai'
            });
var format_Shop_11 = new ol.format.GeoJSON();
var features_Shop_11 = format_Shop_11.readFeatures(json_Shop_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Shop_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_11.addFeatures(features_Shop_11);
var lyr_Shop_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shop_11, 
                style: style_Shop_11,
                popuplayertitle: "Shop",
                interactive: true,
                title: '<img src="styles/legend/Shop_11.png" /> Shop'
            });
var format_TempatMakan_12 = new ol.format.GeoJSON();
var features_TempatMakan_12 = format_TempatMakan_12.readFeatures(json_TempatMakan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatMakan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatMakan_12.addFeatures(features_TempatMakan_12);
var lyr_TempatMakan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatMakan_12, 
                style: style_TempatMakan_12,
                popuplayertitle: "Tempat Makan",
                interactive: true,
                title: '<img src="styles/legend/TempatMakan_12.png" /> Tempat Makan'
            });
var format_Bengkel_13 = new ol.format.GeoJSON();
var features_Bengkel_13 = format_Bengkel_13.readFeatures(json_Bengkel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bengkel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_13.addFeatures(features_Bengkel_13);
var lyr_Bengkel_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_13, 
                style: style_Bengkel_13,
                popuplayertitle: "Bengkel",
                interactive: true,
                title: '<img src="styles/legend/Bengkel_13.png" /> Bengkel'
            });
var format_Pemakaman_14 = new ol.format.GeoJSON();
var features_Pemakaman_14 = format_Pemakaman_14.readFeatures(json_Pemakaman_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemakaman_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemakaman_14.addFeatures(features_Pemakaman_14);
var lyr_Pemakaman_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemakaman_14, 
                style: style_Pemakaman_14,
                popuplayertitle: "Pemakaman",
                interactive: true,
                title: '<img src="styles/legend/Pemakaman_14.png" /> Pemakaman'
            });
var format_Masjid_15 = new ol.format.GeoJSON();
var features_Masjid_15 = format_Masjid_15.readFeatures(json_Masjid_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Masjid_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_15.addFeatures(features_Masjid_15);
var lyr_Masjid_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_15, 
                style: style_Masjid_15,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_15.png" /> Masjid'
            });
var format_Pemerintahan_16 = new ol.format.GeoJSON();
var features_Pemerintahan_16 = format_Pemerintahan_16.readFeatures(json_Pemerintahan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemerintahan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_16.addFeatures(features_Pemerintahan_16);
var lyr_Pemerintahan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_16, 
                style: style_Pemerintahan_16,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_16.png" /> Pemerintahan'
            });
var format_kesehatan_17 = new ol.format.GeoJSON();
var features_kesehatan_17 = format_kesehatan_17.readFeatures(json_kesehatan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kesehatan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_17.addFeatures(features_kesehatan_17);
var lyr_kesehatan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_17, 
                style: style_kesehatan_17,
                popuplayertitle: "kesehatan",
                interactive: true,
                title: '<img src="styles/legend/kesehatan_17.png" /> kesehatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasRT_1.setVisible(true);lyr_Sawah_2.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_3.setVisible(true);lyr_Sokawera_poly_4.setVisible(true);lyr_Lapangan_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_Perusahaan_7.setVisible(true);lyr_Sekolahan_8.setVisible(true);lyr_house_9.setVisible(true);lyr_Sungai_10.setVisible(true);lyr_Shop_11.setVisible(true);lyr_TempatMakan_12.setVisible(true);lyr_Bengkel_13.setVisible(true);lyr_Pemakaman_14.setVisible(true);lyr_Masjid_15.setVisible(true);lyr_Pemerintahan_16.setVisible(true);lyr_kesehatan_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasRT_1,lyr_Sawah_2,lyr_ADMINISTRASIDESA_AR_25K_3,lyr_Sokawera_poly_4,lyr_Lapangan_5,lyr_Jalan_6,lyr_Perusahaan_7,lyr_Sekolahan_8,lyr_house_9,lyr_Sungai_10,lyr_Shop_11,lyr_TempatMakan_12,lyr_Bengkel_13,lyr_Pemakaman_14,lyr_Masjid_15,lyr_Pemerintahan_16,lyr_kesehatan_17];
lyr_BatasRT_1.set('fieldAliases', {'id': 'id', 'RT': 'RT', });
lyr_Sawah_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sokawera_poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_Lapangan_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jalan_6.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Lebar': 'Lebar', });
lyr_Perusahaan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sekolahan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_house_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Sungai_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Shop_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TempatMakan_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Bengkel_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pemakaman_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Masjid_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pemerintahan_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_kesehatan_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BatasRT_1.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', });
lyr_Sawah_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sokawera_poly_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_Lapangan_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jalan_6.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'Lebar': 'TextEdit', });
lyr_Perusahaan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sekolahan_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_house_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Sungai_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Shop_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_TempatMakan_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Bengkel_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pemakaman_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Masjid_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pemerintahan_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_kesehatan_17.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BatasRT_1.set('fieldLabels', {'id': 'no label', 'RT': 'no label', });
lyr_Sawah_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sokawera_poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_Lapangan_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'inline label - always visible', 'Lebar': 'no label', });
lyr_Perusahaan_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Sekolahan_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_house_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Sungai_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Shop_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TempatMakan_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Bengkel_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pemakaman_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Masjid_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pemerintahan_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_kesehatan_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_kesehatan_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});