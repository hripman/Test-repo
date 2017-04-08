/**
 * Created by rips on 09.04.2017.
 */
var sum = 20;

for (var i = 0; i < 10; ++i) {
    sum += i;
}

console.log(sum);

localStorage.setItem('sum', sum);
