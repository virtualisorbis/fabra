document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const audioBtn = section.querySelector(".audio-btn");
        const audioSrc = section.dataset.audio;
        const textElements = section.querySelectorAll("p[data-start][data-end]");

        if (!audioSrc || !audioBtn) return; // Ensure audio exists

        let audio = new Audio(audioSrc);
        let playing = false;

        audioBtn.addEventListener("click", () => {
            if (!playing) {
                audio.play();
                playing = true;
                audioBtn.innerText = "⏸️";

                // Reset all text highlights before playback
                textElements.forEach(text => text.classList.remove("highlight"));

                // Monitor audio playback and highlight text dynamically
                audio.addEventListener("timeupdate", () => {
                    let currentTime = audio.currentTime;

                    textElements.forEach(text => {
                        const startTime = parseFloat(text.dataset.start);
                        const endTime = parseFloat(text.dataset.end);

                        if (currentTime >= startTime && currentTime <= endTime) {
                            text.classList.add("highlight");
                        } else {
                            text.classList.remove("highlight");
                        }
                    });
                });

                // When audio ends, reset everything
                audio.addEventListener("ended", () => {
                    playing = false;
                    audioBtn.innerText = "🔊";
                    textElements.forEach(text => text.classList.remove("highlight"));
                });

            } else {
                audio.pause();
                playing = false;
                audioBtn.innerText = "🔊";
            }
        });
    });
});


















document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "en": { // English translations
            "Era": "Was", "una": "a", "nena": "girl", "llavors": "then",
            "Agafava": "Took", "gairebé": "almost", "tots": "all", "els": "the",
            "dies": "days", "el": "the", "tramvia": "tram", "i": "and",
            "meus": "my", "horaris": "schedules", "sempre": "always",
            "eren": "were", "mateixos": "same", "El": "The",
            "trajecte": "journey", "acostumava": "used to", "a": "to", "ser": "be", "de": "of", "trenta": "thirty", "minuts": "minutes",
            "tot": "all", "i": "and", "que": "that", "dependia": "depended", "una": "a", "mica": "bit", "del": "of the",
            "nombre": "number", "de": "of", "gent": "people", "que": "who", "pujava": "got on", "a": "at", "cada": "each", "parada": "stop",
            "Aquell": "That", "era": "was", "el": "the", "primer": "first", "any": "year", "que": "that", "m’havien": "they had", "donat": "given", "permís": "permission", "per": "to", "anar-hi": "go there", "sola": "alone",
            "Diria": "I would say", "que": "that", "aquesta": "this", "llibertat": "freedom", "em": "me", "feia": "made", "sentir": "feel", "més": "more", "alta": "tall", "i": "and", "gairebé": "almost", "adulta": "adult",
            "Al": "At", "començament": "beginning", "em": "I", "passava": "spent", "el": "the", "que": "that", "durava": "lasted", "el": "the", "viatge": "journey", "mirant": "looking", "a": "at", "terra": "ground",
            "A": "As", "mesura": "time", "que": "that", "van": "they", "anar": "went", "avançant": "advancing", "les": "the", "setmanes": "weeks", "però": "but",
            "vaig": "I", "decidir": "decided", "jugar": "play", "a": "to", "un": "a", "joc": "game", "amb": "with", "mi": "myself", "mateixa": "same",
            "perquè": "because", "aquells": "those", "trenta": "thirty", "minuts": "minutes", "no": "not", "se’m": "seemed", "fessin": "become", "tan": "so", "llargs": "long",



            "Era": "Was", "un": "a", "joc": "game", "fàcil": "easy", "i": "and", "silenciós": "silent", "en": "in", "què": "which", "només": "only", "hi": "there", "intervenia": "was involved", "la": "the", "meva": "my", "imaginació": "imagination",
            "Tant": "Both", "d’anada": "going", "com": "as", "de": "returning", "tornada": "return", "seleccionava": "selected", "un": "a", "viatger": "traveler",
            "li": "to them", "construïa": "built", "una": "a", "identitat": "identity", "nom": "name", "professió": "profession", "història": "history", "personal": "personal",
            "No": "Not", "podria": "could", "dir": "say", "per": "why", "què": "what", "em": "I", "fixava": "noticed", "en": "in", "una": "one", "persona": "person",
            "Crec": "I believe", "fos": "was", "qüestió": "question", "d’afinitat": "of affinity", "més": "more", "aviat": "likely", "mirada": "gaze",
            "Tampoc": "Nor", "tenia": "had", "preferències": "preferences",
            "Vull": "I want", "dir": "to say", "algú": "someone", "setanta": "seventy", "anys": "years", "deu": "ten",
            "noia": "girl", "acabada": "just", "sortir": "out", "perruqueria": "hairdresser",
            "home": "man", "evidentment": "obviously", "arribant": "arriving", "tard": "late",
        },


        "fr": { // French translations
            "Era": "Était", "una": "une", "nena": "fille", "llavors": "alors",
            "Agafava": "Prenait", "gairebé": "presque", "tots": "tous", "els": "les",
            "dies": "jours", "el": "le", "tramvia": "tramway", "i": "et",
            "meus": "mes", "horaris": "horaires", "sempre": "toujours",
            "eren": "étaient", "mateixos": "mêmes", "El": "Le",
            "trajecte": "trajet", "acostumava": "avait l'habitude", "a": "à", "ser": "être", "de": "de", "trenta": "trente", "minuts": "minutes",
            "tot": "tout", "i": "et", "que": "que", "dependia": "dépendait", "una": "une", "mica": "peu", "del": "du",
            "nombre": "nombre", "de": "de", "gent": "gens", "que": "qui", "pujava": "montait", "a": "à", "cada": "chaque", "parada": "arrêt",
            "Aquell": "Ce", "era": "était", "el": "le", "primer": "premier", "any": "année", "que": "que", "m’havien": "ils avaient", "donat": "donné", "permís": "permission", "per": "pour", "anar-hi": "y aller", "sola": "seule",
            "Diria": "Je dirais", "que": "que", "aquesta": "cette", "llibertat": "liberté", "em": "me", "feia": "faisait", "sentir": "sentir", "més": "plus", "alta": "grande", "i": "et", "gairebé": "presque", "adulta": "adulte",
            "Al": "Au", "començament": "début", "em": "je", "passava": "passais", "el": "le", "que": "qui", "durava": "durait", "el": "le", "viatge": "voyage", "mirant": "regardant", "a": "à", "terra": "terre",
            "A": "À", "mesura": "mesure", "que": "que", "van": "ils", "anar": "aller", "avançant": "avancer", "les": "les", "setmanes": "semaines", "però": "mais",
            "vaig": "j'ai", "decidir": "décidé", "jugar": "jouer", "a": "à", "un": "un", "joc": "jeu", "amb": "avec", "mi": "moi", "mateixa": "même",
            "perquè": "parce que", "aquells": "ces", "trenta": "trente", "minuts": "minutes", "no": "ne", "se’m": "me", "fessin": "faisaient", "tan": "si", "llargs": "longs",


            "Era": "Était", "un": "un", "joc": "jeu", "fàcil": "facile", "i": "et", "silenciós": "silencieux", "en": "dans", "què": "lequel", "només": "seulement", "hi": "y", "intervenia": "intervenait", "la": "la", "meva": "ma", "imaginació": "imagination",
            "Tant": "Tant", "d’anada": "aller", "com": "comme", "de": "de", "tornada": "retour", "seleccionava": "sélectionnait", "un": "un", "viatger": "voyageur",
            "li": "lui", "construïa": "construisait", "una": "une", "identitat": "identité", "nom": "nom", "professió": "profession", "història": "histoire", "personal": "personnelle",
            "No": "Non", "podria": "pourrait", "dir": "dire", "per": "pourquoi", "què": "quoi", "em": "je", "fixava": "fixais", "en": "sur", "una": "une", "persona": "personne",
            "Crec": "Je crois", "fos": "était", "qüestió": "question", "d’afinitat": "d'affinité", "més": "plutôt", "aviat": "tôt", "mirada": "regard",
            "Tampoc": "Non plus", "tenia": "avait", "preferències": "préférences",
            "Vull": "Je veux", "dir": "dire", "algú": "quelqu'un", "setanta": "soixante-dix", "anys": "ans", "deu": "dix",
            "noia": "fille", "acabada": "sortie", "sortir": "sortir", "perruqueria": "salon de coiffure",
            "home": "homme", "evidentment": "évidemment", "arribant": "arrivant", "tard": "tard",


        },


        "ar": { // Arabic translations
            "Era": "كان", "una": "واحدة", "nena": "فتاة", "llavors": "ثم",
            "Agafava": "أخذت", "gairebé": "تقريبا", "tots": "كل", "els": "ال",
            "dies": "أيام", "el": "ال", "tramvia": "الترام", "i": "و",
            "meus": "جداولي", "horaris": "الزمنية", "sempre": "دائما",
            "eren": "كانت", "mateixos": "نفس", "El": "ال",
            "trajecte": "رحلة", "acostumava": "اعتادت", "a": "إلى", "ser": "أن تكون", "de": "من", "trenta": "ثلاثون", "minuts": "دقائق",
            "tot": "كل", "i": "و", "que": "الذي", "dependia": "يعتمد", "una": "قليلا", "mica": "قليل", "del": "من ال",
            "nombre": "عدد", "de": "من", "gent": "الناس", "que": "الذين", "pujava": "يصعدون", "a": "في", "cada": "كل", "parada": "محطة",
            "Aquell": "ذلك", "era": "كان", "el": "ال", "primer": "الأول", "any": "عام", "que": "الذي", "m’havien": "أعطوني", "donat": "إذن", "permís": "الإذن", "per": "لل", "anar-hi": "للذهاب", "sola": "وحدها",
            "Diria": "كنت سأقول", "que": "أن", "aquesta": "هذه", "llibertat": "الحرية", "em": "جعلتني", "feia": "أشعر", "sentir": "أشعر", "més": "أكثر", "alta": "طولا", "i": "و", "gairebé": "تقريبا", "adulta": "بالغًا",
            "Al": "في", "començament": "البداية", "em": "كنت", "passava": "أقضي", "el": "ال", "que": "الذي", "durava": "استمر", "el": "ال", "viatge": "الرحلة", "mirant": "أنظر", "a": "إلى", "terra": "الأرض",
            "A": "مع", "mesura": "مرور", "que": "ما", "van": "كانوا", "anar": "يذهبون", "avançant": "يتقدمون", "les": "ال", "setmanes": "أسابيع", "però": "لكن",
            "vaig": "قررت", "decidir": "قررت", "jugar": "اللعب", "a": "في", "un": "لعبة", "joc": "لعبة", "amb": "مع", "mi": "نفسي", "mateixa": "نفسي",
            "perquè": "لأن", "aquells": "تلك", "trenta": "ثلاثون", "minuts": "دقيقة", "no": "لا", "se’m": "تبدو", "fessin": "تصبح", "tan": "طويلة", "llargs": "طويلة",


            "Era": "كان", "un": "لعبة", "joc": "سهلة", "fàcil": "وسهلة", "i": "و", "silenciós": "صامت", "en": "في", "què": "التي", "només": "فقط", "hi": "كان", "intervenia": "يتدخل", "la": "ال", "meva": "لي", "imaginació": "خيالي",
            "Tant": "سواء", "d’anada": "ذهاب", "com": "كما", "de": "من", "tornada": "عودة", "seleccionava": "كنت أختار", "un": "مسافر", "viatger": "راكب",
            "li": "له", "construïa": "أنشأت", "una": "هوية", "identitat": "هوية", "nom": "اسم", "professió": "مهنة", "història": "قصة", "personal": "شخصية",
            "No": "لا", "podria": "يمكنني", "dir": "قول", "per": "لماذا", "què": "ماذا", "em": "أنا", "fixava": "أركز", "en": "على", "una": "شخص",
            "Crec": "أعتقد", "fos": "كانت", "qüestió": "مسألة", "d’afinitat": "توافق", "més": "أكثر", "aviat": "احتمالاً", "mirada": "نظرتي",
            "Tampoc": "لم يكن لدي", "tenia": "لدي", "preferències": "تفضيلات",
            "Vull": "أريد", "dir": "أن أقول", "algú": "شخص ما", "setanta": "سبعين", "anys": "عامًا", "deu": "عشر",
            "noia": "فتاة", "acabada": "خرجت للتو", "sortir": "الخروج", "perruqueria": "صالون الحلاقة",
            "home": "رجل", "evidentment": "من الواضح", "arribant": "وصل", "tard": "متأخر",

        }
    };


    const languageSelector = document.getElementById("languageSelector");

    function wrapWordsWithTranslation(container) {
        container.querySelectorAll("p").forEach(element => {
            let words = element.innerText.split(" ");
            element.innerHTML = words.map(word => {
                let cleanWord = word.replace(/[.,]/g, "");
                return `<span class="hover-word" data-word="${cleanWord}">${word}</span>`;
            }).join(" ");
        });
    }

    function updateTranslations(container, language) {
        container.querySelectorAll(".hover-word").forEach(span => {
            const word = span.dataset.word;
            span.dataset.translation = translations[language][word] || "Unknown";
        });
    }

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("hover-word")) {
            tooltip.innerText = e.target.dataset.translation;
            tooltip.style.display = "block";
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (tooltip.style.display === "block") {
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("hover-word")) {
            tooltip.style.display = "none";
        }
    });

    [".text-box", ".text-box2"].forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            wrapWordsWithTranslation(container);
            updateTranslations(container, "en");
        }
    });

    languageSelector.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value;
        [".text-box", ".text-box2"].forEach(selector => {
            const container = document.querySelector(selector);
            if (container) {
                updateTranslations(container, selectedLanguage);
            }
        });
    });
});













/*
const canvas = document.createElement("canvas");
canvas.id = "cursorCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Ensure canvas covers the full screen
function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", setupCanvas);

// Mouse Movement Variables
let mouseMoved = false;
const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    spring: 0.4,
    friction: 0.5
};

// Create cursor trail array
const trail = new Array(params.pointsNumber).fill(null).map(() => ({
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0
}));

// Define Catalan colors
const catalanColors = ["#ffcc00", "#ffcc00"]; // Red & Yellow

// Mouse Move Event
window.addEventListener("mousemove", (e) => {
    mouseMoved = true;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
});

// Touch Move Event (For Mobile)
window.addEventListener("touchmove", (e) => {
    mouseMoved = true;
    pointer.x = e.touches[0].clientX;
    pointer.y = e.touches[0].clientY;
});

// Animation Loop
function update(t) {
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * Math.sin(.005 * t)) * window.innerWidth;
        pointer.y = (.5 + .2 * Math.cos(.005 * t) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    trail.forEach((p, index) => {
        const prev = index === 0 ? pointer : trail[index - 1];
        const spring = index === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    // Draw the cursor trail with alternating colors
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);

        // Alternate colors between red & yellow
        ctx.strokeStyle = catalanColors[i % 2]; // Switch color every segment
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }

    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();

    window.requestAnimationFrame(update);
}

// Start Animation
setupCanvas();
update(0);


*/















document.addEventListener("scroll", function () {
    const section = document.querySelector(".moving-bg");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionTop = section.offsetTop;

    if (scrollPosition + windowHeight > sectionTop) {
        let moveAmount = Math.max(100 - (scrollPosition - sectionTop) * 0.2, 0);
        section.style.backgroundPosition = `${moveAmount}% center`;
    }
});







































































const audioPlayers = new Map();

function syncWords(audio, words) {
    const interval = setInterval(() => {
        const currentTime = audio.currentTime;
        words.forEach(word => {
            const start = parseFloat(word.dataset.start);
            const end = parseFloat(word.dataset.end);
            word.classList.toggle('active', currentTime >= start && currentTime < end);
        });
    }, 50);

    audio.addEventListener('ended', () => {
        clearInterval(interval);
        words.forEach(word => word.classList.remove('active'));
    });

    return interval;
}

document.querySelectorAll('.sync-audio').forEach(paragraph => {
    paragraph.addEventListener('click', () => {
        const audioSrc = paragraph.dataset.audio;

        if (!audioPlayers.has(audioSrc)) {
            const audio = new Audio(audioSrc);
            audioPlayers.set(audioSrc, { audio, interval: null });
        }

        const player = audioPlayers.get(audioSrc);
        const audio = player.audio;
        const words = paragraph.querySelectorAll('span');

        if (audio.paused) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error('Playback error:', error));
            player.interval = syncWords(audio, words);
        } else {
            audio.pause();
            clearInterval(player.interval);
            player.interval = null;
            words.forEach(word => word.classList.remove('active'));
        }
    });
});

























/*


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (event) => {
        document.addEventListener("mousemove", (event) => {
            const image = document.querySelector(".background");
            const cursorPos = document.getElementById("cursor-position");

            if (!image) return; // Ensure the image exists

            const rect = image.getBoundingClientRect(); // Get image position
            const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
            const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

            // Ensure percentages stay within bounds (0% - 100%)
            if (xPercent >= 0 && xPercent <= 100 && yPercent >= 0 && yPercent <= 100) {
                cursorPos.textContent = `${yPercent.toFixed(1)}%, ${xPercent.toFixed(1)}%`;

            }
        });
    });
});
*/