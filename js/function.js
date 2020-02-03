
(function(){
   'use strict';

   // Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
    
   let numbers = {
       oneNum: {
           pattern: /^-?\d+(\.\d{1,2})?$/,
           messege: 'Введите первое число',
           value: null
       },
       twoNum: {
            pattern: /^-?\d+(\.\d{1,2})?$/,
            messege: 'Введите второе число',
            value: null
       }
       
   };
            
   
function compareNumbers(numbers){
             
    if(numbers.oneNum.value < numbers.twoNum.value) {
           
        return confirm(`-1`);
           
    }
        else if (numbers.oneNum.value > numbers.twoNum.value) {
            
            return alert(`1`);
            
        }
             else if(numbers.oneNum.value == numbers.twoNum.value) {
            
                 return alert(`0`);
            
            }
};


for(let i in numbers) {
    let option = numbers[i];
    let accepted = false;
    
    do {
        let answer = +prompt(option.messege);
        
        if(option.pattern.test(answer)) {
            accepted = true;
            option.value = answer;
            
        }
        if (isNaN(answer) ||  answer == '' || answer === null){
            answer = +prompt(option.messege);
        } 
        
    }while(!accepted);
}

compareNumbers(numbers);


// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

let num = prompt('Введите числo, факториал которого вы хотите посчитать');
 
function factorial(num) { 
    while (isNaN(num) ||  num == '' ||  num === null || num <= 0) {
        num = prompt('Введите числo, факториал которого вы хотите посчитать');
    }
    return (num != 1) ? num * factorial(num - 1) : 1;
  };
  
  alert(`Факториал выбранного вами числа равняется ${factorial(num)}`);

 



// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 


let nums = {
    num1: {
        pattern: /^-?\d+(\.\d{1,2})?$/,
        messege: 'Введите первое число',
        value: null
    },
    num2: {
         pattern: /^-?\d+(\.\d{1,2})?$/,
         messege: 'Введите второе число',
         value: null
    },
    num3: {
        pattern: /^-?\d+(\.\d{1,2})?$/,
        messege: 'Введите третье число',
        value: null
   }
    
};


function connectNumbers(nums) {
    for (let index in nums) {
        let option = nums[index];
        let accepted = false;
        do{
            let answer = prompt(option.messege);
                if(option.pattern.test(answer)) {
                    accepted  = true;
                    option.value = answer;
                }
        }while(!accepted);
    }
     return alert(`Вы набрали число : ${nums.num1.value}${nums.num2.value}${nums.num3.value}`);
};
    
connectNumbers(nums);

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let lengthOfTheRectangle = prompt('Введите длину прямоугольника');
let widthOfTheRectangle  = prompt('Введите ширину прямоугольника');
let pattern = /^-?\d+(\.\d{1,2})?$/;

function calculateTheAreaOfARectangle(){
    let areaRectangle = lengthOfTheRectangle * widthOfTheRectangle;
    if (pattern.test(lengthOfTheRectangle) && pattern.test(widthOfTheRectangle)) {
        return  alert(`Площадь прямоугольника равна: ${areaRectangle}`);
    }
    if (lengthOfTheRectangle.length == '') {
        areaRectangle = widthOfTheRectangle * widthOfTheRectangle;
        return alert('Площадь квадрата равна: ' + `${areaRectangle}`); 
    }
    if (widthOfTheRectangle.length == '') {
        areaRectangle = lengthOfTheRectangle * lengthOfTheRectangle;
        return alert('Площадь квадрата равна: ' +  `${areaRectangle}`); 
    }
};

calculateTheAreaOfARectangle();

// 5. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными

    
    function perfectNumbers(a, b) {
        
        let oneN = prompt('Введите начало диапазона', '');
        let twoN = prompt('Введите конец диапазона', ''); 

        let perfectNumArr = [];
        let numArr = [];
        let num = 0;
       
        
        for (let n = oneN; n <= twoN; n++) {
            for (let i = 1; i < n; i++) {
                if (n % i == 0) {
                    numArr.push(i);
                }
            }


            for (let i = 0; i < numArr.length; ++i) {
                num += numArr[i]
            }


        if (num == n) {
            perfectNumArr.push(n);
            } else { 
                numArr.length = 0; num = 0;
            }
        
        }

        for (let i = 0; i < perfectNumArr.length; i++) {
            document.write(`${perfectNumArr[i]},`)
        }

        console.log(numArr);
        console.log(num);
        console.log(perfectNumArr);
    }

    perfectNumbers();
    
 
})();




  















            
            
            
       
        
      













 