/* ============================================================
   site.js — the random photo and the random song link.

   THIS IS THE FILE YOU EDIT TO ADD PHOTOS OR SONGS.
   Instructions are above each list.
   ============================================================ */


/* ------------------------------------------------------------
   1. PHOTO BANK

   A browser cannot look inside a folder, so it has no way to
   discover your photos on its own. You list them here by hand.

   TO ADD A PHOTO:
     a) Drop the image file into  images/about/
     b) Add one line below with its exact filename in quotes,
        with a comma at the end.

   Capitalisation and the file extension must match EXACTLY.
   "Photo.JPG" and "photo.jpg" are different files as far as
   the web is concerned. Lowercase everything and save yourself
   the debugging.
   ------------------------------------------------------------ */

const PHOTOS = [
  "images/about/234.JPEG",
  "images/about/671.JPG",
  "images/about/a380.jpg",
  "images/about/austinpng.jpg",
  "images/about/bankpic.jpg",
  "images/about/cafemir.jpg",
  "images/about/casinopng.jpg",
  "images/about/cat1pic.jpg",
  "images/about/chinapic.jpg",
  "images/about/drawpic.jpg",
  "images/about/DSCF4249.JPEG",
  "images/about/DSCF4281.JPEG",
  "images/about/DSCF4292.JPEG",
  "images/about/DSCF4294.JPEG",
  "images/about/DSCN0431.JPG",
  "images/about/DSCN0433.JPG",
  "images/about/image.jpg",
  "images/about/IMG_1432.JPG",
  "images/about/IMG_4159.JPG",
  "images/about/IMG_4512.JPEG",
  "images/about/IMG_6074.JPG",
  "images/about/kazsketch.jpg",
  "images/about/lazy.jpg",
  "images/about/library.jpg",
  "images/about/massmoca.jpg",
  "images/about/mirrorpic.jpg",
  "images/about/mooshehead.jpg",
  "images/about/officepng.jpg",
  "images/about/photo1.jpg",
  "images/about/photo2.jpeg",
  "images/about/RFC_3053.JPG",
  "images/about/shieldpic.jpg",
  "images/about/snow2.jpg",
  "images/about/stretchpng.jpg",
  "images/about/IMG_9695.JPG",
  "images/about/Reyna-8.JPG",
  "images/about/beebook.JPG",
  "images/about/partypic.JPG",
  "images/about/IMG_2054.JPG",
  "images/about/IMG_3364.JPG",
  "images/about/IMG_4580.JPG",
  "images/about/IMG_4576.png",
  "images/about/IMG_0015.JPG",
  "images/about/IMG_5846.png",
  "images/about/IMG_4060.png",
  "images/about/FullSizeRender.png",
  "images/about/IMG_2822.png",
  "images/about/IMG_6263.png",
  "images/about/IMG_6380.png",
  "images/about/IMG_6504.png",
  "images/about/IMG_6676.png",
  "images/about/IMG_41489.png",
  "images/about/IMG_7957.png",
  "images/about/IMG_8710.png",
  "images/about/IMG_9450.png",
  "images/about/IMG_9883.png",
  "images/about/IMG_9884.png",
  "images/about/IMG_0531.png",
];


/* ------------------------------------------------------------
   2. SONG BANK

   Any URL works — YouTube, SoundCloud, Spotify, Bandcamp,
   an mp3 you host yourself, whatever.

   TO ADD A SONG:
     Add one line with the full URL in quotes, comma at the end.
     The https:// part is required.
   ------------------------------------------------------------ */

const SONGS = [
  "https://www.youtube.com/watch?v=Cfg4SYjc9cg&list=RDCfg4SYjc9cg&start_radio=1",
  "https://www.youtube.com/watch?v=75I_TS7Rvis&list=RD75I_TS7Rvis&start_radio=1",
  "https://soundcloud.com/basementnewyork/basement-004-philippa-pacho?in_system_playlist=personalized-tracks%3A%3Arenerreyna%3A1470283531",
  "https://soundcloud.com/basementnewyork/basement-010-gabrielle-kwarteng?in=renerreyna/sets/setlist&si=71e4a2adf2e7424c964578ed8ec16a76&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://soundcloud.com/circolocoibizaofficial/circoloco-radio-401-josh-baker?in=renerreyna/sets/setlist&si=b619cc1c71e547c490a6910c39e580a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  "https://www.youtube.com/watch?v=ufoWlmEwFhQ&list=RDufoWlmEwFhQ&start_radio=1",
  "https://www.youtube.com/live/YBEd7zgZChA?si=NrdGrF7u-u660SFW",
  "https://www.youtube.com/watch?v=auLBLk4ibAk&list=RDauLBLk4ibAk&start_radio=1",
  "https://www.youtube.com/watch?v=qnlhVVwBfew&list=RDqnlhVVwBfew&start_radio=1",
  "https://www.youtube.com/watch?v=-_nQhGR0K8M&list=RD-_nQhGR0K8M&start_radio=1",
  "https://www.youtube.com/watch?v=ylXk1LBvIqU&list=RDylXk1LBvIqU&start_radio=1",
  "https://www.youtube.com/watch?v=-488UORrfJ0&list=RD-488UORrfJ0&start_radio=1",
  "https://www.youtube.com/watch?v=s2xS3iSAHN0&list=RDs2xS3iSAHN0&start_radio=1",
  "https://www.youtube.com/watch?v=H2rmIODalVY&list=RDH2rmIODalVY&start_radio=1",
  "https://www.youtube.com/watch?v=hzFpiW5vHrc&list=RDhzFpiW5vHrc&start_radio=1",
  "https://www.youtube.com/watch?v=9ZOiEa7BJO0&list=RD9ZOiEa7BJO0&start_radio=1",
  "https://www.youtube.com/watch?v=VX6UgpL9DL8&list=RDVX6UgpL9DL8&start_radio=1",
  "https://www.youtube.com/watch?v=xF6WvBIKih0&list=RDxF6WvBIKih0&start_radio=1",
  "https://www.youtube.com/watch?v=I0LUiN3TKKs&list=RDI0LUiN3TKKs&start_radio=1",
  "https://www.youtube.com/watch?v=3hIC39BSWMs&list=RD3hIC39BSWMs&start_radio=1",
  "https://www.youtube.com/watch?v=Q2geJ36eBgw&list=RDQ2geJ36eBgw&start_radio=1",
  "https://www.youtube.com/watch?v=tI3svf3___E&list=RDtI3svf3___E&start_radio=1",
  "https://www.youtube.com/watch?v=piCFz5HzCww&list=RDpiCFz5HzCww&start_radio=1",
  "https://www.youtube.com/watch?v=OeVgcIFEh3I&list=RDOeVgcIFEh3I&start_radio=1",
  "https://www.youtube.com/watch?v=hYz90zeO3Kk&list=RDhYz90zeO3Kk&start_radio=1",
  "https://www.youtube.com/watch?v=Nea2I1dQmLE&list=RDNea2I1dQmLE&start_radio=1",
  "https://www.youtube.com/watch?v=U_g7lSGAfJU&list=RDU_g7lSGAfJU&start_radio=1",
  "https://www.youtube.com/watch?v=2mTPwM4nFw0&list=RD2mTPwM4nFw0&start_radio=1",
  "https://www.youtube.com/watch?v=nwwoK-1p8Nk&list=RDnwwoK-1p8Nk&start_radio=1",
  "https://www.youtube.com/watch?v=lkFMJ4-ai1I&list=RDlkFMJ4-ai1I&start_radio=1",
  "https://www.youtube.com/watch?v=hf1vcikHMWo&list=RDhf1vcikHMWo&start_radio=1",
  "https://www.youtube.com/watch?v=5eZqkaP37po&list=RD5eZqkaP37po&start_radio=1",
  "https://www.youtube.com/watch?v=9o4AQe4BJr0&list=RD9o4AQe4BJr0&start_radio=1",
  "https://www.youtube.com/watch?v=_LXKZq0fYDw&list=RD_LXKZq0fYDw&start_radio=1",
  "https://www.youtube.com/watch?v=IkgaMFjo_lI&list=RDIkgaMFjo_lI&start_radio=1",
  "https://www.youtube.com/watch?v=peh6JCBoznk&list=RDpeh6JCBoznk&start_radio=1",
];


/* ============================================================
   Below here is the machinery. You do not need to touch it.
   ============================================================ */

function pickDifferent(list, current) {
  if (list.length === 0) return null;
  if (list.length === 1) return list[0];
  let choice = current;
  // keep drawing until we get something new, so clicking the
  // button always visibly does something
  while (choice === current) {
    choice = list[Math.floor(Math.random() * list.length)];
  }
  return choice;
}

document.addEventListener("DOMContentLoaded", function () {
  /* ---- random photo ---- */
  const photo = document.getElementById("random-photo");
  const button = document.getElementById("photo-button");

  if (photo) {
    let current = null;

    function swapPhoto() {
      const next = pickDifferent(PHOTOS, current);
      if (!next) return;
      current = next;
      photo.src = next;
    }

    swapPhoto(); // one at random on page load
    if (button) {
      button.addEventListener("click", swapPhoto);
    }
  }

  /* ---- random song ---- */
  const song = document.getElementById("song-link");

  if (song && SONGS.length > 0) {
    let currentSong = null;

    function newSong() {
      currentSong = pickDifferent(SONGS, currentSong);
      song.href = currentSong;
    }

    newSong(); // set one on load, so it is a real clickable link
               // (works with cmd-click and middle-click too)

    // after they click, quietly load up a different one for next time
    song.addEventListener("click", function () {
      setTimeout(newSong, 100);
    });
  }
});
