const candy = A => {
  let up = [];
  let down = [];

  for(let i = 0; i < A.length; i++) {
      if (i === 0) {
          up.push(1);
      } else {
          up.push(
              A[i] > A[i-1] ?
              up[i-1] + 1 :
              1
          )
      }
  }

  for(let i = A.length - 1; i >= 0; i--) {
      if (i === A.length - 1) {
          down.unshift(1);
      } else {
          down.unshift(
              A[i] > A[i+1] ?
              down[0] + 1 :
              1
          )
      }
  }

  return up.reduce((sum, e, i) => {
      return sum + Math.max(e, down[i]);
  }, 0)
};

