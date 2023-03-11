const ex41 = () => {
  var S = 1;
  for (let i = 0; i <= 1; i++) {
    S = 1 + 1.0 / S;
  }
  console.log("Tong la", S);
};
// ex41();

const ex42 = () => {
  let S = 0;
  let i = 0;
  while (S + i < 4) {
    i++;
    S = S + i;
  }
  console.log("Gia tri k lon nhat de S(k) = 1 + 2 + ...+ k < n la:", i);
};
// ex42();

const ex43 = () => {
  var n = 100;

  var sochuso;

  sochuso = 0;
  var themang = n;

  if (n === 0) sochuso = 1;
  while (themang !== 0) {
    sochuso = sochuso + 1;
    themang = Math.floor(themang / 10);
  }
  console.log("So chu so cua", n, "la", sochuso);
};
// ex43();

const ex44 = () => {
  var themang = 123456;
  var S = 0;

  while (themang !== 0) {
    S = S + (themang % 10);
    themang = Math.floor(themang / 10);
  }

  console.log("Tong La", S);
};
// ex44();
const ex45 = () => {
  var themang = 123;
  var P = 1;
  while (themang != 0) {
    P = P * (themang % 10);
    themang = Math.floor(themang / 10);
  }
  console.log("Tich la", P);
};
// ex45();
const ex46 = () => {
  var n = 1235;
  var themang = n;
  let sochuso = 0;

  if (themang === 0) {
    sochuso = 1;
  }

  while (themang !== 0) {
    if (themang % 2 === 1) {
      sochuso = sochuso + 1;
    }
    themang = Math.floor(themang / 10);
  }
  console.log("so chu so le cua ", n, "La", sochuso);
};
// ex46();
const ex47 = () => {
  let n = 128;
  let themang = n;
  let sochuso = 0;
  var S = 0;

  while (themang !== 0) {
    if (themang % 2 === 0) {
      S = S + (themang % 10);
    }
    themang = Math.floor(themang / 10);
  }
  console.log("Tong cac chu so chan cua ", n, "La", S);
};
// ex47();
const ex48 = () => {
  let n = 135;
  let themang = n;
  let sochusole = 0;
  let S = 1;

  while (themang !== 0) {
    if (themang % 2 === 1) {
      S = S * (themang % 10);
    }
    themang = Math.floor(themang / 10);
  }
  console.log("Tich cac chu so le cua", n, "La", S);
};
// ex48();
const ex49 = () => {
  var n = 5223;
  let themang = n;
  let i = 0;
  while (themang !== 0) {
    i = themang % 10;
    themang = Math.floor(themang / 10);
  }
  console.log("Chu so dau tien la cua", n, i);
};
// ex49()

const ex50 = () => {
  var n = 12345;
  var SoNghichDao = 0;

  console.log("So dao nguoc cua", n, "La:");

  while (n !== 1) {
    console.log(n % 10);
    n = Math.floor(n / 10);
  }
  console.log(n);

  //   do {
  //     console.log(n % 10);
  //   } while ((n = Math.floor(n / 10)));
};
// ex50();

const ex51 = () => {
  let n = 54371;
  let themang = n;
  let max = 0;
  let i = 0;

  if (themang === 0) {
    max = 0;
  }

  while ((themang = Math.floor(themang / 10))) {
    i = themang % 10;
    if (i > max) {
      max = i;
    }
  }
  console.log("Chu so lon nhat cua", n, "La", max);
};
// ex51();
const ex52 = () => {
  let n = 54372;
  let themang = n;
  let min = 0;
  let i = 0;

  if (themang !== 1) {
    min = 0;
  }

  while ((themang = Math.floor(themang / 10))) {
    i = themang % 10;

    if (i < min) {
      min = i;
    }
  }

  console.log("Chu so nho nhat cua", n, "La", min);
};
// ex52();
const ex53 = () => {
  let i = 0;
  let n = 16356;
  let themang = n;
  let dem = 1;
  let max = 0;

  if (themang === 0) {
    dem = 1;
  }
  do {
    i = themang % 10;
    if (i === max) {
      dem++;
    }
    if (i > max) {
      max = i;
    }
  } while ((themang = Math.floor(themang / 10)));
  console.log("So lon Nhat cua ", n, "La", max);
  console.log("So luong chu so lon nhat la", dem);
};
// ex53();
const ex54 = () => {
  let i = 0;
  let n = 54282;
  let themang = n;
  let dem = 1;
  let min = 0;

  if (themang === 0) {
    min = 0;
  }
  do {
    i = themang % 10;
    if (i === min) {
      dem++;
    }
    if (i < min) {
      min = i;
    }
  } while ((themang = Math.floor(themang / 10)));
  console.log("Chu so nho nhat cua", n, "La", min);
  console.log("So luong chu so nho nhat la", dem);
};
// ex54()
const ex56 = () => {
  var n = 1357;
  do {
    if (n < 0) {
      console.log("n phai lon hon 0");
    }
  } while (n < 0);
  console.log("Kiem tra N co phai so le hay khong", n);

  var check = true;

  while ((n = Math.floor(n / 10))) {
    if ((n % 10) % 2 === 0) {
      check = false;
      break;
    }
  }
  if (check === true) {
    console.log("Dung !");
  } else {
    console.log("Sai");
  }
};
// ex56()

const ex57 = () => {
  var n = 2458;
  var check = true;
  console.log("Kiem Tra n co phai toan chu so chan hay khong", n);
  while ((n = Math.floor(n / 10))) {
    if ((n % 10) % 2 === 1) {
      check = false;
      break;
    }
  }
  if (check === true) {
    console.log("Dung !");
  } else {
    console.log("Sai !");
  }
};
// ex57();

const ex59 = () => {
  let n = 121;
  let themang = n;
  let SoNghichDao = 0;

  while (themang !== 0) {
    SoNghichDao = SoNghichDao * 10 + (themang % 10);
    themang = Math.floor(themang / 10);
  }
  if (SoNghichDao === n) {
    console.log(n, "Co phai la doi so hay ko:", "Dung !");
  } else {
    console.log(n, "Co phai la doi so hay ko:", "Sai !");
  }
};
// ex59();

const ex60 = () => {
  let n = 12346;
  let themang = n;

  var CheckTangDan = true;
  var ChuSoCuoi = themang % 10;
  themang = Math.floor(themang / 10);
  console.log("Cac chu so ", n, "co tang dan tu trai sang phai hay khong !");
  while (themang !== 0) {
    var ChuSoKeCuoi = themang % 10;
    themang = Math.floor(themang / 10);
    if (ChuSoCuoi < ChuSoKeCuoi) {
      CheckTangDan = false;
      break;
    } else {
      ChuSoCuoi = ChuSoKeCuoi; // cập nhật lại chứ số  cho lần so sánh tiếp
    }
  }
  if (CheckTangDan) {
    console.log("Dung !");
  } else {
    console.log("Sai !");
  }
};
ex60();
