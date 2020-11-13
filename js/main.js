// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");
const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");

const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");

const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");
const userAvatarElem = document.querySelector(".user-avatar");

const postsWrapper = document.querySelector(".posts");
const buttonNewPost = document.querySelector(".button-new-post");
const addPostElem = document.querySelector(".add-post");

const listUsers = [
  {
    id: "01",
    email: "lol@lol.ru",
    password: "lol",
    displayName: "superLol",
    photo:
      "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
  },
  {
    id: "02",
    email: "lol2@lol.ru",
    password: "lol2",
    displayName: "superLol2",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl-U2Bu1dOVzO3EEXdihzV75tnkbO5Y9GVWA&usqp=CAU",
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("Email не валиден");
      return;
    }
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      if (handler) {
        handler();
      }
    } else {
      alert("Пользователь с такими данными не найден");
    }
  },
  logOut(handler) {
    this.user = null;
    if (handler) {
      handler();
    }
  },
  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("Email не валиден");
      return;
    }
    if (!email.trim() || !password.trim()) {
      alert("Введите данные");
      return;
    }
    if (!this.getUser(email)) {
      const user = {
        email,
        password,
        displayName: email.substring(0, email.indexOf("@")),
      };
      listUsers.push(user);
      this.authorizedUser(user);
      if (handler) {
        handler();
      }
    } else {
      alert("Пользователь с таким email уже зарегистрирован!");
    }
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    if (handler) {
      handler();
    }
  },
};

const setPosts = {
  allPosts: [
    {
      title: "Заголовок поста",
      text:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!",
      tags: ["новое", "мое", "случайность"],
      author: {
        displayName: "lol",
        photo:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
      },
      date: "11.11.2020, 20:54:00",
      like: 14,
      comments: 20,
    },
    {
      title: "Заголовок поста2",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam libero mollitia aut harum doloremque, eos aspernatur a tenetur veniam inventore, aliquid ipsum! Consequuntur doloribus pariatur ratione reiciendis distinctio ducimus corrupti magnam, modi, libero non ipsa porro iusto optio quisquam aliquid exercitationem illum deserunt sint. Molestiae, porro? Quam ex eos voluptatum facere, veritatis minus suscipit, eaque minima sapiente dolorem illo molestiae?",
      tags: ["новое", "горячее"],
      author: {
        displayName: "lol",
        photo:
          "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg",
      },
      date: "11.11.2020, 20:53:00",
      like: 11,
      comments: 3,
    },
    {
      title: "Заголовок поста3",
      text:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!",
      tags: ["свежее"],
      author: {
        displayName: "lol2",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl-U2Bu1dOVzO3EEXdihzV75tnkbO5Y9GVWA&usqp=CAU",
      },
      date: "11.11.2020, 20:51:00",
      like: 40,
      comments: 1,
    },
  ],
  addPost(title, text, tags, handler) {
    const user = setUsers.user;
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(",").map((tag) => tag.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0,
    });
    if (handler) {
      handler();
    }
  },
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log(user);
  if (user) {
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add("visible");
  } else {
    loginElem.style.display = "";
    userElem.style.display = "none";
    buttonNewPost.classList.remove("visible");
    addPostElem.classList.remove("visible");
    postsWrapper.classList.add("visible");
  }
};

const showAddPost = () => {
  addPostElem.classList.add("visible");
  postsWrapper.classList.remove("visible");
};

const showAllPosts = () => {
  let postsHTML = "";

  setPosts.allPosts.forEach(
    ({ title, text, tags, comments, like, author, date }) => {
      postsHTML += `
      <section class="post">
          <div class="post-body">
            <h2 class="post-title">${title}</h2>
            <p class="post-text">${text}</p>
            <div class="tags">
            ${tags.map((tag) => `<a href="#" class="tag">#${tag}</a>`)}
            </div>
          </div>
          <div class="post-footer">
            <div class="post-buttons">
              <button class="post-button likes">
                <svg width="19" height="20" class="icon icon-like">
                  <use xlink:href="img/icons.svg#like"></use>
                </svg>
                <span class="likes-counter">${like}</span>
              </button>
              <button class="post-button comments">
                <svg width="21" height="21" class="icon icon-comment">
                  <use xlink:href="img/icons.svg#comment"></use>
                </svg>
                <span class="comments-counter">${comments}</span>
              </button>
              <button class="post-button save">
                <svg width="19" height="19" class="icon icon-save">
                  <use xlink:href="img/icons.svg#save"></use>
                </svg>
              </button>
              <button class="post-button share">
                <svg width="17" height="19" class="icon icon-share">
                  <use xlink:href="img/icons.svg#share"></use>
                </svg>
              </button>
            </div>
            <div class="post-author">
              <div class="author-about">
                <a href="#" class="author-username">${author.displayName}</a>
                <span class="post-time">${date}</span>
              </div>
              <a href="#" class="author-link"><img src=${
                author.photo || "img/avatar.jpeg"
              } alt="avatar" class="author-avatar"
              /></a>
            </div>
          </div>
        </section>
      `;
    }
  );

  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove("visible");
  postsWrapper.classList.add("visible");
};

const init = () => {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });

  loginSignup.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener("click", (event) => {
    event.preventDefault();
    editContainer.classList.toggle("visible");
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove("visible");
  });

  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener("click", function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
  });

  buttonNewPost.addEventListener("click", (event) => {
    event.preventDefault();
    showAddPost();
  });

  addPostElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;
    console.log(title, text, tags);
    if (title.value.length < 6) {
      alert("Слишком короткий заголовок");
      return;
    }
    if (text.value.length < 50) {
      alert("Слишком короткий пост");
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
    addPostElem.classList.remove("visible");
    addPostElem.reset();
  });

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener("DOMContentLoaded", init);
