function groupNumber(x) {
	var a = x
	var b = a.split('-', 18)
	var c = b[0].concat(b[1], b[2])
	var d = c.split('', 16)
	var e = d[0].concat(d[1], d[2])
	var f = d[3].concat(d[4], d[5])
	var g = d[6].concat(d[7], d[8])
	var h = d[9].concat(d[10], d[11])
	var i = d[12].concat(d[13])
	var j = d[14].concat(d[15])
	var k = [e, f, g, h, i, j]
	var l = k.join('-')
	console.log(l)
}

groupNumber("993141-1132314-232")

	