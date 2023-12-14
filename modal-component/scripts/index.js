import { Modal } from "./lib.js";

new Modal({
  container: ".modal-container",
  buttonSelector: ".openButton",
  title: " title",
  content: `<p>modal content </p>`,
});
