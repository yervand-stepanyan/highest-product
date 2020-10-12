import React from 'react';

import Input from '../../components/Input';

function Main() {
  const list = [1, 10, 2, 6, 5, 3];

  const highestProduct = array => {
    const isListValid = array.every(
      item => typeof item === 'number' && Number.isInteger(item)
    );

    if (isListValid) {
      const sortedList = [...array].sort((a, b) => b - a);
      const highestThreeNumbers = sortedList.slice(0, 3);

      return highestThreeNumbers.reduce((acc, next) => acc * next, 1);
    }

    return 'Incorrect list of numbers';
  };

  return (
    <div>
      <Input />
      <div>{highestProduct(list)}</div>
    </div>
  );
}

export default Main;
