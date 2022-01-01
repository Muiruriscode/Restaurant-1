// use the cleave javascript library to format credit card details
const creditNumber = new Cleave("#cardNumber", {
    creditCard: true,
    delimiter: '-',
})

const cleaveCCV = new Cleave("#ccv", {
    blocks: [3],
  });
  