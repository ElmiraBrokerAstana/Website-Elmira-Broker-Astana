const langData = {
  ru: {
    title: "Эльмира — Брокер Астана",
    heroTitle: "Ипотечное сопровождение под ключ",
    heroText: "Работа со всеми застройщиками, банками и ипотечными программами.",
    servicesTitle: "Наши услуги",
    servicesList: [
      "Ипотечное сопровождение",
      "Подбор кредитных программ",
      "Бизнес‑кредиты",
      "Финансовый консалтинг"
    ],
    contactTitle: "Контакты",
    address: "г. Астана, ул. Иманова 34",
    phone: "+7 747 681 34 54",
    footer: "© Эльмира Брокер Астана"
  },
  kz: {
    title: "Эльмира — Брокер Астана",
    heroTitle: "Кілтке берілетін ипотекалық сүйемелдеу",
    heroText: "Барлық салушылармен, банктермен және ипотекалық бағдарламалармен жұмыс.",
    servicesTitle: "Қызметтер",
    servicesList: [
      "Ипотекалық сүйемелдеу",
      "Несиелік бағдарламаларды таңдау",
      "Бизнес‑несиелер",
      "Қаржылық консалтинг"
    ],
    contactTitle: "Байланыс",
    address: "Астана қ., Иманов көшесі 34",
    phone: "+7 747 681 34 54",
    footer: "© Эльмира Брокер Астана"
  }
};

function setLang(lang) {
  const data = langData[lang];
  document.getElementById("title").textContent = data.title;
  document.getElementById("hero-title").textContent = data.heroTitle;
  document.getElementById("hero-text").textContent = data.heroText;
  document.getElementById("services-title").textContent = data.servicesTitle;
  document.getElementById("contact-title").textContent = data.contactTitle;
  document.getElementById("contact-address").textContent = data.address;
  document.getElementById("contact-phone").textContent = data.phone;
  document.getElementById("footer-text").textContent = data.footer;

  const list = document.getElementById("services-list");
  list.innerHTML = "";
  data.servicesList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
