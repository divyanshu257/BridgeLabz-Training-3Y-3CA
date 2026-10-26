let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);

    function showCount() {
        console.log(`Current Count: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

increment();
increment();
decrement();
increment();