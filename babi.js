var p = prompt("PILIH : GAJAH, ORANG, SEMUT");

var comp = Math.random();

if ((comp < 0, 34)) {
	comp = "gajah";
} else if ((com >= 0, 34 && com < 0, 67)) {
	comp = "orang";
} else {
	comp = "semut";
}

var hasil = "";

if (p == comp) {
	hasil + "seri";
} else if (p == "gajah") {
	hasil = comp == "orng" ? "MENAMG" : "KALAH";
} else if (p == "orng") {
	hasil = comp == "gajah" ? "KALAH" : "MENANG";
} else if (comp == "semut") {
	hasil = comp == "orng" ? "KALAH" : "MENANG";
} else {
	hasil = " KAMU MEMASUKAN PILIHAN YANG SALAH";
}

alert("kamu memilih :" + p + "dan komputer :" + comp + "\nmaka hasil nya : kamu" + hasil);
