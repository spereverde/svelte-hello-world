// import App from "./App.svelte";
import Hello from "./Hello.svelte";
import Nested from "./Nested.svelte";

var hello = new Hello({
  target: document.getElementById("here"),
  props: {
    name: "Konijn",
  },
});

document.querySelector("#kim").addEventListener("click", function () {
  hello.$set({ name: "Kim" });
});

var all_nested_elements = document.getElementsByTagName("nested");
for (let item of all_nested_elements) {
  //   console.log(item);
  var nested = new Nested({
    target: item,
  });
  if (item.hasAttribute("answer")) {
    var answer = item.getAttribute("answer");
    nested.$set({ answer: answer });
  }
}

// if there is only 1 <nested> element
// var answer = document.querySelector("nested").getAttribute("answer");
// nested.$set({ answer: answer });

// export default hello;

// var app = new App({
//   target: document.getElementById("appke"),
// });
// export default app;

export default nested;
