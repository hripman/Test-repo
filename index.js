/**
 * Created by rips on 09.04.2017.
 */
var mul = 1;

for (var i = 1; i < 10; ++i) {
    mul *= i;
}

console.log(mul);

localStorage.setItem('mul', mul);
