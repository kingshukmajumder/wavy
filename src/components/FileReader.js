function readFile(file, pos, nbytes) {
  const reader = new FileReader();
  if (pos) {
    if (nbytes == null) nbytes = file.size - pos - 1;
    file = file.slice(pos, pos + nbytes);
  }
  reader.readAsText(file);
  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (event) => reject();
  });
}

export function openFilePicker(fileType = null) {
  let input = document.createElement("input");
  input.type = "file";
  if (fileType) input.accept = fileType;

  return new Promise((resolve, reject) => {
    input.onchange = (_) => {
      if (input.files.length == 0) {
        reject();
        return;
      }
      let fileName = Array.from(input.files)[0];
      readFile(fileName).then(resolve);
    };
    input.click();
  });
}
