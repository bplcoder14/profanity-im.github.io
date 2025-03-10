function loadTheme(themeName) {
  const pathToThemeFile = "./themes-gallery/" + themeName + ".html";
  fetch(pathToThemeFile)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(themeName + "-theme").innerHTML = data;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

const themeList = [
  "template"
]

for (let i = 0; i < themeList.length; i++) {
  loadTheme(themeList[i]);
}