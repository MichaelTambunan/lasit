var angkotberoperasi = 6;
var jumlahangkot = 10;

for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++) {
	if (noangkot <= angkotberoperasi) {
		console.log("angkot NOl. " + noangkot + " brroperasidengan baik");
	} else if (noangkot === 8) {
		console.log(" angkot no " + noangkot + " lembur");
	} else {
		console.log("angkot no. " + noangkot + " tida beroperasti");
	}
}
