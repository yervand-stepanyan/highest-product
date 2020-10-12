const filterInput = text => {
  const spacesRemovedText = text.replace(/\s/g, '');
  const bracketsRemovedText = spacesRemovedText.replace(/[\])}[{(]/g, '');
  const multipleCommasReplacedText = bracketsRemovedText.replace(/[, ]+/g, ',');

  return multipleCommasReplacedText.replace(/^,|,$/g, '');
};

export default filterInput;
