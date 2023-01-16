(function () {
  createAboutItems();
  createClassItems();
})();

function createAboutItems() {
  const aboutWrapper = document.querySelector(".about__wrapper");
  const aboutWrapperFrame = document.createDocumentFragment();
  aboutItems.forEach((item) => {
    let about = document.createElement("div");
    about.classList.add("about__block");
    about.innerHTML = `     
       <img
          class="about__img"
          src="dist/img/${item.img}.png"
          alt="imagen icono"
        />
        <h3 class="about__block-title">${item.title}</h3>
        <p class="about__block-texto">
        ${item.text}
        </p>`;
    aboutWrapperFrame.appendChild(about);
  });
  aboutWrapper.appendChild(aboutWrapperFrame);
}
function createClassItems() {
  const classWrapper = document.querySelector(".class__wrapper");
  const classWrapperFrame = document.createDocumentFragment();
  classItems.forEach((item, index) => {
    const classItem = document.createElement("div");
    classItem.classList.add("lesson");
    classItem.innerHTML = ` <img
        class="lesson__img"
        src="dist/img/clase${index + 1}.jpg"
        alt="imagen curso"
      />

      <div class="lesson__meta">
        <p class="lesson__date">${item.date}</p>
        <p class="lesson__price">$${item.price}</p>
      </div>
      <div class="lesson__content">
        <h3 class="lesson__name">${item.name}</h3>
        <p class="lesson__description">
        ${item.description}
        </p>
        <p class="lesson__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur possimus quam odit harum explicabo. Eius a iusto
          minima voluptas non id obcaecati sit dolorum nulla! Provident unde
          aliquid fugiat facilis!
        </p>
        <a class="lesson__link" href="#">Más Información</a>
      </div>`;
    classWrapperFrame.appendChild(classItem);
  });
  classWrapper.appendChild(classWrapperFrame);
}
