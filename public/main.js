const mainSection = document.querySelector(".adopt");

const gatos = [
  {
    name: "Rodolfo",
    shortDesc:
      "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg",
    colores: ["tricolor", "negro", "blanco", "naranja", "rayado"],
    sexo: "m",
  },

  {
    name: "Muzzarella",
    shortDesc:
      "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg",
    colores: ["gris"],
    sexo: "f",
  },

  {
    name: "Artilugia",
    shortDesc:
      "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg",
    colores: ["negro", "blanco"],
    sexo: "f",
  },

  {
    name: "Wosito",
    shortDesc:
      "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s",
    colores: ["rayado"],
    sexo: "m",
  },

  {
    name: "Calamardo",
    shortDesc:
      "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg",
    colores: ["negro"],
    sexo: "m",
  },
];

const printKitten = gatos.map((kitten) => {
  return `<div class="box column is-two-fifths">
    <article class="media">
      <div class="media-left column is-half">
        <figure class="image is-3by2">
          <img src="${kitten.img}" alt="Image">
        </figure>
      </div>
      <div class="media-content column is-half">
        <div class="content">
          <p>
            <strong>${kitten.name}</strong>
            <br>
            ${kitten.shortDesc}
          </p>
        </div>
        <div class="level-left">
          <a class="level-item" aria-label="like">
            <span class="icon is-medium">
            <i id="heart" class="las la-heart"></i> <span class="likes">0</span>
            </span>
          </a>       
        </div>
        <button class="${kitten.name} button mt-4 has-background-primary">Ver mas</button>
      </div>
    </article>
  </div>`;
});

mainSection.innerHTML = `${printKitten}`;

const buttons = document.querySelectorAll("button");
const modal = document.querySelector("#modal-kitten");

buttons.forEach((button) => {
  button.onclick = () => {
    gatos.find((kitten) => {
      if (button.className.includes(kitten.name)) {
        modal.innerHTML = `<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="${kitten.img}" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${kitten.name}</p>
                    </div>
              </div>
                  <div class="content">
                <h5>Color: ${kitten.colores}</h5>
                <p>${kitten.longDesc}</p>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>    
        </div>
        <button class="modal-close is-large" aria-label="close"> Cerrar</button>
      </div>`;

        closingModals();
      }
    });
  };
});

const closingModals = () => {
  let closeModals = document.querySelectorAll(".modal-close");
  let modals = document.querySelectorAll(".modal");

  closeModals.forEach((buttonClose) => {
    buttonClose.onclick = () => {
      modals.forEach((modal) => {
        modal.classList.remove("is-active");
      });
    };
  });
};

const heart = document.querySelectorAll("#heart");
const likes = document.querySelectorAll(".likes");

heart.forEach((el, i) => {
  el.onclick = () => {
    let howManyLikes = Number(likes[i].textContent);
    howManyLikes++;
    likes[i].textContent = howManyLikes;
  };
});
