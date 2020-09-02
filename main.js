// const readline = require('readline');
// const rl = readline.createInterface(process.stdin, process.stdout);
// rl.on('line', (line) => {
//     // Введенная строка в переменной line, тут можно написать решение
//     const result = "Hello"
//     console.log(String(result));
//     rl.close();
//     return;
// }).on('close', () => process.exit(0));

// На вход подается 2 строки. Нужно определить, можно ли превратить первую строку во вторую, заменяя одни буквы на другие, с учетом следующих правил:

// - участвуют только буквы русского алфавита а-я;
// - все буквы в нижнем регистре;
// - за один шаг можно преобразовать все вхождения одной буквы в другую.

// Входные данные
// Входная информация поступает из стандартного ввода в виде одной строки. В этой строке содержатся две подстроки, разделенные пробелом. Ваше решение должно учитывать вариант, когда на вход поданы строки разной длины. Некорректные данные на вход не поступают, дополнительные проверки не требуются.


// Выходные данные
// В качестве ответа в стандартный вывод программа должна выводить 1 (если превратить можно) или 0 (если превратить нельзя).


// Пример 1
// Входные данные: привет прикол
// Выходные данные: 1
// Преобразования (выводить не нужно):
// в ⇒ к (прикет)
// е ⇒ о (прикот)
// т ⇒ л (прикол)


// Пример 2
// Входные данные: ааббдд ддббаа
// Выходные данные: 1
// Преобразования (выводить не нужно):
// д ⇒ я (ааббяя)
// а ⇒ д (ддббяя)
// я ⇒ а (ддббаа)


// Пример 3
// Входные данные: абаб ааах
// Выходные данные: 0
// Преобразовать нельзя, так как 'б' не сможет оказаться одновременно 'а' и 'х'.


const equalsStr = (str1, str2) => {
  return str1 == str2
}

const createObj = (arr) => {
  const result = []
  const uniqArr = new Set(arr)
  
  for (letter of uniqArr){
    const letObj = {
      letter: '',
      idxs: []
    }
    letObj.letter = letter
    for (let k = 0; k < arr.length; k++){
      if (letter === arr[k]){
        //добавляем индекс символа
        letObj.idxs.push(k)
      }
    }
    result.push(letObj)
  }
  return result
}

const analysData = (arrDataInLine, arrDataOutLine) => {
  for (let i = 0; i < arrDataOutLine; i++) {
   
  }
}

//Сравнить длину строк
const lengthCheck = (str1, str2) => {
  return str1.length !== str2.length
}
//Должны знать индексы символов, которые различаются
const arrIndicesVariousLetter = (line, outLine) => {
  const result = []
  for (let i = 0; i < line.length; i++){
    if (line[i] !== outLine[i]){
      result.push(i)
    }
  }
  console.log("arrIndicesVariousLetter ", "result =", result)
  return result
}

const result = (realLine) => {
  const arrRealLine = realLine.split(" ").map(str => str.split(''))
  const inLine = arrRealLine[0]
  const outLine = arrRealLine[1]
  if (lengthCheck) {
    return 0
  }
  const arrDataInLine = createObj(inLine)
  const arrDataOutLine = createObj(outLine)
  analysData(arrDataInLine, arrDataOutLine)
}


const realLine = 'вабб аааа'
result(realLine)








//console.log(result(line, outLine))




//Должны знать, совпадают ли индексы повторяющихся символов в входящих и выходящи данных и совпадают ли сами символы

// 