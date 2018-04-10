let print_all_parentheses_rec = function(n, left_count, right_count, output, sol) {

  if (left_count >= n && right_count >= n) {
    sol.push(output.join(''));
  }

  if (left_count < n) {
    output.push('(');
    print_all_parentheses_rec(n, left_count + 1, right_count, output, sol);
    output.pop();
  }
  if (right_count < left_count) {
    output.push(')');
    print_all_parentheses_rec(n, left_count, right_count + 1, output, sol);
    output.pop();
  }
};

let generateParenthesis  = function(n) {
  let sol = [];
  let output = [];
  print_all_parentheses_rec(n, 0, 0, output, sol );
  return sol;
};
