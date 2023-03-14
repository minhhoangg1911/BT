const ex61 = () => {
  let n = 5441;
  let themang = n;

  var CheckGiamDan = true;
  let ChuSoCuoi = themang % 10;
  themang = Math.floor(themang / 10);
  console.log("Chu so", n, "co phai giam dan tu trai sang phai hay khong ");
  while (themang !== 0) {
    let ChuSoKeCuoi = themang % 10;
    themang = Math.floor(themang / 10);
    if (ChuSoCuoi > ChuSoKeCuoi) {
      CheckGiamDan = false;
    } else {
      ChuSoCuoi = ChuSoCuoi;
    }
  }
  if (CheckGiamDan) {
    console.log("Dung !");
  } else {
    console.log("Sai");
  }
};
// ex61();
const ex62 = () => {
  let a = 3;
  let b = 5;

  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  console.log("Uoc chung lon nhat cua 2 so la", a);
};
// ex62();

const ex63 = () => {
  let a = 3;
  let b = 7;
  var i = 1;
  while (b < 0);
  var Max = a > b ? a : b;
  var Min = a < b ? a : b;
  if (a === b) {
    return a;
  } else {
    for (i = Max; i < a * b; i++) {
      if (i % a === 0 && i % b === 0) {
        return i;
      }
    }
  }

  console.log("BCNN cua", a, b, "La:", i);
};
// ex63();

const ex67 = () => {
  let x = 2;
  x = -x;
  let S = 0;
  let T = 1;
  let n = 3;

  for (var i = 1; i <= n; i++) {
    T = T * x;
    S = S + T;
  }
  console.log("Tong", -S);
};
// ex67();

const ex68 = () => {
  let x = 2;
  let T = 1;
  let S = 0;
  let n = 2;

  for (var i = 1; i <= n; i++) {
    T = Math.pow(x, 2 * i) * Math.pow(-1, i);
    S = S + T;
  }
  console.log("Tong La", S);
};
// ex68();

const ex69 = () => {
  let x = 2;
  let T = 1;
  let S = 0;
  let n = 5;

  for (var i = 0; i < n; i++) {
    T = Math.pow(x, 2 * i + 1) * Math.pow(-1, i);
    S = S + T;
  }
  console.log("Tong La", S);
};
// ex69();
const ex70 = () => {
  var S = 0;
  let P = 0;
  let n = 3;

  for (var i = 1; i <= n; i++) {
    P = P + i;
    S = S + (1 * Math.pow(-1, 1 + i)) / P;
  }
  console.log("Tong La", S);
};
// ex70()
const ex71 = () => {
  let S = 0;
  let T = 1;
  let M = 0;
  let x = 2;
  let n = 5;
  for (var i = 1; i <= n; i++) {
    T = T * x;
    M = M + i;
    S = S + (Math.pow(-1, i) * T) / M;
  }
  console.log("Tong La", S);
};
// ex71();
const ex72 = () => {
  let S = 0;
  let T = 1;
  let M = 1;
  let x = 2;
  let n = 5;

  for (let i = 1; i <= n; i++) {
    T = T * x;
    M = M * i;
    S = S + (Math.pow(-1, i) * T) / M;
  }
  console.log("Tong La", S);
};
// ex72();
const ex73 = () => {
  let S = 1;
  let T = 1;
  let N = 1;
  let M = 1;
  let x = 2;
  let n = 3;
  for (let i = 1; i <= n; i++) {
    T = Math.pow(x, 2 * i);
    M = i * 2;
    N = N * M * (M - 1);
    S = S + (Math.pow(-1, i) * T) / N;
  }
  console.log("Tong La", -S);
};
// ex73();
const ex74 = () => {
  let S = 1;
  let N = 1;
  let T = 1;
  let x = 2;
  let n = 4;
  let M = 1;

  for (let i = 1; i <= n; i++) {
    T = Math.pow(x, 2 * i + 1);
    M = i * 2 + 1;
    N = N * M * (M - 1);
    S = S + (Math.pow(-1, i + 1) * T) / N;
  }
  console.log("Tong la", S - x);
};
// ex74();

const ex77 = () => {
  let S = 0;
  for (var i = 0; i <= 10; i++) {
    S = S + i;
  }
  console.log("Tong La", S);
};
// ex77();
const ex78 = () => {
  let S = 0;
  let n = 14;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      console.log("uoc chung cua so nguyen duong", n, "La", i);
    }
  }
};
// ex78();
const ex79 = () => {
  let count = 0;
  let n = 4441;
  t = n;
  while (t !== 0) {
    count++;
    t = Math.floor(t / 10);
  }
  console.log("Dem so chu so cua ", n, "La", count);
};
// ex79()
const ex80 = () => {
  let S = 0;
  let T = 1;
  let M = 0;
  let x = 1;
  let n = 2;
  for (var i = 1; i <= n; i++) {
    T = T * x;
    M = M + i;
    S = S + T / M;
  }
  console.log("Tong La",S);
};
// ex80();
