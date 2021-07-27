AFRAME.registerComponent("game-active", {
  schema: {
    elementId: { type: "string", default: "#chest1" },
  },
  update: function () {
    this.isCollide(this.data.elementId);
  },
  isCollide: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#chests")) {
        console.log(elementId + " collision!");
      } else if (elementId.includes("#schools")) {
        console.log(elementId + " collision!");
      }
    });
  },
});
