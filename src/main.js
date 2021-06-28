import Hello from "./Hello.svelte";

var hello = new Hello({
  target: document.getElementById("here"),
  props: {
    name: "Konijn",
  },
});

document.querySelector("#kim").addEventListener("click", function () {
  hello.$set({ name: "Kim" });
});

export default hello;
