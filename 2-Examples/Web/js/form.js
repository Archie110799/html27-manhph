jQuery.validator.addMethod(
  "regex",
  function (value, element, regexp) {
      if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
      else if (regexp.global)
          regexp.lastIndex = 0;
      return this.optional(element) || regexp.test(value);
  }, "erreur expression reguliere"
);
let settings = {
  rules: {
    name: {
      required: true,
      regex: /^[A-Za-z]+$/
    },
    avatar: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Bạn chưa nhập email",
      regex : "Khong duoc nhap chu so"
    },
    avatar: {
      required: "Yeu cau nhap password",
    },
  },
};

let validator = $("#myForm").validate(settings);

function handleSubmit() {
  let isValid = $("#myForm").valid();
  if (isValid) {
    let inputName = document.getElementById("inputName");
    let inputAvatar = document.getElementById("inputAvatar");
    let data = {
      name: inputName.value,
      avatar: inputAvatar.value,
    };
    postUser(data);
  } else {
    console.log("cancel submit");
  }
}

function postUser(data) {
  let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
