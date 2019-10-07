// 处理错误
export function handleErr(error) {
  switch (error.type) {
    case 'error':
      error instanceof ErrorEvent ? reportCaughtError(error) : reportResourceError(error)
      break
    case 'unhandledrejection':
      // reportPromiseError(error)
      break
  }
}

function reportCaughtError(error) {
  console.log(error)
}

function reportResourceError(error) {
  console.log(error)
}
