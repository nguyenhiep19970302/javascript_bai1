// --------------bai 1--------------
// input
// tao bien luong mot ngay
// lay dom id cua so ngay nguoi nhap vao the input
// tao bien so luong lam duoc
var salaryDay = 100000;
var dayWorked = document.getElementById("dayWorked");

// input end 

// handle
// cong thuc tinh luong : luong = so ngay lam * luong mot ngay
var onClick = document.getElementById("onClick");

onClick.onclick = function () {
    var salary = parseInt(dayWorked.value) * salaryDay;

    // handle end
    // output 
    // in ket qua ra man hinh
    var infoSuccess = document.getElementById("infoSuccess");
    infoSuccess.innerHTML = "luong cua ban la :" + salary;
    
}

// -------------- bai 2 --------------
// input
// tao 5 bien chua 5 gia tri so thuc nguoi dung nhap 
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");
var number5 = document.getElementById("number5");
// input end

// handle
// tinh gia tri trung binh 5 so thuc ma nguoi dung da nhap
// lay id cua btn tinh trung binh
var btnAverage = document.getElementById("btnAverage");
// viec ham xu ly tinh trung binh
var handleAvergeSuccess = function (a,b,c,d,e) {
    return (parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)) / 5;
}
// khi nhan nut tinh xu ly tinh toan  
btnAverage.onclick = function () {
    // dat bien gan ket qua
    var success;
    // gan ket qua vao bien
    console.log(number1.value);
    success = handleAvergeSuccess(number1.value, number2.value, number3.value, number4.value, number5.value);
    //handle end
    // output
    // lay id the h4 de in ket qua ra man hinh
    var averageSuccess = document.getElementById("averageSuccess");
    // in ket qua ra man hinh
    averageSuccess.innerHTML = "gia tri trung binh 5 so thuc la: " + success;

};

// -------------- bai 3 --------------
// input
// tao bien chua gia tri so tien nguoi nhap muon doi 
var inputTranslate = document.getElementById("inputTranslate");
// handle
// tao ham xu ly translate
var handleTranslate = function (a) {
    return parseFloat(a) * 23.5;
}
// khi nhan nut xu ly translate
var btnTranslate = document.getElementById("btnTranslate").onclick = function () {
    // tao bien chua ket qua translate
    var resultTranslate = handleTranslate(inputTranslate.value);

    // handle end

    // output
    // in ket qua ra man hinh

    var translateInfo = document.getElementById("translateInfo");
    translateInfo.innerHTML = "so tien do doi ra tien Viet la: " + resultTranslate;
};

// -------------- bai 4 --------------
// input
// tao hai bien chua chieu dai va chieu rong hinh chu nhat ma nguoi dung nhap vao
var heightRectangle = document.getElementById("heightRectangle");
var widthRectangle = document.getElementById("widthRectangle");

// handle 
// tao hai ham xu ly tinh toan dien tich hinh chu nhat va chu vi hinh chu nhat
// tinh dien tich
var handleCircuit = function (a,b) {
    return parseFloat(a) * parseFloat(b);
}
// tinh c
var handleArea = function (a, b) {
    return (parseFloat(a) + parseFloat(b)) * 2;
};
// khi nhan nut xu ly tinh dien tich va chu vi
var btnAreaCircuit = document.getElementById("btnAreaCircuit").onclick = function () {
    // tao hai bien chua hai ket qua
    var resultCircuit = handleCircuit(heightRectangle.value, widthRectangle.value);
    var resultArea = handleArea(heightRectangle.value, widthRectangle.value);
    // handle end

    // output
    // xuat ket qua ra man hinh
    var areaCircuitInfo = document.getElementById("areaCircuitInfo");
    areaCircuitInfo.innerHTML = "chu vi va dien tich hinh chu nhat la: " + "chu vi: " + resultArea + " va " + "dien tich: " + resultCircuit
};

// -------------- bai 5 --------------
// input
// tao mot bien chua so ma nguoi dung nhap
var number = document.getElementById("number");
// xu li khi nguoi nhap ngoai hai chu so 
var numberOnchange = document.getElementById("number").onchange = function () {
    var valueOnchange = parseInt(this.value);
    if (valueOnchange < 10) this.value = 10;
    if (valueOnchange > 99) this.value = 99;

}

// hadle
var btnClick = document.getElementById("btnClick").onclick = function () {
    // tao hai bien chua so hang chuc va hang don vi
    var ten = parseInt(number.value) / 10;
    console.log(ten);
    var unit = parseInt(number.value) % 10;
    // tinh toan tra ra ket qua
    var result = ten + unit
    //handle end
    console.log(result)
    
    //output
    // xuat ket qua ra man hinh
    var numberInfo = document.getElementById("numberInfo").innerHTML = "Tong cua hai chu so la: " + result;

}




