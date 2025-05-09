function fib(n) {
    const memo = [];

    function helper(k) {
        if (memo[k] !== undefined) return memo[k];
        if (k === 0) return (memo[0] = 0);
        if (k === 1) return (memo[1] = 1);
        memo[k] = helper (k - 1) + helper(k - 2);
        return memo[k];
    }
    helper(n);
    for (let i = 0; i <= n; i++){
        if(memo[i] === undefined) helper(i);
    }
    
    return memo;
}
