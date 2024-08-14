function formValidate() {
    // Mendapatkan nilai dari form
    const gender = document.querySelector('input[name="gender').value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
    // Validasi input
    if (age === "" || weight === "" || height === "") {
      alert("Silahkan isi semua kolom!");
      return;
    }
    if (age < 18) {
      alert("Kalkulator ini hanya untuk orang dewasa (usia 18 tahun ke atas).");
      return;
    }
    if (weight <= 0 || height <= 0) {
      alert("Berat badan dan tinggi badan harus lebih dari 0.");
      return;
    }
  
    // Menghitung BMI
    const bmi = calculateBMI(weight, height);
  
    // Menampilkan hasil
    displayBMIResult(bmi);
  }
  
  function calculateBMI(weight, height) {
    // Konversi tinggi badan ke meter
    const heightMeter = height / 100;
  
    // Menghitung BMI
    const bmi = weight / (heightMeter * heightMeter);
  
    // Mengembalikan nilai BMI
    return bmi;
  }
  
  function displayBMIResult(bmi) {
    // Menampilkan hasil BMI
    const bmiResult = document.querySelector('.bmi-value');
    const bmiCategory = document.querySelector('.bmi-category');
    bmiResult.textContent = bmi.toFixed(2);
  
    // Menentukan kategori BMI
    let category;
    if (bmi < 18.5) {
      category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Kelebihan Berat Badan";
    } else {
      category = "Obesitas";
    }
  
    bmiCategory.textContent = category;

  }