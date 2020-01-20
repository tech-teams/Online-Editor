function codeExecution() {
    var htmlCode = document.getElementById("html-content");
    var cssCode = document.getElementById("css-content");
    var jsCode = document.getElementById("js-content");
    var srcCode = document.getElementById("source-code").contentWindow.document;
    //   document.body.onkeyup = function() {
    //     var codeContent =
    //       htmlCode.value +
    //       "<style>" +
    //       cssCode.value +
    //       "</style>" +
    //       "<script>" +
    //       jsCode.value +
    //       "</script>";
    //     srcCode.open();
    //     srcCode.writeln(codeContent);
    //     srcCode.close();
    //   };
    var codeContent =
      htmlCode.value +
      "<style>" +
      cssCode.value +
      "</style>" +
      "<script>" +
      jsCode.value +
      "</script>";
    srcCode.open();
    srcCode.writeln(codeContent);
    srcCode.close();
  }
  
  function themeChange() {
    var cc = document.body.className;
    if (cc.indexOf("black-theme") > -1) {
      document.body.className = cc.replace("black-theme", "");
    } else {
      document.body.className += " black-theme";
    }
  }