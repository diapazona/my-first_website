// // allert('Hello')
// // confirm('Вы учите JS?')


// const skill = document.getElementById('skill')
// const islove = document.getElementById('islove')
// const string = document.getElementById('string')

// // const skillText = prompt('Какой язык вы учите?','Пока не в курсе')
// // const isLoveValue = confirm('Вы любите изучаемый язык?')

// // console.log(isLoveValue)

// // skill.innerText = skillText
// // islove.innerText = isLoveValue
// string.innerHTML = 'str'

// let a = 7
// const b = 8

//string
// const str1 = 'I\'m OK'
// const str2 = 'text'
// const str3 = `I\'m \nsay ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)

//NUMBER
//+ - * / **
// const num1 = 75 + 15
// const num2 = 49 * 9
// alert(num2)
// console.log(typeof '5')

// const rem = 7 + 8 * "a"
// console.log(rem)
// Not a number
// const inf = 17/0

//BIGINT
// const bigint = 1031231236555433333333333n
// console.log(bigint)
//BOOLEAN
// true / false
// > < >= <= >== <== == ===
// const bool = 'a' > 'AAA'
// console.log(bool)

//NULL
// let empty = null
// console.log(empty, typeof empty)

//UNDERFINED
// let box
// console.log(box, typeof box)

//SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//OBJECT
// const obj = {
//     name: 'Sasha',
//     age: 19,
//     isHappy: true,
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = 'google'
// // console.log(obj)

// const array = ['Katya', 38, false]
// array[3] = 'facebook'
// console.log(array)
// console.log(array[0])
// const variant = 'option1'
// console.log(5 == '5')
// console.log(5 === '5')
// console.log(null == 0)

// const username = prompt('who you are?', 'anonym')
// // username = null
// if (username === 'admin') {
//     alert('hello boss')
// } else if(username === 'anonym'){
//     alert('I don\'t know you')
// } else if ('!username'){
//     alert('You does not exist')
// } else {
//     alert(`Hi ${username}`)
// }

// const username = prompt('who you are?', 'anonym')
// // username = null
// if (username === 'admin') {
//     alert('hello boss')
// } else if(username === 'anonym'|| !username){
//     alert('I don\'t know you')
// } else {
//     alert(`Hi ${username}`)
// }

// const counts = prompt('До скольки вы хотите посчитать?', 10)
// let i = 0
// while(i <= counts){
//     console.log(i++)
//     // i +=1
//     // i++
//     // ++i
// }

// do {
//     console.log(i++)
// }while(i <= counts)
// console.log(i)

// const arr = []
// arr.push(7)
// console.log(arr)

// for (let i = 1; i<= 50; ++i){
//     arr.push(i)
// }
// console.log(arr)
// arr[17] = 'adfj'
// console.log(arr)

// const newArr = []
// for (elem of arr) {
//     const marker = elem % 3
//     if(!marker){
//         newArr.push(elem)
//     }
// }
// console.log(newArr)
//  const obj = {
//     name: 'Katya',
//     age: 38,
//     city: 'Voronej'
//  }
//  for(key in obj){
//     console.log(key,obj[key])
//  }

//FUNCTION
// declaration
// console.log(scream(15, 10))
// function scream(a, b) {
// const result = a*b
// return result
//     return a * b
// }
// scream() //вызов функции
// expression
// wowScream()
// const wowScream = function(){
//     alert('WOOW')
// }
// wowScream()

// arrow
// const arrow = () => {
//     alert('arrow is in the sky')
// }
// arrow()



// игра
// нажав на кнопку начать игра запускается, генерируется задача, 
//пользователь может ввести ответ, должна появиться кнопка проверить
// нажав кнопку проверить, мы сравниваем ввод пользователя с ответом
// вывести результат и правильное значение, сменить кнопку на начать заново


const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if(Math.random() > 0.5){
    //     symbol = "+"
    // } else {
    //     symbol = "-"
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}


// console.log(randomValue)
const gameElements = document.getElementById('my_game').children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    // btnGame.onclick = () => {
    // console.log("click")
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась"
        userAnswer.value = null
        //генерировать задачу и ответ
        // const task = getTask()
        //показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить"
        toggleGameState()
        //меняю кнопку
        //меняю состояние
    } else {
        //сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        //вывести результат
        userTask.innerText = userTask.innerText + "=" + gameState.rightAnswer
        //вывести поздравление
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        //поменять кнопку и состояние
        btnGame.innerText = "Начать заново"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})

// if (IsPlus){
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else{
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
// console.log(choosedEl.length)
const counterEl = document.querySelector(".choosed_block span")
const choosedState = {
    countElements: 0,
}
const changeCount = (value) => {
    choosedState.countElements += value
    counterEl.innerText = choosedState.countElements
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        changeCount(1)
    } else {
        e.target.className = ""
        changeCount(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
// choosedEl[2].removeEventListener("click", eventFunc)

// for (let i = 0; i < choosedEl.length; i++) {
//     // console.log(choosedEl[i])
//     choosedEl[i].addEventListener("click", (e) => {
//         // console.log("click")
//         //выбрать элемент, т.е. выделить с помощью класса
//         // choosedEl[i].className = "choosed_element"
//         // console.log(e)
//         //запустить счетчик
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             changeCount(1)
//             // counterEl.innerText = +counterEl.innerText + 1
//         } else {
//             e.target.className = ""
//             // counterEl.innerText = counterEl.innerText - 1
//             changeCount(-1)
//         }
//     })
// }
// const timeIsOver = () =>{
//     alert("Время вышло!")
// }




// setTimeout(timeIsOver, 2000)
// const alarm = setInterval(timeIsOver, 3000)
// const alarm = setInterval(()=>{
//     let wantToSleep = confirm("Хотите ли спать?")
//     if (wantToSleep){
//         console.log("tic")
//     } else{
//         clearInterval(alarm)
//     }
// },3000)

// clearInterval(alarm)


// console.log("1")
// setTimeout(()=> {
//     console.log("2")
// },0)
// console.log("3")

const postBlock = document.querySelector(".posts_block-container")
const showPostBTN = document.querySelector(".posts_block button")

const func = () => 5


function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postTitle.innerText = title
    postBody.innerText = body

    postItem.append(postTitle, postBody)
    postBlock.append(postItem)
}

function getPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())

    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)

        }
        // addPost(data[7].title, data[7].body)
        // console.log(data)
    })
    .catch(err => console.log(err.message)
    )
}

showPostBTN.onclick = () => {getPost()}


// function createPost(title, body, userID) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify ({
//             title,
//             body,
//             userID,
            
//         }),
//         header: {
//             'Content-type': 'application/json; charset=UTF-8'
//         },
//     })
//         .then(res => {
//             console.log(res)
           
//         })
//         .catch(err => console.log(err.message))
// }
// createPost("title", "body, 15")
