/* Namen hier anpassen — der Rest der Seite liest nur diese Angaben. */
const HOCHZEIT = {
  nameLinks: "Rebecca",
  nameRechts: "Manuel",
  datumLabel: "07.08.2027",
  ziel: new Date(2027, 7, 7, 0, 0, 0),
  ort: "Weingut Klaus Lentsch, Eppan",
  maps: "https://www.google.com/maps/search/?api=1&query=Weingut%20Klaus%20Lentsch%20Eppan",
};

const FOTOS = [
  { src: "photos/01-sonne.jpg", ratio: "3 / 4" },
  { src: "photos/02-terrasse.jpg", ratio: "2 / 3", place: "shot-a", depth: -1 },
  { src: "photos/03-tisch.jpg", ratio: "3 / 4", place: "shot-b", depth: 1 },
  { src: "photos/04-licht.jpg", ratio: "2 / 3", place: "shot-solo is-left" },
  { src: "photos/05-see.jpg", ratio: "9 / 16", place: "shot-a" },
  { src: "photos/06-regen.jpg", ratio: "9 / 16", place: "shot-b" },
  { src: "photos/07-tuch.jpg", ratio: "4 / 3", place: "shot-wide" },
  { src: "photos/08-nah.jpg", ratio: "3 / 4", place: "shot-a" },
  { src: "photos/09-party.jpg", ratio: "2 / 3", place: "shot-b" },
  { src: "photos/10-pico.jpg", ratio: "9 / 16", place: "shot-solo is-right" },
  { src: "photos/11-wiese.jpg", ratio: "2 / 3", place: "shot-solo is-left" },
];

const ORTE = [
  { name: "Weingut Klaus Lentsch", note: "Die Feier", query: "Weingut Klaus Lentsch Eppan" },
  { name: "Altstadt Eppan", note: "Ein Spaziergang", query: "Altstadt Eppan" },
  { name: "Kalterer See", note: "Wenn der Tag länger wird", query: "Kalterer See" },
  { name: "Bozen", note: "Die Stadt nebenan", query: "Bozen Südtirol" },
];

const GERICHTE = ["Rind", "Fisch", "Vegetarisch", "Kindermenü"];

const STORAGE_KEY = "versiegelte-einladung-nur-hochzeit-v1";
const LIST_KEY = "hochzeit-gaesteliste-v1";
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwT_rkA-9GpEWa6Y0HPDVwczlcZxswO3_sJdW2Mt2BdJzUISm-V7jjaVsCDBfo72j8F3w/exec";

const QUESTIONS = [
  {
    key: "guest",
    type: "choice",
    title: "Welcher Gast bist du?",
    options: [
      {
        value: "tanz",
        label: "Der Erste auf der Tanzfläche",
        feedback: "Die Tanzfläche atmet auf. Endlich jemand, der den Anfang macht.",
      },
      {
        value: "bar",
        label: "Der Letzte an der Bar",
        feedback: "Die Bar merkt sich dein Gesicht. Wir auch.",
      },
      {
        value: "rede",
        label: "Der Redner ohne Vorbereitung",
        feedback: "Unvorbereitet ist manchmal die schönste Rede. Wir halten trotzdem ein Glas bereit.",
      },
      {
        value: "weinen",
        label: "Der, der das Brautpaar zum Weinen bringt",
        feedback: "Das schaffen die beiden schon allein. Du darfst trotzdem mitweinen.",
      },
    ],
  },
  {
    key: "color",
    type: "color",
    title: "Welche Farbe wird dein Outfit haben?",
  },
  {
    key: "tears",
    type: "choice",
    title: "Wirst du bei der Trauung weinen?",
    options: [
      {
        value: "ja",
        label: "Ja",
        feedback: "Dann bist du nicht der/die Einzige. Manu wird sowieso auch weinen — die Taschentücher liegen schon bereit.",
      },
      {
        value: "nein",
        label: "Nein",
        feedback: "Wir werden ja sehen... Manu fängt an, und dann hält keiner mehr durch.",
      },
      {
        value: "vielleicht",
        label: "Vielleicht",
        feedback: "Das sagt Manu auch immer. Und dann weint er trotzdem. Ein Taschentuch liegt auf deinem Platz.",
      },
    ],
  },
  {
    key: "food",
    type: "scale",
    title: "Wie sehr freust du dich auf das Essen?",
    min: 0,
    max: 10,
    start: 5,
    low: "Ich esse eh nur Salat",
    high: "Ich habe seit Tagen nichts gegessen",
    lines: {
      0: "Ich esse eh nur Salat",
      1: "Der Salat darf gern ein bisschen mehr sein.",
      2: "Eine Beilage reicht dir. Wir legen trotzdem nach.",
      3: "Du kommst wegen uns. Das Essen ist Beiwerk.",
      4: "Ein Teller, in Ruhe. Sehr erwachsen.",
      5: "Du freust dich normal. Das Essen auch.",
      6: "Der Hunger ist angekommen.",
      7: "Du denkst schon jetzt an den zweiten Gang.",
      8: "Das Menü ist der Hauptakt.",
      9: "Du hast den ganzen Tag nichts gegessen. Absichtlich.",
      10: "Ich habe seit Tagen nichts gegessen",
    },
  },
  {
    key: "wine",
    type: "choice",
    title: "Wie viele Gläser Wein schaffst du am Weingut?",
    options: [
      {
        value: "eins",
        label: "Ein Glas, ich fahre",
        feedback: "Ein Glas, und der Schlüssel bleibt in der Tasche. Vorbildlich.",
      },
      {
        value: "zwei",
        label: "Zwei, ich bin vernünftig",
        feedback: "Zwei Gläser. Vernunft mit Aussicht.",
      },
      {
        value: "offen",
        label: "Ich zähle nicht mehr",
        feedback: "Wir zählen auch nicht. Das Weingut schon gar nicht.",
      },
      {
        value: "nacht",
        label: "Ich mache die Nacht zum Tag",
        feedback: "Dann wird die Nacht zum Tag. Der Morgen gehört dir.",
      },
    ],
  },
  {
    key: "dance",
    type: "scale",
    title: "Wie eskalativ wird dein Tanzstil auf der Afterparty?",
    min: 1,
    max: 10,
    start: 5,
    low: "Ich nicke nur mit dem Kopf",
    high: "John Travolta",
    hotAt: 8,
    partyAt: 10,
    lines: {
      1: "Ich nicke nur mit dem Kopf",
      2: "Ein dezentes Wippen. Mehr nicht.",
      3: "Die Schultern sind eingeweiht.",
      4: "Kleine Schritte, große Absicht.",
      5: "Solide Hochzeitsmitte. Respekt.",
      6: "Die Jacke bleibt am Stuhl.",
      7: "Hier wird geschwitzt, und zwar freiwillig.",
      8: "Die Tanzfläche sollte versichert sein.",
      9: "Fast Travolta. Die Tanzfläche freut sich schon.",
      10: "Genau so jemanden brauchen wir. Es wird eine unvergessliche Party! Ein Star-DJ wartet schon auf uns.",
    },
  },
  {
    key: "proposal",
    type: "choice",
    title: "Wer hat den Antrag gemacht?",
    options: [
      {
        value: "rebecca",
        label: "Rebecca",
        feedback: "Schön erzählt. Falsche Antwort, aber du bist trotzdem eingeladen.",
      },
      {
        value: "manuel",
        label: "Manuel",
        feedback: "Richtig. Manuel ging auf die Knie.",
        variant: "is-pop",
      },
      {
        value: "katze",
        label: "Eine Katze mit Schleife",
        feedback: "Die Katze war nur moralische Unterstützung. Falsche Antwort, aber du bist trotzdem eingeladen.",
      },
      {
        value: "geheim",
        label: "Das bleibt geheim",
        feedback: "Nicht mehr. Manuel ging auf die Knie. Du bist trotzdem eingeladen.",
      },
    ],
  },
  {
    key: "when",
    type: "choice",
    title: "Wann heiraten Rebecca & Manuel?",
    options: [
      {
        value: "winter",
        label: "Im Winter, wenn es schneit",
        feedback: "Falsche Antwort, aber du bist trotzdem eingeladen.",
      },
      {
        value: "august",
        label: "Im August, bei hoffentlich Sonnenschein",
        feedback: "August. Hoffentlich mit Sonne. Der Flyer gehört dir.",
        variant: "is-pop",
      },
      {
        value: "buffet",
        label: "Irgendwann, Hauptsache Essen",
        feedback: "Falsche Antwort, aber du bist trotzdem eingeladen.",
      },
      {
        value: "egal",
        label: "Wann auch immer, ich bin dabei",
        feedback: "Falsche Antwort, aber du bist trotzdem eingeladen.",
      },
    ],
  },
];

const state = {
  step: 0,
  answers: emptyAnswers(),
};

const panel = document.getElementById("panel");
const card = document.getElementById("card");
const progressWrap = document.getElementById("progress");
const progressLabel = document.getElementById("progress-label");
const progressBar = document.getElementById("progress-bar");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let animating = false;
let countdownTimer = null;
let confettiFrame = null;
let confettiPieces = [];
let medicShown = false;

function emptyAnswers() {
  return {
    name: "",
    tears: null,
    plusOne: null,
    kids: 0,
    eve: null,
    color: "",
    food: 5,
    wine: null,
    guest: null,
    sing: 5,
    dance: 5,
    karwendel: null,
    proposal: null,
    camera: 5,
    selfies: null,
    rebsorte: null,
    hike: 5,
    song: "",
    when: null,
    meal: "",
  };
}

function finaleStep() {
  return QUESTIONS.length + 1;
}

function isListView() {
  return new URLSearchParams(window.location.search).has("liste");
}

function isQuizView() {
  return new URLSearchParams(window.location.search).has("quiz");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initials() {
  return (HOCHZEIT.nameLinks.charAt(0) + HOCHZEIT.nameRechts.charAt(0)).toUpperCase();
}

function coupleNames() {
  return `${escapeHtml(HOCHZEIT.nameLinks)} <span class="amp">&</span> ${escapeHtml(HOCHZEIT.nameRechts)}`;
}

const WHITE_WARNING =
  "STOPP. Weiß gehört der Braut — sonst kommst du nicht rein.";
const BLACK_WARNING =
  "Schwarz ist für eine Hochzeit etwas düster, hast du noch eine freundlichere Farbe?";
const RED_WARNING =
  "Rot lassen wir lieber weg. Hast du eine neutralere Farbe?";

function foldOutfit(raw) {
  return String(raw)
    .trim()
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/[^a-z]/g, "");
}

function isWhiteOutfit(raw) {
  return /weiss|white/.test(foldOutfit(raw));
}

function isBlackOutfit(raw) {
  return /schwarz|black/.test(foldOutfit(raw));
}

function isRedOutfit(raw) {
  const folded = foldOutfit(raw);
  if (/brot/.test(folded)) return false;
  return /rot|red|bordeaux|burgunder|karmin|purpur|magenta|scharlach|zinnober/.test(folded);
}

function isPlausibleColor(raw) {
  const value = raw.trim();
  return value.length >= 3 && /[a-zäöüß]/i.test(value) && !isWhiteOutfit(value) && !isBlackOutfit(value) && !isRedOutfit(value);
}

function currentQuestion() {
  return QUESTIONS[state.step - 1];
}

function setFavicon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#5c2430"/><text x="16" y="21" text-anchor="middle" font-size="12" fill="#f3e6c8" font-family="Georgia">${initials()}</text></svg>`;
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function updateTitle() {
  const names = `${HOCHZEIT.nameLinks} & ${HOCHZEIT.nameRechts}`;
  if (isListView()) {
    document.title = `Gästeliste — ${names}`;
    return;
  }
  document.title = state.step === finaleStep() ? `${HOCHZEIT.datumLabel} — ${names}` : `${names} — Versiegelte Einladung`;
}

function updateProgress() {
  const total = QUESTIONS.length;
  const active = state.step >= 1 && state.step <= total;
  progressWrap.hidden = !active;
  if (!active) return;
  progressLabel.textContent = `Frage ${state.step} von ${total}`;
  progressBar.style.width = `${(state.step / total) * 100}%`;
  const track = progressWrap.querySelector(".track");
  track.setAttribute("aria-valuemax", String(total));
  track.setAttribute("aria-valuenow", String(state.step));
}

function focusHeading() {
  const heading = panel.querySelector("h1, h2");
  if (!heading) return;
  heading.setAttribute("tabindex", "-1");
  heading.focus({ preventScroll: true });
}

function swap(render) {
  const run = () => {
    render();
    updateProgress();
    updateTitle();
    document.body.classList.toggle("is-open", state.step === finaleStep());
    panel.classList.remove("is-leaving");
    panel.classList.add("is-entering");
    window.setTimeout(() => panel.classList.remove("is-entering"), 520);
    focusHeading();
    animating = false;
  };

  if (prefersReducedMotion() || !panel.dataset.shown) {
    panel.dataset.shown = "1";
    run();
    return;
  }

  animating = true;
  panel.classList.add("is-leaving");
  window.setTimeout(run, 280);
}

function renderIntro() {
  panel.innerHTML = `
    <section class="intro">
      <p class="kicker">Zutritt mit Humor</p>
      <p class="intro-names">${coupleNames()}</p>
      <h1>Die Einladung ist versiegelt.</h1>
      <p class="lede">${QUESTIONS.length} Fragen stehen zwischen dir und dem Ort, an dem wir Ja sagen. Die meisten sind harmlos.</p>
      <button class="start" type="button" data-action="start">
        <span class="seal-mark" aria-hidden="true">${escapeHtml(initials())}</span>
        <span class="start-label">Siegel lösen</span>
      </button>
    </section>
  `;
}

function renderQuestion() {
  const question = currentQuestion();
  medicShown = false;
  let body = "";

  if (question.type === "choice") {
    const options = question.options
      .map((option) => {
        const selected = state.answers[question.key] === option.value;
        return `
          <label class="choice${selected ? " is-selected" : ""}">
            <input type="radio" name="${question.key}" value="${option.value}" ${selected ? "checked" : ""}>
            <span>${escapeHtml(option.label)}</span>
          </label>
        `;
      })
      .join("");
    body = `<div class="choices" role="radiogroup" aria-labelledby="q-title">${options}</div>`;
    if (question.key === "plusOne") {
      body += `
        <label class="field kids-field" id="kids-field" hidden>
          <span class="hint">Wie viele Kinder kommen mit?</span>
          <input class="text-input" id="kids" type="number" min="1" max="12" inputmode="numeric" enterkeyhint="next" aria-label="Anzahl der Kinder">
        </label>
      `;
    }
  } else if (question.type === "name") {
    body = `
      <label class="field">
        <input class="text-input" id="guest-name" type="text" maxlength="80" autocomplete="name" enterkeyhint="next" aria-labelledby="q-title" placeholder="Vor- und Nachname">
      </label>
    `;
  } else if (question.type === "color") {
    body = `
      <label class="field">
        <span class="hint">Keine knalligen Farben, kein Rot, eher neutrale Farben.</span>
        <input class="text-input" id="color" type="text" maxlength="40" autocomplete="off" enterkeyhint="next" aria-labelledby="q-title" placeholder="Sand, Salbei, Taube …">
      </label>
    `;
  } else if (question.type === "scale") {
    const value = scaleValue(question);
    body = `
      <p class="dance-score" id="scale-score">${value}</p>
      <input class="slider" id="scale" type="range" min="${question.min}" max="${question.max}" step="1" value="${value}" aria-valuemin="${question.min}" aria-valuemax="${question.max}" aria-valuenow="${value}" aria-label="${escapeHtml(question.title)}">
      <div class="scale-ends">
        <span>${question.min} · ${escapeHtml(question.low)}</span>
        <span>${question.max} · ${escapeHtml(question.high)}</span>
      </div>
    `;
  } else if (question.type === "song") {
    body = `
      <label class="field">
        <span class="hint">Für den DJ. Er liest mit.</span>
        <input class="text-input" id="song" type="text" maxlength="140" enterkeyhint="done" aria-labelledby="q-title" placeholder="z. B. September — Earth, Wind & Fire">
      </label>
    `;
  }

  const ready = question.type === "scale" || canAdvance();
  const skip = question.type === "song"
    ? `<button class="btn-ghost" type="button" data-action="skip">Überspringen</button>`
    : "";
  panel.innerHTML = `
    <section>
      <h2 class="q-title" id="q-title">${escapeHtml(question.title)}</h2>
      ${body}
      <p class="feedback" id="feedback" aria-live="polite"></p>
      <div class="nav${question.type === "song" ? " nav-song" : ""}">
        <button class="btn-ghost" type="button" data-action="back">Zurück</button>
        ${skip}
        <button class="btn" type="button" data-action="next" ${ready ? "" : "disabled"}>
          ${state.step === QUESTIONS.length ? "Einladung öffnen" : "Weiter"}
        </button>
      </div>
    </section>
  `;

  if (question.type === "name") {
    panel.querySelector("#guest-name").value = state.answers.name;
    syncName();
  } else if (question.type === "color") {
    panel.querySelector("#color").value = state.answers.color;
    syncColor("quiet");
  } else if (question.type === "song") {
    panel.querySelector("#song").value = state.answers.song;
    syncSong(false);
  } else if (question.type === "scale") {
    syncScale(false);
  } else if (question.type === "choice") {
    const kidsInput = panel.querySelector("#kids");
    if (kidsInput && Number(state.answers.kids) >= 1) kidsInput.value = String(state.answers.kids);
    if (state.answers[question.key]) syncChoice(false);
  }
}

function photoFigure(foto, className) {
  const ratio = foto.ratio ? ` style="aspect-ratio:${foto.ratio}"` : "";
  const depth = foto.depth ? ` data-depth="${foto.depth}"` : "";
  return `
    <figure class="shot ${className} reveal">
      <div class="shot-media"${ratio}${depth}>
        <img src="${foto.src}" alt="Rebecca und Manuel" decoding="async">
        <div class="ph">
          <strong>Foto folgt</strong>
        </div>
      </div>
    </figure>
  `;
}

function mapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderFinale(celebrate) {
  stopCountdown();
  stopConfetti();
  document.body.classList.remove("is-unveil");
  const home = document.getElementById("home");
  home.innerHTML = `
    <section class="unveil${celebrate ? " is-entering" : ""}" id="unveil">
      <figure class="unveil-card">
        <img src="save-the-date.jpg?v=2" alt="Save the Date. Rebecca und Manuel. Wir sagen Ja. Samstag, 7. August 2027. Weingut Klaus Lentsch, St. Pauls, Eppan.">
      </figure>
      <button class="replay" type="button" data-action="replay">Quiz wiederholen</button>
    </section>
  `;
  document.body.classList.add("is-home", "is-card");
  document.querySelector(".stage").hidden = true;
  home.hidden = false;
  window.scrollTo(0, 0);
  const veil = document.getElementById("unveil");
  if (celebrate && veil) {
    window.setTimeout(() => {
      if (veil.isConnected) veil.classList.add("is-shown");
    }, 1900);
  }
}

function mountPhotos(root) {
  root.querySelectorAll(".shot img").forEach((img) => {
    const shot = img.closest(".shot");
    const mark = () => {
      if (img.naturalWidth > 0) shot.classList.add("is-filled");
      else shot.classList.add("is-empty");
    };
    img.addEventListener("error", () => shot.classList.add("is-empty"));
    img.addEventListener("load", mark);
    if (img.complete) mark();
  });
}

function revealHome(root) {
  if (prefersReducedMotion()) {
    root.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-in");
      });
    },
    { threshold: 0.16 }
  );
  root.querySelectorAll(".reveal, .chapter").forEach((el) => observer.observe(el));
}

let homeMotionBound = false;

function bindHomeMotion() {
  if (homeMotionBound || prefersReducedMotion()) return;
  homeMotionBound = true;
  const onScroll = () => {
    const essay = document.getElementById("bilder");
    if (!essay || !document.body.classList.contains("is-home")) return;
    const rect = essay.getBoundingClientRect();
    const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const shifted = Math.min(1, Math.max(0, progress)) - 0.5;
    essay.querySelectorAll(".shot-media[data-depth]").forEach((media) => {
      const depth = Number(media.dataset.depth) * 28;
      media.style.transform = `translate3d(0, ${shifted * depth}px, 0)`;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function syncHomeParty() {
  document.querySelectorAll("[data-party]").forEach((button) => {
    const on = button.dataset.party === state.answers.plusOne;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
  });
  document.querySelectorAll("[data-meal]").forEach((button) => {
    const on = button.dataset.meal === state.answers.meal;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const kids = document.getElementById("home-kids");
  if (kids) kids.hidden = !needsKids(state.answers.plusOne);
  const count = document.getElementById("people-line");
  if (count) {
    const people = partySize(state.answers);
    count.textContent = `Das sind ${people} ${people === 1 ? "Person" : "Personen"}.`;
  }
}

function flashSaved() {
  const note = document.getElementById("saved");
  if (!note) return;
  note.hidden = false;
  note.classList.remove("is-on");
  void note.offsetWidth;
  note.classList.add("is-on");
}

function closeHome() {
  document.body.classList.remove("is-home", "is-unveil", "is-card");
  document.getElementById("unveil")?.remove();
  const stage = document.querySelector(".stage");
  const home = document.getElementById("home");
  if (stage) stage.hidden = false;
  if (home) home.hidden = true;
  stopCountdown();
}

function applyFeedback(text, variant, animate) {
  const el = panel.querySelector("#feedback");
  if (!el) return;
  const classes = ["feedback", "is-on"];
  if (variant) classes.push(variant);
  if (animate && variant === "is-alert") classes.push("is-shaking");
  if (animate && (variant === "is-pop" || variant === "is-party")) classes.push("is-popping");

  const sameText = el.textContent === text;
  const visible = el.classList.contains("is-on");
  if (visible && !animate && sameText && (!variant || el.classList.contains(variant))) return;

  if (!visible) {
    el.className = "feedback";
    void el.offsetWidth;
  }
  el.className = classes.join(" ");
  el.textContent = text;
  el.setAttribute("role", variant === "is-alert" ? "alert" : "status");
}

function setNextEnabled(enabled) {
  const button = panel.querySelector("[data-action='next']");
  if (button) button.disabled = !enabled;
}

function selectedOption(question) {
  return question.options.find((option) => option.value === state.answers[question.key]);
}

function syncChoice(animate) {
  const question = currentQuestion();
  const option = selectedOption(question);
  panel.querySelectorAll(".choice").forEach((label) => {
    const input = label.querySelector("input");
    label.classList.toggle("is-selected", input.value === state.answers[question.key]);
  });
  if (!option) {
    setNextEnabled(false);
    return;
  }
  const shouldAnimate = animate && option.variant === "is-pop";
  applyFeedback(option.feedback, option.variant || "", shouldAnimate);
  const kidsField = panel.querySelector("#kids-field");
  if (kidsField) {
    const showKids = needsKids(state.answers.plusOne);
    kidsField.hidden = !showKids;
    if (!showKids) state.answers.kids = 0;
  }
  setNextEnabled(canAdvance());
}

function needsKids(value) {
  return value === "kinder" || value === "familie";
}

function syncName() {
  const input = panel.querySelector("#guest-name");
  state.answers.name = input.value;
  const name = input.value.trim();
  if (name.length >= 2) {
    const first = name.split(/\s+/)[0];
    applyFeedback(`Schön, ${first}. Wir wissen jetzt, für wen wir einen Platz freihalten.`, "", false);
    setNextEnabled(true);
    return;
  }
  const el = panel.querySelector("#feedback");
  el.className = "feedback";
  el.textContent = "";
  setNextEnabled(false);
}

function syncColor(mode) {
  const input = panel.querySelector("#color");
  const value = input.value;
  state.answers.color = value;
  const white = value.trim() !== "" && isWhiteOutfit(value);
  const black = value.trim() !== "" && isBlackOutfit(value);
  const red = value.trim() !== "" && isRedOutfit(value);
  const blocked = white || black || red;
  const enteredBlocked = blocked && !input.classList.contains("is-forbidden");
  input.classList.toggle("is-forbidden", blocked);
  input.setAttribute("aria-invalid", blocked ? "true" : "false");
  if (blocked) {
    const warning = white ? WHITE_WARNING : black ? BLACK_WARNING : RED_WARNING;
    applyFeedback(warning, "is-alert", mode === "force" || (mode === "live" && enteredBlocked));
    setNextEnabled(false);
    return;
  }
  if (isPlausibleColor(value)) {
    applyFeedback("Perfekt, das wird wunderschön.", "", false);
    setNextEnabled(true);
    return;
  }
  const el = panel.querySelector("#feedback");
  el.className = "feedback";
  el.textContent = "";
  setNextEnabled(false);
}

function seatingNote(plusOne) {
  if (plusOne === "begleitung") return "Wir decken für zwei.";
  if (plusOne === "kinder") return "Wir decken für dich und die Kinder.";
  if (plusOne === "familie") return "Wir decken für euch — Begleitung und Kinder inklusive.";
  return "Wir decken für dich.";
}

function scaleValue(question) {
  const stored = state.answers[question.key];
  if (stored === 0 || stored) return Number(stored);
  return question.start;
}

function syncScale(animate) {
  const question = currentQuestion();
  const input = panel.querySelector("#scale");
  const value = Number(input.value);
  state.answers[question.key] = value;
  const score = panel.querySelector("#scale-score");
  score.textContent = String(value);
  score.classList.toggle("is-hot", question.hotAt != null && value >= question.hotAt);
  input.setAttribute("aria-valuenow", String(value));
  const span = question.max - question.min || 1;
  input.style.setProperty("--p", `${((value - question.min) / span) * 100}%`);
  const party = question.partyAt != null && value >= question.partyAt;
  const justHit = party && !medicShown;
  medicShown = party;
  applyFeedback(question.lines[value] || "", party ? "is-party" : "", animate && justHit);
  setNextEnabled(true);
}

function syncSong() {
  const input = panel.querySelector("#song");
  state.answers.song = input.value;
  const ok = input.value.trim().length >= 2;
  if (ok) applyFeedback("Notiert. Folgsamkeit des DJs nicht garantiert.", "", false);
  else {
    const el = panel.querySelector("#feedback");
    el.className = "feedback";
    el.textContent = "";
  }
  setNextEnabled(ok);
}

function canAdvance() {
  const question = currentQuestion();
  if (!question) return false;
  if (question.type === "name") return state.answers.name.trim().length >= 2;
  if (question.type === "choice") {
    if (!state.answers[question.key]) return false;
    if (question.key === "plusOne" && needsKids(state.answers.plusOne)) return Number(state.answers.kids) >= 1;
    return true;
  }
  if (question.type === "color") return isPlausibleColor(state.answers.color);
  if (question.type === "scale") {
    const value = Number(state.answers[question.key]);
    return value >= question.min && value <= question.max;
  }
  if (question.type === "song") return state.answers.song.trim().length >= 2;
  return false;
}

function signalInvalid() {
  const question = currentQuestion();
  if (!question) return;
  if (question.type === "color") {
    if (isWhiteOutfit(state.answers.color) || isBlackOutfit(state.answers.color) || isRedOutfit(state.answers.color)) syncColor("force");
    else applyFeedback("Eine Farbe muss es schon sein — zum Beispiel Salbei oder Sand.", "", false);
    panel.querySelector("#color")?.focus();
    return;
  }
  if (question.type === "song") {
    applyFeedback("Ein Titel reicht. Der DJ braucht eine Spur.", "", false);
    panel.querySelector("#song")?.focus();
    return;
  }
  if (question.type === "name") {
    applyFeedback("Verrat uns noch deinen Namen.", "", false);
    panel.querySelector("#guest-name")?.focus();
    return;
  }
  if (question.key === "plusOne" && needsKids(state.answers.plusOne)) {
    applyFeedback("Wie viele Kinder kommen mit? Eine Zahl reicht.", "", false);
    panel.querySelector("#kids")?.focus();
  }
}

function partySize(answers) {
  const kids = Math.max(0, Number(answers.kids) || 0);
  if (answers.plusOne === "begleitung") return 2;
  if (answers.plusOne === "kinder") return 1 + kids;
  if (answers.plusOne === "familie") return 2 + kids;
  return 1;
}

function partyLabel(answers) {
  const kids = Math.max(0, Number(answers.kids) || 0);
  const kidsText = kids === 1 ? "1 Kind" : `${kids} Kindern`;
  if (answers.plusOne === "begleitung") return "Mit Begleitung";
  if (answers.plusOne === "kinder") return `Mit ${kidsText}`;
  if (answers.plusOne === "familie") return `Mit Begleitung und ${kidsText}`;
  return "Alleine";
}

function loadList() {
  try {
    const raw = localStorage.getItem(LIST_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (error) {
    return [];
  }
}

function saveGuest() {
  const name = state.answers.name.trim();
  if (name.length < 2) return;
  const key = name.toLocaleLowerCase("de");
  const entry = {
    name,
    plusOne: state.answers.plusOne,
    kids: Number(state.answers.kids) || 0,
    people: partySize(state.answers),
    eve: state.answers.eve,
    color: state.answers.color.trim(),
    song: String(state.answers.song || "").trim(),
    meal: state.answers.meal || "",
    at: new Date().toISOString(),
  };
  const list = loadList().filter((row) => String(row.name || "").trim().toLocaleLowerCase("de") !== key);
  list.push(entry);
  localStorage.setItem(LIST_KEY, JSON.stringify(list));
}

function answerText(key) {
  const question = QUESTIONS.find((item) => item.key === key);
  if (!question) return "";
  const value = state.answers[key];
  if (question.type === "choice") {
    const option = question.options.find((item) => item.value === value);
    return option ? option.label : "";
  }
  if (question.type === "scale") {
    const line = question.lines[value] || "";
    return line ? `${value} — ${line}` : String(value);
  }
  return String(value || "").trim();
}

function sendAnswers() {
  const payload = {
    gast: answerText("guest"),
    outfit: answerText("color"),
    traenen: answerText("tears"),
    essen: answerText("food"),
    wein: answerText("wine"),
    tanz: answerText("dance"),
    antrag: answerText("proposal"),
    datum: answerText("when"),
  };
  try {
    fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    /* Die Karte erscheint auch, wenn die Tabelle gerade nicht erreichbar ist. */
  }
}

function persist() {
  try {
    saveGuest();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ unlocked: true, answers: state.answers })
    );
  } catch (error) {
    /* Privates Fenster: die Einladung gilt trotzdem für diesen Besuch. */
  }
}

function loadUnlocked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || !data.unlocked || !data.answers) return false;
    state.answers = { ...emptyAnswers(), ...data.answers };
    state.answers.dance = Number(state.answers.dance) || 5;
    state.answers.kids = Number(state.answers.kids) || 0;
    return true;
  } catch (error) {
    return false;
  }
}

function clearUnlocked() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    /* egal */
  }
}

function go(step, celebrate) {
  if (animating) return;
  swap(() => {
    state.step = step;
    if (step === 0) renderIntro();
    else if (step === finaleStep()) renderFinale(celebrate);
    else renderQuestion();
  });
}

function attemptNext() {
  if (animating || state.step < 1 || state.step > QUESTIONS.length) return;
  if (!canAdvance()) {
    signalInvalid();
    return;
  }
  if (state.step === QUESTIONS.length) {
    persist();
    sendAnswers();
    go(finaleStep(), true);
    return;
  }
  go(state.step + 1, false);
}

function moveRadio(direction) {
  const inputs = [...panel.querySelectorAll(".choices input")];
  if (!inputs.length) return;
  const current = inputs.findIndex((input) => input.checked);
  let index = current + direction;
  if (current === -1) index = direction > 0 ? 0 : inputs.length - 1;
  if (index < 0) index = inputs.length - 1;
  if (index >= inputs.length) index = 0;
  inputs[index].checked = true;
  inputs[index].focus();
  inputs[index].dispatchEvent(new Event("change", { bubbles: true }));
}

function tickCountdown() {
  const root = document.querySelector("#countdown");
  if (!root) return;
  const units = root.querySelectorAll(".unit");
  const diff = HOCHZEIT.ziel.getTime() - Date.now();
  if (diff <= 0) {
    units.forEach((unit, index) => {
      unit.querySelector("b").textContent = "00";
      if (index === 0) unit.setAttribute("aria-label", "Es ist so weit");
    });
    const label = document.querySelector("#when-label");
    if (label) label.textContent = "Heute ist der Tag";
    return;
  }
  const total = Math.floor(diff / 1000);
  const parts = [
    Math.floor(total / 86400),
    Math.floor((total % 86400) / 3600),
    Math.floor((total % 3600) / 60),
    total % 60,
  ];
  const names = ["Tage", "Stunden", "Minuten", "Sekunden"];
  parts.forEach((value, index) => {
    const shown = index === 0 ? String(value) : String(value).padStart(2, "0");
    units[index].querySelector("b").textContent = shown;
    units[index].setAttribute("aria-label", `${value} ${names[index]}`);
  });
}

function stopCountdown() {
  if (countdownTimer) window.clearInterval(countdownTimer);
  countdownTimer = null;
}

function resizeConfetti() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function stopConfetti() {
  if (confettiFrame) cancelAnimationFrame(confettiFrame);
  confettiFrame = null;
  confettiPieces = [];
  resizeConfetti();
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function spawnConfetti(count, fromTop) {
  const colors = ["#6e2e3a", "#e7c1c4", "#d4bc96", "#c96b78", "#fbf7f2", "#b08968", "#f3e6c8"];
  for (let i = 0; i < count; i += 1) {
    const rect = Math.random() > 0.25;
    confettiPieces.push({
      x: Math.random() * window.innerWidth,
      y: fromTop ? -24 - Math.random() * 120 : window.innerHeight * 0.15,
      w: rect ? 8 + Math.random() * 7 : 6 + Math.random() * 5,
      h: rect ? 12 + Math.random() * 8 : 6 + Math.random() * 5,
      vx: -0.7 + Math.random() * 1.4,
      vy: 0.55 + Math.random() * 1.15,
      rot: Math.random() * Math.PI,
      vr: -0.08 + Math.random() * 0.16,
      color: colors[i % colors.length],
      circle: !rect,
    });
  }
}

function launchConfetti() {
  if (prefersReducedMotion()) return;
  stopConfetti();
  spawnConfetti(110, true);
  window.setTimeout(() => spawnConfetti(48, true), 600);
  window.setTimeout(() => spawnConfetti(48, true), 1400);
  window.setTimeout(() => spawnConfetti(36, true), 2300);

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    confettiPieces = confettiPieces.filter((piece) => piece.y < window.innerHeight + 40);
    confettiPieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.vy += 0.01;
      piece.rot += piece.vr;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rot);
      ctx.fillStyle = piece.color;
      if (piece.circle) {
        ctx.beginPath();
        ctx.arc(0, 0, piece.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      }
      ctx.restore();
    });
    if (confettiPieces.length) confettiFrame = requestAnimationFrame(draw);
    else confettiFrame = null;
  };

  confettiFrame = requestAnimationFrame(draw);
}

function icsStamp(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function icsEscape(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldLine(line) {
  if (line.length <= 75) return line;
  let out = line.slice(0, 75);
  for (let index = 75; index < line.length; index += 74) {
    out += `\r\n ${line.slice(index, index + 74)}`;
  }
  return out;
}

function buildIcs(answers) {
  const names = `${HOCHZEIT.nameLinks} & ${HOCHZEIT.nameRechts}`;
  const stamp = icsStamp(new Date());
  const description = [
    "Du hast den Test bestanden! Wir freuen uns riesig auf dich.",
    `Outfit: ${answers.color.trim()}`,
    String(answers.song || "").trim() ? `Song: ${String(answers.song).trim()}` : "Song: Überraschung",
    "Die genaue Uhrzeit folgt.",
  ].join("\n");

  const events = [
    [
      "BEGIN:VEVENT",
      "UID:hochzeit-20270807@einladung",
      `DTSTAMP:${stamp}`,
      "DTSTART;VALUE=DATE:20270807",
      "DTEND;VALUE=DATE:20270808",
      `SUMMARY:${icsEscape(`Hochzeit — ${names}`)}`,
      `LOCATION:${icsEscape(HOCHZEIT.ort)}`,
      `DESCRIPTION:${icsEscape(description)}`,
      "END:VEVENT",
    ],
  ];

  if (answers.eve === "ja") {
    events.unshift([
      "BEGIN:VEVENT",
      "UID:poolparty-20270806@einladung",
      `DTSTAMP:${stamp}`,
      "DTSTART;VALUE=DATE:20270806",
      "DTEND;VALUE=DATE:20270807",
      "SUMMARY:Poolparty am Vorabend",
      `LOCATION:${icsEscape(HOCHZEIT.ort)}`,
      "DESCRIPTION:Bring Badesachen mit.",
      "END:VEVENT",
    ]);
  }

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hochzeit//Einladung//DE",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...events.flat(),
    "END:VCALENDAR",
  ];

  return `${lines.map(foldLine).join("\r\n")}\r\n`;
}

function downloadIcs() {
  const file = buildIcs(state.answers);
  const blob = new Blob([file], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "hochzeit-07-08-2027.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);

  const label = document.querySelector("[data-action='ics'] .btn-label");
  if (!label) return;
  const original = label.textContent;
  label.textContent = "Datei liegt bereit";
  window.setTimeout(() => {
    label.textContent = original;
  }, 2600);
}

function bind() {
  document.addEventListener("click", (event) => {
    const meal = event.target.closest("[data-meal]");
    const party = event.target.closest("[data-party]");
    if (!animating && document.body.classList.contains("is-home") && (meal || party)) {
      if (meal) state.answers.meal = meal.dataset.meal;
      if (party) {
        state.answers.plusOne = party.dataset.party;
        if (!needsKids(state.answers.plusOne)) state.answers.kids = 0;
      }
      syncHomeParty();
      persist();
      flashSaved();
      return;
    }
    const action = event.target.closest("[data-action]");
    if (!action || animating) return;
    const type = action.dataset.action;
    if (type === "start") go(1, false);
    if (type === "back") go(Math.max(0, state.step - 1), false);
    if (type === "next") attemptNext();
    if (type === "skip" && state.step === QUESTIONS.length) {
      state.answers.song = "";
      persist();
      go(finaleStep(), true);
    }
    if (type === "ics") downloadIcs();
    if (type === "csv") downloadGuestCsv();
    if (type === "replay") {
      closeHome();
      stopConfetti();
      clearUnlocked();
      state.answers = emptyAnswers();
      go(0, false);
    }
  });

  panel.addEventListener("change", (event) => {
    const question = currentQuestion();
    if (!question || question.type !== "choice") return;
    if (event.target.matches("input[type='radio']")) {
      state.answers[question.key] = event.target.value;
      syncChoice(true);
    }
  });

  panel.addEventListener("input", (event) => {
    const question = currentQuestion();
    if (!question) return;
    if (question.type === "name" && event.target.id === "guest-name") syncName();
    if (question.type === "color" && event.target.id === "color") syncColor("live");
    if (question.type === "scale" && event.target.id === "scale") syncScale(true);
    if (question.type === "song" && event.target.id === "song") syncSong();
    if (event.target.id === "kids") {
      state.answers.kids = Number(event.target.value);
      setNextEnabled(canAdvance());
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "home-name") state.answers.name = event.target.value;
    if (event.target.id === "home-kids-input") {
      state.answers.kids = Number(event.target.value);
      syncHomeParty();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "home-name" || event.target.id === "home-kids-input") {
      persist();
      flashSaved();
    }
  });

  panel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.matches("#color, #song, #guest-name, #kids")) {
      event.preventDefault();
      attemptNext();
    }
    if (!event.target.closest(".choices")) return;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      moveRadio(1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      moveRadio(-1);
    }
  });

  window.addEventListener("resize", () => {
    if (confettiPieces.length || confettiFrame) resizeConfetti();
  });
}

function renderList() {
  const list = loadList().sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const people = list.reduce((sum, row) => sum + (Number(row.people) || 0), 0);
  const rows = list
    .map((row) => {
      const when = new Date(row.at).toLocaleString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      const pool = row.eve === "ja" ? "Poolparty" : "Ohne Vorabend";
      return `
        <li class="guest-row">
          <strong>${escapeHtml(row.name)}</strong>
          <span>${escapeHtml(partyLabel(row))} · ${row.people} ${row.people === 1 ? "Person" : "Personen"}${row.meal ? ` · ${escapeHtml(row.meal)}` : ""}</span>
          <span>${escapeHtml(pool)} · ${escapeHtml(when)}</span>
        </li>
      `;
    })
    .join("");

  panel.innerHTML = `
    <section class="guest-list">
      <p class="kicker">Nur für euch</p>
      <h1>Wer kommt.</h1>
      <div class="guest-stats">
        <div class="stat"><b>${list.length}</b><span>${list.length === 1 ? "Zusage" : "Zusagen"}</span></div>
        <div class="stat"><b>${people}</b><span>${people === 1 ? "Person" : "Personen"}</span></div>
      </div>
      ${
        list.length
          ? `<ul class="guest-rows">${rows}</ul>`
          : `<p class="lede">Noch niemand. Sobald jemand das Quiz schafft, steht der Name hier.</p>`
      }
      <p class="list-note">Die Liste sammelt alle Zusagen in diesem Browser.</p>
      <div class="list-actions">
        <button class="btn" type="button" data-action="csv" ${list.length ? "" : "disabled"}>Liste speichern</button>
        <a class="btn-ghost list-back" href="${window.location.pathname}">Zur Einladung</a>
      </div>
    </section>
  `;
}

function downloadGuestCsv() {
  const header = ["Name", "Dabei", "Personen", "Essen", "Poolparty", "Outfit", "Song", "Zeit"];
  const lines = [header, ...loadList().map((row) => [
    row.name,
    partyLabel(row),
    String(row.people || ""),
    row.meal || "",
    row.eve === "ja" ? "Ja" : "Nein",
    row.color || "",
    row.song || "",
    row.at || "",
  ])];
  const csv = `\uFEFF${lines
    .map((line) => line.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(";"))
    .join("\r\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "gaesteliste.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function init() {
  bind();
  setFavicon();
  card.classList.add("is-ready");
  if (isListView()) {
    progressWrap.hidden = true;
    panel.dataset.shown = "1";
    renderList();
    updateTitle();
    return;
  }
  if (loadUnlocked()) {
    state.step = finaleStep();
    panel.dataset.shown = "1";
    renderFinale(false);
    updateProgress();
    updateTitle();
    document.body.classList.add("is-open");
    return;
  }
  state.step = 0;
  panel.dataset.shown = "1";
  renderIntro();
  updateTitle();
}

init();
