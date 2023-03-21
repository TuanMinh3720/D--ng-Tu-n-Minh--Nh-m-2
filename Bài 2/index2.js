function numberOneTriangle(length) {
  if (length < 1 || length > 10) {
    console.error("Độ dài chỉ từ 1 đến 10!");
    return;
  }
  let output = "";
  for (i = 0; i < length; i++) {
    for (j = 0; j <= i; j++) {
      output += " * ";
    }

    output += "<br/>";
  }
  document.write(output);
}

numberOneTriangle(10);
