const calculatorButton = document.querySelector("#calculator");
const inputItems = document.querySelectorAll(".item-option-input");

calculatorButton.onclick = () => {
  try {
    let sum = 0;
    inputItems.forEach((item) => {
      let num = Number(item.value);
      if(isNaN(num)){
        throw new Error("只能填数值");
      }
      sum += num;
    });
    if (sum >= 140) {
      alert("可以触发，" + "攻速值总计：" + sum);
    } else {
      alert("不能触发，" + "攻速值总计：" + sum);
    }
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
