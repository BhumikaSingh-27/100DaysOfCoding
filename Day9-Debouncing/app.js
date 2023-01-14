//DAY9
//deboucing
function mydebouncing(fun, d) {
    let timer;
    return function () {
      if (timer) clearTimeout(timer);
  
      // btn.disabled = true;
      timer = setTimeout(() => {
        fun();
      }, d);
    };
  }
  
  let counter = 1;
  const getData = mydebouncing(function () {
    console.log("debouncing", counter++);
    // btn.disabled = false;
  }, 1000);

  
  //throtling
  const btn = document.querySelector("#button");

function mythrottling(fun, d) {
  return function () {
    btn.disabled = true;
    setTimeout(() => {
      fun();
    }, d);
  };
}

let counter = 1;
const getData = mythrottling(function () {
  console.log("throttling", counter++);
  btn.disabled = false;
}, 1000);