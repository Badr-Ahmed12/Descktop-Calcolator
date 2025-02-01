 let output = document.getElementById("output");
    let history = document.getElementById("history");
    let currentInput = "";
    let previousOperations = [];

    // إضافة مدخلات للعرض
    function appendCharacter(character) {
      if (currentInput === "0" && character !== '.') {
        currentInput = character;
      } else {
        currentInput += character;
      }
      output.innerText = currentInput;
    }

    // مسح الإخراج
    function clearOutput() {
      currentInput = "0";
      output.innerText = currentInput;
    }

    // حساب النتيجة
    function calculate() {
      try {
        // إضافة العملية الحالية إلى سجل العمليات
        const result = eval(currentInput);
        previousOperations.push(`${currentInput} = ${result}`);
        
        // تحديث السجل
        updateHistory();
        
        // عرض النتيجة
        currentInput = result.toString();
        output.innerText = currentInput;
      } catch (error) {
        output.innerText = "خطأ";
        currentInput = "0";
      }
    }

    // تحديث سجل العمليات
    function updateHistory() {
      history.innerHTML = previousOperations.slice(-5).reverse().join('<br>');
    }
