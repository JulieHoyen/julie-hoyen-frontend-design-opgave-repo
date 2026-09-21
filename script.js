const root = document.documentElement;
const themeSwitcher = document.querySelector("button[data-theme-switcher]");

themeSwitcher.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
});

const bandName = "Trouble Bunny";

const songTitles = ["Who Ate the Cable? (wans't me)", "Midnight Zoomies", "Hay, hay, hay", "Under the Sofa naps", "Treat Emergency", "Fluffy Chaos", "No More Pellets", "Noizes at The Balcony", "Bunny Business", "Goodnight Ruben"];

const songs = document.querySelector(".songs");

songs.innerHTML = songTitles
  .map(
    (title, i) => `
      <li class="song">
        <div>
          <p class="song-name">${title}</p>
          <p class="band-name">${bandName}</p>
        </div>
        <p class="duration">3:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")}</p>
      </li>
    `,
  )
  .join("");
