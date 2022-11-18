let g_citySelected
renderOptionCity();

function renderOptionCity() {
  _renderOption(ARRAY_PROVINCE, "selectCity")
  renderOptionDistrict();
}

function handleChangeCity() {
  renderOptionDistrict()
}

function handleChangeDistrict() {
  renderOptionWards()
}

function renderOptionDistrict() {
  let citySelected = getArray("selectCity", ARRAY_PROVINCE)
  //save
  g_citySelected = citySelected;
  //
  _renderOption(citySelected.districts, "selectDistrict")
  renderOptionWards();
}
function renderOptionWards() {
  let districtSelected = getArray("selectDistrict", g_citySelected.districts)
  // render options wards
  _renderOption(districtSelected.wards, "selectWards")
}

function _renderOption(arrayInput, idElement) {
  let tempCityOption = ``;
  arrayInput.map((item) => {
    console.log(item);
    tempCityOption += `<option value="${item.code}">${item.name}</option> `;
  });
  //
  let elmSelectCity = document.getElementById(idElement);
  elmSelectCity.innerHTML = tempCityOption;
}

function _getArray(idElement, arrayFind) {
  let idFind = document.getElementById(idElement).value;
  let res = arrayFind.find((item) => {
    return item.code === parseInt(idFind);
  });
  return res
}