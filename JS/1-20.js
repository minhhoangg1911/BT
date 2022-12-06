function ex1() {
  var s = 0;
  for (var i = 1; i <= 3; i++) {
    s += i;
  }
  console.log("C1", s);
}
ex1();

function ex2() {
  var s = 0;
  for (var i = 1; i < 4; i++) {
    s = s + i * i;
  }
  console.log("C2", s);
}
ex2();

function ex3() {
  var s = 0;
  for (var i = 1; i < 4; i++) {
    s = s + 1 / i;
  }
  console.log("C3", s);
}
ex3();

function ex4() {
  var s = 0;
  for (var i = 1; i <= 8; i++) {
    s = s + 1 / (2 * i);
  }
  console.log("C4", s);
}
ex4();

function ex5() {
  var s = 0;
  for (var i = 0; i <= 8; i++) {
    s = s + 1 / (2 * i + 1);
  }
  console.log("C5", s);
}
ex5();

function ex6() {
  var s = 0;
  for (var i = 1; i <= 8; i++) {
    s = s + 1 / (i * (i + 1));
  }
  console.log("C6", s);
}
ex6();
function ex7() {
  var s = 0;
  for (var i = 0; i <= 8; i++) {
    s = s + i / (i + 1);
  }
  console.log("C7", s);
}
ex7();
function ex8() {
  var s = 0;
  for (var i = 0; i <= 5; i++) {
    s = s + (2 * i + 1) / (2 * i + 2);
  }
  console.log("C8", s);
}
ex8();

function ex9() {
  var s = 1;
  for (var i = 1; i < 5; i++) {
    s = s * i;
  }
  console.log("C9", s);
}
ex9();
function ex10() {
  var s = 0;
  var x = 2;
  for (var i = 1; i < 5; i++) {
    s += Math.pow(x, i);
  }
  console.log("C10", s);
}
ex10();
function ex11() {
  var s = 0;
  var p = 1;
  for (var i = 1; i <= 3; i++) {
    p = p * i;
    s += p;
  }
  console.log("C11", s);
}
ex11();
function ex12() {
  var s = 0;
  var x = 2;
  for (var i = 1; i < 5; i++) {
    s = s + Math.pow(x, i);
  }
}
function ex12() {
  var s = 0;
  var t = 1;
  for (var i = 1; i < 5; i++) {
    t = t * i;
    s = s + t;
  }
  console.log("C12", s);
}
ex12();
function ex13() {
  var s = 0;
  var x = 2;
  var t = 1;
  for (var i = 1; i < 3; i++) {
    t = Math.pow(x, 2 * i);
    s = s + t;
  }
  console.log("C13", s);
}
ex13();
function ex14() {
  var s = 0;
  var t = 1;
  var x = 2;
  for (var i = 0; i < 3; i++) {
    t = Math.pow(x, 2 * i + 1);
    s = s + t;
  }
  console.log("C14", s);
}
ex14();
function ex15() {
  var s = 0;
  var t = 0;
  for (var i = 1; i < 4; i++) {
    t = t + i;
    s = s + 1 / t;
  }
  console.log("C15", s);
}
ex15();
function ex16() {
  var s = 0;
  var t = 1;
  var x = 2;
  var m = 0;
  for (var i = 1; i < 5; i++) {
    t = t * x;
    m = m + i;
    s = s + t / m;
  }
  console.log("C16", s);
}
ex16();

function ex17() {
  var s = 0;
  var t = 1;
  var m = 1;
  var x = 2;

  for (var i = 1; i < 4; i++) {
    t = t * x;
    m = m * i;
    s = s + t / m;
  }
  console.log("C17", s);
}
ex17();

function ex18() {
  var s = 1;
  var t = 1;
  var m = 0;
  var x = 2;
  var n = 1;

  for (var i = 1; i < 4; i++) {
    t = Math.pow(x, (2 * i));
    m = i * 2;
    n = n * m * (m - 1);
    s = s + t / n;
  }
  console.log("C18",s)
}
ex18();
function ex19() {
    var s = 1;
    var t = 1;
    var m = 0;
    var n = 1;
    var x = 2;
    for(var i = 1; i < 4 ; i++) {
        t = Math.pow(x,(2 * i + 1));
        m = i * 2 + 1;
        n = n * m * (m - 1);
        s = s + x + t / n;
    }
    console.log("C19",s);
}
ex19();
function ex20(){
    
    for(var i = 1; i <= 20; i++) {
        if(20 % i === 0) {
            console.log("C20",i)
        }
    }
    
}
ex20();
