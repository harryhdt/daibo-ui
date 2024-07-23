document.addEventListener("alpine:init", () => {
  window.Alpine.directive("lucide", (el, { expression }, { effect, evaluateLater }) => {
    effect(() => {
      evaluateLater(expression)((value) => {
        window.Alpine.mutateDom(() => {
          if (value in lucide) {
            el.innerHTML = "";
            el.appendChild(lucide.createElement(lucide[value]));
          } else {
            throw new Error(`"${value}" is not a valid Lucide icon name.`);
          }

          el._x_ignoreSelf = true;
          window.Alpine.initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
});
