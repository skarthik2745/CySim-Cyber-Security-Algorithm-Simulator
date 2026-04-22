function openTab(name){
document.querySelectorAll(".card").forEach(t=>t.style.display="none");
document.getElementById(name).style.display="block";
}

function toggleInfo(id) {
  let elem = document.getElementById(id);
  
  if(elem.style.display === "none" || elem.style.display === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

window.onload=()=>openTab("caesar");


// ================= CAESAR =================
function shift(t,s){
return t.replace(/[a-z]/gi,c=>{
let b=c<='Z'?65:97;
return String.fromCharCode((c.charCodeAt(0)-b+s)%26+b);
});
}
function caesarEnc(){
c_out.innerText = shift(c_text.value, +c_shift.value);
}
function caesarDec(){
c_out.innerText = shift(c_text.value, 26 - c_shift.value);
}


// ================= VIGENERE =================
function vig(t,k,d){
let r="",j=0;
for(let i=0;i<t.length;i++){
let c=t[i];
if(c.match(/[a-z]/i)){
let b=c<='Z'?65:97;
let shift=(k[j%k.length].toLowerCase().charCodeAt(0)-97)*d;
r+=String.fromCharCode((c.charCodeAt(0)-b+shift+26)%26+b);
j++;
}else r+=c;
}
return r;
}
function vigEnc(){ v_out.innerText = vig(v_text.value, v_key.value, 1); }
function vigDec(){ v_out.innerText = vig(v_text.value, v_key.value, -1); }


// ================= XOR =================
function xorProcess(){
let t=x_text.value,k=x_key.value,res="";
for(let i=0;i<t.length;i++){
res += String.fromCharCode(t.charCodeAt(i) ^ k.charCodeAt(i % k.length));
}
x_out.innerText = res;
}


// ================= ROT13 =================
function rot13(){
rot_out.innerText = shift(rot_text.value, 13);
}


// ================= REVERSE =================
function rev(){
r_out.innerText = r_text.value.split("").reverse().join("");
}


// ================= ATBASH =================
function atbash(){
a_out.innerText = a_text.value.replace(/[a-z]/gi,c=>{
let b=c<='Z'?65:97;
return String.fromCharCode(b + 25 - (c.charCodeAt(0) - b));
});
}


// ================= ALPHABET =================
function toNum(){
let mode = n_mode.value;
let text = n_text.value.toLowerCase();
let r = [];

for(let c of text){
if(c >= 'a' && c <= 'z'){
if(mode=="a1") r.push(c.charCodeAt(0)-96);
else if(mode=="a0") r.push(c.charCodeAt(0)-97);
else if(mode=="z0") r.push(122 - c.charCodeAt(0));
}else{
r.push(c);
}
}

n_out.innerText = r.join(" ");
}

function toChar(){
let mode = n_mode.value;
let arr = n_text.value.split(/\s+/);
let r = "";

for(let n of arr){
n = parseInt(n);
if(!isNaN(n)){
if(mode=="a1") r += String.fromCharCode(n+96);
else if(mode=="a0") r += String.fromCharCode(n+97);
else if(mode=="z0") r += String.fromCharCode(122-n);
}
}

n_out.innerText = r;
}


// ================= NUMBER SYSTEM =================

// TEXT → NUMBER SYSTEM
function toNumber(){
let text = num_text.value;

let bin="",dec="",hex="",oct="";

for(let c of text){
let code = c.charCodeAt(0);

bin += code.toString(2).padStart(8,"0") + " ";
dec += code + " ";
hex += code.toString(16).toUpperCase() + " ";
oct += code.toString(8) + " ";
}

num_out.innerHTML =
"🔵 Binary: " + bin + "<br><br>" +
"🔢 Decimal: " + dec + "<br><br>" +
"🟣 Hex: " + hex + "<br><br>" +
"🟠 Octal: " + oct;
}

function convertToString(){
  try {
    let base = parseInt(num_base.value, 10);
    let input = num_text.value.trim();

    if(input === ""){
      num_out.innerHTML = "⚠️ Please enter numbers";
      return;
    }

    // Normalize input: remove commas, semicolons, tabs, newlines and extra spaces
    input = input.replace(/[\n\r\t,;]/g, " ");
    input = input.replace(/\s+/g, " ").trim();

    let parts = input.split(" ");
    let result = "";

    for(let i = 0; i < parts.length; i++){
      let part = parts[i].trim();
      if(part === "") continue;

      let num = parseInt(part, base);

      if(isNaN(num) || num < 0){
        num_out.innerHTML = `⚠️ Invalid: "${part}" in base ${base}`;
        return;
      }

      if(num > 1114111){
        num_out.innerHTML = `⚠️ Out of range: ${num}`;
        return;
      }

      result += String.fromCharCode(num);
    }

    if(result === ""){
      num_out.innerHTML = "⚠️ No valid numbers found";
    } else {
      num_out.innerHTML = "📝 Text: " + result;
    }
  } catch(e) {
    num_out.innerHTML = "⚠️ Error: " + e.message;
  }
}

// ================= BASE64 =================
function b64enc(){
b_out.innerText = btoa(b_text.value);
}

function b64dec(){
try{
b_out.innerText = atob(b_text.value);
}catch{
b_out.innerText = "Invalid Base64";
}
}


// ================= SHA-256 =================
async function sha256(){
let data = new TextEncoder().encode(s_text.value);
let hash = await crypto.subtle.digest("SHA-256", data);

s_out.innerText = [...new Uint8Array(hash)]
.map(b => b.toString(16).padStart(2,"0"))
.join("");
}