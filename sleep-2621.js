async function sleep(millis) {
    let promise = new Promise ((res, rej) => {
        setTimeout(() => res(), millis)
    })

    return await promise
}

let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t);
});