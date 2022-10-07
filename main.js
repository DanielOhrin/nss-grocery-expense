const monthlyExpenses = [ 201.43, 189.22, 132.09, 238.85, 195.41 ]
let totalExpense = 0

for (const expense of monthlyExpenses) {
	totalExpense += expense;
}

// Calculate your average monthly food costs
let avgCalc = 0;
for (const expense of monthlyExpenses) {
  avgCalc += expense;
  if (monthlyExpenses.indexOf(expense) === monthlyExpenses.length - 1) {
    avgCalc /= monthlyExpenses.length;
  }
}

// Make sure you use backticks for multi-line string output
console.log(`On average, I spend ${avgCalc}`, `So far this year, I have spent ${totalExpense} dollars on groceries.`)
console.log(monthlyExpenses.length);