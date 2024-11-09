    const result = document.getElementById('result');

    function app(value) {
        result.value += value;
    }

    function clearCalc() {
        result.value = '';
    }

    function del() {
        result.value = result.value.slice(0, -1);
    }

    function calculate() {
        try {
            result.value = eval(result.value);
        } catch (e) {
            result.value = 'Error';
        }
    }   