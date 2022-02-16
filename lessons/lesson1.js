function sumAll(...args) {
    console.log(args)
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i]
    }
    console.log(sum);
}

sumAll(10, 25, 5, 30, 5);