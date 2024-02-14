// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Valentine cũng đúng ngay dịp tết, anh siu siu buồn vì không thể ở gần em, không thể đi chơi cùng với em, anh chỉ biết bày tỏ như thế này thoai, anh siu siu siu siu siu thương em, à quên nữa, nhân dịp tết và valentine thì anh chúc em bé của anh sẽ luôn luôn vui vẻ, hạnh phúc,gặp nhìu may mắn, đạt được mục tiêu đề ra và yêu anh nhiều hơn nhee, anh cảm ơn em vì đã yêu anh, anh cảm thấy vui vì điều đó, anh sẽ cố gắng để đỗ NV1 và ra thăm em bé của anh và chào cả hai bác hehe=)). mãi iuuu chụt chụt<3";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;
var writing = false;

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
      writing = true;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  if (!writing) {
    cardValentine.classList.toggle("open");
    if (cardValentine.className.indexOf("open") != -1) {
      setTimeout(effectWrite, 500);
    } else {
      setTimeout(() => {
        document.querySelector(".letterContent").innerHTML = "";
      }, 1000);
    }
  }
});
