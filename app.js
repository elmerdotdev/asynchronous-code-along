setTimeout(() => {
  console.log("I'm a timeout!")
}, 1000)

// setTimeout(FUNC, DELAY)

const timer = setInterval(() => {
  console.log("I'm an interval!")
}, 1000)

// setInterval(FUNC, INTERVAL)

setTimeout(() => {
  clearInterval(timer)
}, 5500)

// const sayName = (firstname, lastname) => {
//   console.log(`Hi I'm ${firstname} ${lastname}`)
// }

// setTimeout(sayName, 2000, "John", "Smith")

const add = (number, callbackFunc) => {
  return callbackFunc(number + 5)
}

const sub = (number, callbackFunc) => {
  return callbackFunc(number - 5)
}

add(10, (resultAdd) => {
  if (resultAdd > 10) {
    sub(resultAdd, (resultSub) => {
      console.log(resultSub)
    })
  }
})