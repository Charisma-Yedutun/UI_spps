let muridSelect = document.getElementById("master-murid");
let yayasanSelect = document.getElementById("master-yayasan");
let adminSelect = document.getElementById("master-admin");

muridSelect.onclick = function () {
  if (!muridSelect.classList.contains("active")) {
    muridSelect.classList.add("active");
    yayasanSelect.classList.remove("active");
    adminSelect.classList.remove("active");
  }
};
yayasanSelect.onclick = function () {
  if (!yayasanSelect.classList.contains("active")) {
    muridSelect.classList.remove("active");
    yayasanSelect.classList.add("active");
    adminSelect.classList.remove("active");
  }
};
adminSelect.onclick = function () {
  if (!adminSelect.classList.contains("active")) {
    muridSelect.classList.remove("active");
    yayasanSelect.classList.remove("active");
    adminSelect.classList.add("active");
  }
};
