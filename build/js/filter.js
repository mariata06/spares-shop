// Открытие фильтра на мобиле
var filterOpenBtn = document.querySelector(".sort__filter-button");
var tireFilter = document.querySelector(".tire-catalog__filter");
var closeFilterBtn = document.querySelector(".tire-filter__close");
if (filterOpenBtn) {
  filterOpenBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    tireFilter.classList.add("tire-catalog__filter--open");
  });
  closeFilterBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    tireFilter.classList.remove("tire-catalog__filter--open");
  });
}

// Переключение вкладок в фильтре поиска шин - Параметры - по Марке
var chooseFilterItem = function () {
  var filterChoiceButton = document.querySelectorAll(".tire-filter__choice-button");
  var filterChoiceItem = document.querySelectorAll(".tire-filter__choice-item");
  var filterChoiceName;

  filterChoiceButton.forEach(function (item) {
    item.addEventListener('click', toggleFilterChoiceItem);
  });

  function toggleFilterChoiceItem() {
    filterChoiceButton.forEach(function (item) {
      item.classList.remove("tire-filter__choice-button--active");
    });
    this.classList.add("tire-filter__choice-button--active");
    console.log(this);
    filterChoiceName = this.getAttribute("data-tab-name");
    selectFilterContent(filterChoiceName);
  }

  function selectFilterContent(filterChoiceName) {
    filterChoiceItem.forEach(function (item) {
      if (item.classList.value.includes(filterChoiceName)) {
        item.classList.add("tire-filter__choice-item--active");
      } else {
        item.classList.remove("tire-filter__choice-item--active");
      }
    });
  }
};

chooseFilterItem();

// Переключение меню - аккордеона в фильтре подбора шин
var filterItemTriggers = document.querySelectorAll(".tire-filter__params-trigger");
filterItemTriggers.forEach(function (item) {
  item.addEventListener("click", function(evt) {
    evt.preventDefault();
    item.classList.toggle("tire-filter__params-trigger--active");
    var accItemcontent = item.nextElementSibling;
    accItemcontent.classList.toggle("tire-filter__params-content--active");
  });
});

// Сброс настроек фильтра после выбранных параметров
var resetFilterBtn = document.querySelector(".tire-filter__button--reset");
if (resetFilterBtn) {resetFilterBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  document.querySelectorAll("input").forEach(function (item) {
    item.checked = false;
  });
  document.querySelectorAll('[type="search"]').forEach(function (item) {
    item.value = "";
  });
});
}

// Переключение меню - аккордеона в футере
var footerNavTriggers = document.querySelectorAll(".accordeon__heading");
footerNavTriggers.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    item.classList.toggle("accordeon__heading--active");
    item.nextElementSibling.classList.toggle("accordeon__content--active");
  });
});
