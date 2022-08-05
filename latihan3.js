var jumlahangkot = 10;
var angkotberoperasi = 6;

for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++) {
	if (noangkot <= 6) {
		console.log(" angkot NO." + noangkot + " angkot beroperasi dengan baik.");
	} else if (noangkot === 8) {
		console.log("angkot Node." + noangkot + " sedang lembur.");
	} else {
		console.log(" angkot no. " + noangkot + " tidak beroperasi.");
	}
}
