/*

Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

Example:
solution(2, 20) -> [16]
16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

Input:
n - integer (2 ≤ n ≤ 10^14)
m - integer (2 ≤ m ≤ 10^18)
NOTE: In Rust, the bounds are (2 ≤ n ≤ 2^51), (20 ≤ m ≤ 2^52).

Output:
result - array of integers



*/

function divisible3Numbers(c, m) {
    c = BigInt(c);
    m = BigInt(m);
    let result = [];
    function isPrime(num) {
      num = Number(num);
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
    for (let i = BigInt(parseInt(Math.sqrt(Math.sqrt(Number(c))))); i*i*i*i <= m; i++) {
      if (isPrime(i)) {
        let f = i * i * i * i;
        if (f >= c && f <= m) result.push(f);
      }
    }
    return result;
  }

export { divisible3Numbers };