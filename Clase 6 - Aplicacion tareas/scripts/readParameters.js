let parameters = {};
function readParams() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  let paramsIter = new URLSearchParams(url.search);
  let paramsArray = Array.from(paramsIter);
  for (elem of paramsArray) {
    parameters[elem[0]] = elem[1];
  }
}

readParams();
