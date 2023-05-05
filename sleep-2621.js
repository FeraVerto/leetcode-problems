async function sleep(millis) {
    let promise = new Promise ((res, rej) => {
        setTimeout(() => res, millis)
    })

    return await promise
    //return await setTimeout(() => {}, millis)
}

let t = Date.now();
sleep(1000).then(() => {
  console.log(Date.now() - t);
});