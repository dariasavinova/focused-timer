import { TotalTaskHours } from '@/store/slices/taskSlice.ts'

let timerInterval: NodeJS.Timer

const countTimerValue = (timerObject: TotalTaskHours) => {
  if (timerInterval) clearInterval(timerInterval)

  let timerObjectCopy = timerObject

  timerInterval = setInterval(() => {
    if (timerObjectCopy.seconds < 60) {
      timerObjectCopy = { ...timerObjectCopy, seconds: timerObjectCopy.seconds + 1 }
      postMessage(timerObjectCopy)
    } else {
      if (timerObjectCopy.minutes < 60) {
        timerObjectCopy = { ...timerObjectCopy, minutes: timerObjectCopy.minutes + 1, seconds: 0 }
        postMessage(timerObjectCopy)
      } else {
        timerObjectCopy = { ...timerObjectCopy, hours: timerObjectCopy.hours + 1, minutes: 0, seconds: 0 }
        postMessage(timerObjectCopy)
      }
    }
  }, 1000)
}

onmessage = message => {
  if (message.data === 'pause') {
    clearInterval(timerInterval)
  } else {
    countTimerValue(message.data)
  }
}