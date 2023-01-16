/*
  1.Buatlah sebuah kode javascript dari pseudocode berikut

    STORE suhu WITH ANY NUMBER
    IF suhu GREATER THAN 37.5 THEN
      DISPLAY "Anda Demam"
    ELSE IF suhu GREATER THAN 37 THEN
      DISPLAY "Anda Terindikasi Demam"
    ELSE 
      DISPLAY "Anda sehat"
    END IF
*/
// Tulis kode dibawah sini
 let suhu = 38
 if(suhu > 37.5){
  console.log("Anda Demam");
}
  else if(suhu > 37){
    console.log("Anda Terindikasi Demam");
  }
  else{
    console.log("Anda sehat");
  }
/*
  2. Untuk soal ini tidak boleh uncomment code dan tidak boleh dijalankan. Kalian wajib menganalisa dan membaca alur kode untuk mendapatkan outputnya.

  Apa output dari kode javascript berikut ? 

  var money = 500000
  var hargaSepatu = 500000
  var hargaSendal = 100000
  if (money >= hargaSepatu) {
      console.log("Bisa membeli sepatu")
  } else if (money >= 100000) {
      console.log("Bisa membeli sendal")
  } else {
      console.log("Tidak bisa memberli sendal ataupun sepatu")
  }

  - Jawaban : 
  Bisa membeli sepatu
*/

// 3. Buatlah sebuah variabel berisi data angka berapapun dari 1 - 100 dengan nama "angka1"
let angka1 = 99

// 4. Buatlah sebuah variabel berisi data angka berapapun dari 1 - 100 dengan nama "angka2"
let angka2 = 1
// 5. Buatlah sebuah variabel dengan nama "total" yang isinya adalah hasil perkalian "angka1" dan "angka2"
let total = angka1 * angka2
console.log(total);

// 6. Buatlah kondisi apabila "total" lebih dari 500 maka tampilkan di terminal "angka besar". Apabila "total" antara 100 - 499 maka tampilkan di terminal "angka sedang". Apabila "total" dibawah 100 maka tampilkan di terminal "angka kecil".
if(total > 500){
  console.log("angka besar");
}
  else if(total >= 100 && total < 500){
console.log("angka sedang");
  }
else{
  console.log("angka kecil");
}
