var m = '1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()|}{?><~'.split('');

function randArray(m, len) {
    m.sort(function () {
        return Math.random() - 0.5;
    });
    return m.slice(0, len);
}

console.log(randArray(m, 10).join(''));