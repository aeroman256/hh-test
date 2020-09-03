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


//Проверка длины строк
const lengthCheck = (str1, str2) => {
  return str1.length !== str2.length
}
//Функция создания структуры данных для входящей строке
const createObj = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++){
    const letObj = {
      letter: '',
      idxs: []
    }
    letObj.letter = arr[i]
    for (let k = 0; k < arr.length; k++){
      if (arr[i] === arr[k]){
        //собираем индексы символа в массив
        letObj.idxs.push(k)
      }
    }
    result.push(letObj)
  }
  return result
}
//анализируем данные на возможность замены.
const analysData = (arrDataInLine, outLine, arrVar) => {
  for (key of arrVar){
    //массив для сравнения элементов в выходной строке
    const currentArr = []
    //если символ по данному индексу повторяется всего лишь раз, мы можем его заменить по условию 3*
    if (arrDataInLine[key].idxs.length === 1){
      continue
    }
    for (idx of arrDataInLine[key].idxs){
      currentArr.push(outLine[idx])
    }
    //если массив заменяемых элементов в входной строке содержит более 1ого уникального символа, замена по условию 3* не возможна.
    const unqCurrentArr = new Set(currentArr)
    if (unqCurrentArr.size > 1) {
      return false
    }
  }
  return true
}


//Получаем массив индексов символов, которые различаются во входящих данных относительно результата
const arrIdxsVariousLetters = (line, outLine) => {
  const result = []
  for (let i = 0; i < line.length; i++){
    if (line[i] !== outLine[i]){
      result.push(i)
    }
  }
  return result
}

//Main function
const result = (realLine) => {
  //Пеобразуем входные данные в массивы
  const arrRealLine = realLine.split(" ").map(str => str.split(''))
  const inLine = arrRealLine[0]
  const outLine = arrRealLine[1]
  //Проверяем длинну входного и выходного массива
  if (lengthCheck(inLine, outLine)) {
    return 0
  }
  //Создание структуры данных для анализа
  //Получаем массив объектов вида {letter: 'а', idxs:[]}. Массив idxs содержит индексы символа в строке.
  const arrDataInLine = createObj(inLine)
  if (analysData(arrDataInLine, outLine, arrIdxsVariousLetters(inLine, outLine))){
    return 1
  }
  return 0
}

// input Data 
const realLine = 'ббааппрр ррааппбб'
// Call main function
console.log(result(realLine))








//console.log(result(line, outLine))




//Должны знать, совпадают ли индексы повторяющихся символов 
//во входящих и выходящих данных и совпадают ли сами символы

// 