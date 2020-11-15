let burgerBtn = document.querySelector(".fas");
let subNav = document.querySelector(".subNav");

burgerBtn.addEventListener("click", (e) => {
  subNav.classList.toggle("mystyle");
});

const arr = [
  "arbetsplatsskyltar.jpg",
  "banderoll.jpg",
  "beachflaggor.jpg",
  "broschyr.jpg",
  "broschystall.jpg",
  "case-and-counter.jpg",
  "flagstand.jpg",
  "folder.jpg",
  "golvdekal.jpg",
  "info-stand.jpg",
  "ritningar_tyvek.jpg",
  "utstallning_broschyrstall_rollup_disk_popup.jpg",
  "Utstallningmonter.jpg",
  "vepa.jpg",
  "zipperwall.jpg",
];

const array = arr.sort(() => Math.random() - Math.random()).slice(0, 5);

let img1 = (document.querySelector(
  ".img1"
).src = `./images/products/${array[0]}`);
let img2 = (document.querySelector(
  ".img2"
).src = `./images/products/${array[1]}`);
let img3 = (document.querySelector(
  ".img3"
).src = `./images/products/${array[2]}`);
let img4 = (document.querySelector(
  ".img4"
).src = `./images/products/${array[3]}`);
let img5 = (document.querySelector(
  ".img5"
).src = `./images/products/${array[4]}`);
