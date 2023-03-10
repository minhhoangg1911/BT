function ex21() {
  var s = 0;
  for (let i = 0; i < 20; i++) {
    if (10 % i === 0) {
      s = s + i;
    }
  }
  console.log("Tổng ước của 10 là", s);
}
// ex21();

function ex22() {
  var s = 1;
  for (var i = 1; i < 20; i++) {
    if (10 % i == 0) {
      s = s * i;
    }
  }
  console.log("Tích ước của 10 là: ", s);
}
// ex22();

function ex23() {
  var count = 0;
  for (var i = 1; i <= 10; i++) {
    if (10 % i === 0) {
      count++;
    }
  }
  console.log("So luong cac uoc so cua 10", count);
}
// ex23();

function ex24() {
  for (var i = 1; i < 10; i++) {
    if (10 % i === 0) {
      if (i % 2 === 1) {
        console.log(i);
      }
    }
  }
}
// ex24();
function ex25() {
  var i = 1;
  var S = 0;
  do {
    if (10 <= 0) {
      console.log("N phai > 0. Xin nhap lai !");
    }
  } while (10 <= 0);
  console.log("Cac uoc so chan cua so 10 la: ");
  while (i <= 10) {
    if (10 % i == 0) {
      if (i % 2 == 0) {
        console.log(i);
        S = S + i;
      }
    }
    i++;
  }
  console.log("Tong cac uoc so chan cua 10 là:", S);
}
// ex25();

function ex26() {
  var i = 1;
  var P = 1;
  do {
    if (9 <= 0) {
      console.log("So nguyen > 0");
    }
  } while (9 <= 0);
  console.log("Tich cac so le cua 10 la:");
  while (i <= 10) {
    if (9 % i === 0) {
      if (i % 2 === 1) {
        console.log(i);
        P = P * i;
      }
    }
    i++;
  }

  console.log("Tich cac so le cua 10 la:", P);
}
// ex26();

function ex27() {
  var i = 1;
  var count = 0;

  console.log("Cac uoc so chan cua 10 la:");
  while (i <= 10) {
    if (10 % i === 0) {
      if (i % 2 === 0) {
        console.log(i);
        count++;
      }
    }
    i++;
  }
  console.log("So luong uoc so chan cua 10 la ", count);
}
// ex27();

function ex28() {
  var i = 1;
  var S = 0;
  console.log("cac uoc so chan cua 10 la:");
  while (i < 9) {
    if (9 % i === 0) {
      console.log(i);
      S = S + i;
    }
    i++;
  }
  console.log("Tong cac uoc nho hon 10 la:", S);
}

// ex28();
function ex29() {
  var i = 1;
  var max = 1;
  console.log("cac uoc so cua so 100");
  while (i <= 100) {
    if (100 % i === 0 && i % 2 === 1) {
      if (i > max) {
        max = i;
      }
      console.log(i);
    }
    i++;
  }
  console.log("uoc so le lon nhat la ", max);
}

// ex29()
function ex30() {
  var i = 1;
  var S = 0;
  while (i < 6) {
    if (6 % i === 0) {
      S = S + i;
    }
    i++;
  }
  if (S === 6) {
    console.log("La so hoan thien");
  } else {
    console.log("Khong la so Hoan thien");
  }
}
// ex30();
function ex31() {
  if (6 < 2) {
    console.log("Khong la so nguyen to");
  } else if (6 === 2) {
    console.log("la so nguyen to");
  } else if (6 % 2 === 0) {
    console.log("khong la so nguyen to");
  } else {
    for (var i = 3; i <= 5; i += 2) {
      if (6 % i === 0) break;
    }
    if (i === 6) {
      console.log("la so nguyen to");
    } else {
      console.log("khong la so nguyen to");
    }
  }
}
// ex31();

function ex32() {
  for (var i = 0; i <= 16; i++) {
    if (16 === 16) {
      console.log("16 la so chinh phuong");
    } else {
      console.log("khong la so chinh phuong");
    }
  }
}

// ex32();
function ex33() {
  var S = 0;

  while (5 < 1);

  for (var i = 2; i <= 25; i++) {
    S = Math.sqrt(25);
  }
  console.log(S);
}
// ex33()

const ex34 = () => {
  var S = 0;
  for (var i = 1; i <= 15; i++) {
    S = Math.sqrt(i + S);
  }
  console.log(S);
};
// ex34();

const ex36 = () => {
  var S = 0;
  var M = 1;
  for (var i = 1; i <= 6; i++) {
    M = M * i;
    S = Math.sqrt(M + S);
  }
  console.log(S);
};
// ex36();

const ex37 = () => {
  var i = 3;
  var S = Math.pow(2.0, 1.0 / 2);
  while (i <= 10) {
    S = Math.pow((i + S) * 1.0, 1.0 / i);
    i++;
  }
  console.log("Tong la:", S);
};

// ex37();
const ex38 = () => {
  var S = Math.pow(1.0, 1.0 / 2);

  for (var i = 1; i <= 10; i++) {
    S = Math.pow((i + S) * 1.0, 1.0 / (i + 1));
  }
  console.log("Tong La:", S);
};

// ex38();

const ex39 = () => {
  var S = 0;
  var M = 1;
  for (var i = 1; i <= 20; i++) {
    M = M * i;
    S = Math.pow((M + S) * 1.0, 1.0 / (i + 1));
  }
  console.log("Tong La:", S);
};
// ex39();
const ex40 = () => {
  var T = 1;
  var S = 0;
  var x = 2;

  for (var i = 1; i <= 10; i++) {
    T = T * x;
    S = Math.sqrt(T + S);
  }
  console.log("Tong La", S);
};
// ex40();
