var sliderr = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = sliderr.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderr.oninput = function() {
  output.innerHTML = sliderr.value;
}