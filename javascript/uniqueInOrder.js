// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Solution 1 :

var uniqueInOrder=function(iterable){
  if (Array.isArray(iterable)) iterable=iterable.join('');
  return iterable.replace(/[^\w\s]|(.)(?=\1)/g, '').split('').map(i => isNaN(i)? i: parseInt(i, 10));
}

// Solution 2 :

var uniqueInOrder=function(iterable){
  if (!Array.isArray(iterable)) iterable=iterable.split('');
  return iterable.filter((element, index) => element != iterable[index-1]);
}
