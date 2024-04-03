let muridSelect = document.getElementById("master-murid");
let yayasanSelect = document.getElementById("master-yayasan");
let adminSelect = document.getElementById("master-admin");

let muridContent = document.getElementById("md-murid");
let yayasanContent = document.getElementById("md-yayasan");
let adminContent = document.getElementById("md-admin");
muridSelect.onclick = function () {
  if (!muridSelect.classList.contains("active")) {
    // tab
    muridSelect.classList.add("active");
    yayasanSelect.classList.remove("active");
    adminSelect.classList.remove("active");
    // content
    muridContent.classList.remove("d-none");
    yayasanContent.classList.add("d-none");
    adminContent.classList.add("d-none");
  }
};
yayasanSelect.onclick = function () {
  if (!yayasanSelect.classList.contains("active")) {
    muridSelect.classList.remove("active");
    yayasanSelect.classList.add("active");
    adminSelect.classList.remove("active");
    // content
    muridContent.classList.add("d-none");
    yayasanContent.classList.remove("d-none");
    adminContent.classList.add("d-none");
  }
};
adminSelect.onclick = function () {
  if (!adminSelect.classList.contains("active")) {
    muridSelect.classList.remove("active");
    yayasanSelect.classList.remove("active");
    adminSelect.classList.add("active");
    // content
    muridContent.classList.add("d-none");
    yayasanContent.classList.add("d-none");
    adminContent.classList.remove("d-none");
  }
};

// dd-kelas-murid
let klsTitle = document.getElementById("kelas-title");

let kls1 = document.getElementById("kls-1");
let kls2 = document.getElementById("kls-2");
let kls3 = document.getElementById("kls-3");
let kls4 = document.getElementById("kls-4");
let kls5 = document.getElementById("kls-5");
let kls6 = document.getElementById("kls-6");

let klsSelected = document.getElementById("kelas-murid").value;

kls1.onclick = function () {
  klsTitle.innerText = kls1.innerText;
  klsSelected = "1";
};

kls2.onclick = function () {
  klsTitle.innerText = kls2.innerText;
  klsSelected = "2";
};

kls3.onclick = function () {
  klsTitle.innerText = kls3.innerText;
  klsSelected = "3";
};

kls4.onclick = function () {
  klsTitle.innerText = kls4.innerText;
  klsSelected = "4";
};

kls5.onclick = function () {
  klsTitle.innerText = kls5.innerText;
  klsSelected = "5";
};

kls6.onclick = function () {
  klsTitle.innerText = kls6.innerText;
  klsSelected = "6";
};
