let settings = {
  rules: {
    email: {
      required: true,
      email: true,
      minlength: 6,
    },
    password: {
      required: true,
      minlength: 6,
      maxlength: 12,
    },
  },
  messages: {
    email: {
      required: "Bạn chưa nhập email",
      minlength: jQuery.validator.format("Toi thieu co {0} ky tu"),
      email: "Dia chi email khong hop le",
    },
    password: {
      required: "Yeu cau nhap password",
      minlength: "Toi thieu {0} ki tu",
      maxlength: "Toi da {0} ki tu",
    },
  },
};

let validator = $("#myForm").validate(settings);
