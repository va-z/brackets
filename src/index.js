module.exports = function check(str, bracketsConfig) {
    const map = new Map(bracketsConfig);
    const stack = [];

    for (let char of str) {
        // same principle, but w/ a useless optimization:
        //
        // if (!map.has(char) && char !== map.get(stack[stack.length - 1]))
        //     return false;
        // else if (char === map.get(stack[stack.length - 1])) stack.pop();
        // else stack.push(char);

        if (char === map.get(stack[stack.length - 1])) stack.pop();
        else stack.push(char);
    }

    return !stack.length;
};
