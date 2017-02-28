import groovy.xml.MarkupBuilder

new MarkupBuilder().kml(xmlns : 'http://www.opengis.net/kml/2.2') {
	new File(args?.size() ? args[0] : '.').eachFileMatch(~/.*\.gpx/) { file ->
		new XmlParser().parse(file).trk.each { trk ->
			trk.trkseg.each { trkseg ->
				def geo = ""
				trkseg.trkpt.each { trkpt ->
					geo += "${trkpt.'@lon'},${trkpt.'@lat'}\n"
				}
				if (geo) {
					Placemark() {
						name(file.getName().substring(0, 8))
						LineString {
							coordinates(geo);
						}
						ExtendedData {
							Data(name : 'mode') {
								value(file.getName() =~ /car/ ? 'Automobile' : 'Pedestrian')
							}
							Data(name : 'mode_color') {
								value(file.getName() =~ /car/ ? 'FF000080' : 'FFFF00FF')
							}
							Data(name : 'multiday') {
								value(file.getName().contains('-'))
							}
						}
					}
				}
			}
		}
	}
}
