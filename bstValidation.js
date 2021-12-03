//AlgoExpert


const validateBST = (tree, minValue=-Infinity, maxValue=Infinity) => {

  if ( tree === null ) return true;
  if ( tree.value < minValue || tree.value >= maxValue ) return false;

  return validateBST(tree.left, minValue, tree.value) && validateBST(tree.right, tree.value, maxValue);
}