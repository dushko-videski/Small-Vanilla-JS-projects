//listen for submit
document.getElementById('loan-form').addEventListener('submit', e => {
  //hide results
  document.getElementById('results').style.display = 'none'
  //show loader
  document.getElementById('loading').style.display = 'block'

  setTimeout(calculateResult, 1000)

  e.preventDefault()
})



//calculate results
function calculateResult() {
  //UI variables:
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')

  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInerest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  //calculate monthly payments:
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInerest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    //show results
    document.getElementById('results').style.display = 'block'
    //hide loader
    document.getElementById('loading').style.display = 'none'
  } else {
    showError('Проверете ги внесените параметри !')
  }
}

//show error
function showError(error) {

  //hide results
  document.getElementById('results').style.display = 'none'
  //hide loader
  document.getElementById('loading').style.display = 'none'

  //create div
  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'
  errorDiv.appendChild(document.createTextNode(error))

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  //insert error above heading
  card.insertBefore(errorDiv, heading)

  //clear error after 2 seconds
  setTimeout(clearError, 2000)
}

//clear error
function clearError() {
  document.querySelector('.alert').remove()
} 