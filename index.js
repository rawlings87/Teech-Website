const body = document.querySelector('body');
body.style.fontFamily = "'Helvetica Neue', sans-serif";
body.style.fontSize = "16px";
body.style.lineHeight = "1.5";
body.style.color = "#333";
body.style.backgroundColor = "#fff";

const a = document.querySelector('a');
a.style.color = "#007bff";
a.style.textDecoration = "none";

const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headers.forEach(header => {
header.style.marginTop = "0";
header.style.marginBottom = "0.5rem";
header.style.fontWeight = "700";
header.style.lineHeight = "1.2";
});

const p = document.querySelector('p');
p.style.marginTop = "0";
p.style.marginBottom = "1rem";

const container = document.querySelector('.container');
container.style.maxWidth = "960px";
container.style.paddingRight = "15px";
container.style.paddingLeft = "15px";
container.style.marginRight = "auto";
container.style.marginLeft = "auto";

const row = document.querySelector('.row');
row.style.display = "flex";
row.style.flexWrap = "wrap";
row.style.marginRight = "-15px";
row.style.marginLeft = "-15px";

const col = document.querySelector('.col');
col.style.flexBasis = "0";
col.style.flexGrow = "1";
col.style.maxWidth = "100%";

const header = document.querySelector('header');
header.style.backgroundColor = "#333";
header.style.color = "#fff";
header.style.padding = "10px 0";

const headerH1 = document.querySelector('header h1');
headerH1.style.margin = "0";
headerH1.style.fontSize = "36px";
headerH1.style.fontWeight = "700";
headerH1.style.textAlign = "center";

const nav = document.querySelector('nav');
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.backgroundColor = "#007bff";
nav.style.padding = "10px 0";

const navUl = document.querySelector('nav ul');
navUl.style.margin = "0";
navUl.style.padding = "0";
navUl.style.display = "flex";

const navLi = document.querySelectorAll('nav li');
navLi.forEach(li => {
li.style.listStyle = "none";
li.style.marginRight = "20px";
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.style.color = "#fff";
link.style.fontSize = "18px";
link.style.fontWeight = "700";
link.style.textTransform = "uppercase";
});

const banner = document.querySelector('.banner');
banner.style.backgroundImage = "url('https://example.com/banner.jpg')";
banner.style.backgroundRepeat = "no-repeat";
banner.style.backgroundSize = "cover";
banner.style.height = "400px";
banner.style.display = "flex";
banner.style.alignItems = "center";
banner.style.justifyContent = "center";

const bannerH2 = document.querySelector('.banner h2');
bannerH2.style.fontSize = "48px";
bannerH2.style.fontWeight = "700";
bannerH2.style.textAlign = "center";
bannerH2.style.color = "#fff";
bannerH2.style.textShadow = "2px 2px #333";

const main = document.querySelector('main');
main.style.padding = "40px 0";

const services = document.querySelector('.services');
services.style.display = "flex";
services.style.flexWrap = "wrap";
services.style.justifyContent = "space-between";

const service = document.querySelectorAll('.service');
service.forEach(item => {
item.style.flexB