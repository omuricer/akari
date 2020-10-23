class Cookie {
  set(key, val) {
    document.cookie = key + '=' + val;
  }
  get(key) {
    var cookies = document.cookie; //全てのcookieを取り出して
    var cookiesArray = cookies.split(';'); // ;で分割し配列に

    for (var c of cookiesArray) {
      //一つ一つ取り出して
      var cArray = c.split('='); //さらに=で分割して配列に
      if (cArray[0].trim() == key) {
        // 取り出したいkeyと合致したら
        return cArray[1]; // [key,value]
      }
    }
  }
}
export let cookie = new Cookie();
