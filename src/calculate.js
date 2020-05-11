const calculate = (books) => {
  const unitPrice = 8;
  let discountCoefficient = calculateDiscountCoefficient(books);

  return books.length * unitPrice * discountCoefficient;
};

const calculateDiscountCoefficient = (books) => {
  const booksSet = new Set(books);

  switch(booksSet.size) {
    case 1: return 1;
    case 2: return 0.95;
    case 3: return .9;
    default: return 0;
  }

}

export default calculate;