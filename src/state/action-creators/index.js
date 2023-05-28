export const updateButtonText = (text) => {
    return (dispact)  => {
      dispact({
         type : 'deposit',
         payload : text
      })
    }
}
