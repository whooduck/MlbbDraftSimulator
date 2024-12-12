// Custom database lokal (contoh data untuk hero)
const heroes = [
    { name: 'Эймон', img: '/Assets/HeroPick/aamon.png' },
    { name: 'Акай', img: '/Assets/HeroPick/akai.png' },
    { name: 'Алдос', img: '/Assets/HeroPick/aldous.png' },
    { name: 'Алиса', img: '/Assets/HeroPick/alice.png' },
    { name: 'Альфа', img: '/Assets/HeroPick/alpha.png' },
    { name: 'Алукард', img: '/Assets/HeroPick/alucard.png' },
    { name: 'Ангела', img: '/Assets/HeroPick/angela.png' },
    { name: 'Аргус', img: '/Assets/HeroPick/argus.png' },
    { name: 'Арлотт', img: '/Assets/HeroPick/arlot.png' },
    { name: 'Атлас', img: '/Assets/HeroPick/atlas.png' },
    { name: 'Аулус', img: '/Assets/HeroPick/aulus.png' },
    { name: 'Аврора', img: '/Assets/HeroPick/aurora.png' },
    { name: 'Баданг', img: '/Assets/HeroPick/badang.png' },
    { name: 'Бальмонд', img: '/Assets/HeroPick/balmond.png' },
    { name: 'Бейн', img: '/Assets/HeroPick/bane.png' },
    { name: 'Бартс', img: '/Assets/HeroPick/barats.png' },
    { name: 'Баксий', img: '/Assets/HeroPick/baxia.png' },
    { name: 'Беатрис', img: '/Assets/HeroPick/beatrix.png' },
    { name: 'Белерик', img: '/Assets/HeroPick/beleric.png' },
    { name: 'Бенедетта', img: '/Assets/HeroPick/benedetta.png' },
    { name: 'Броуди', img: '/Assets/HeroPick/brody.png' },
    { name: 'Бруно', img: '/Assets/HeroPick/bruno.png' },
    { name: 'Кармила', img: '/Assets/HeroPick/carmila.png' },
    { name: 'Сесилион', img: '/Assets/HeroPick/cecilion.png' },
    { name: 'Чан\'э', img: '/Assets/HeroPick/chang_e.png' },
    { name: 'Чип', img: '/Assets/HeroPick/chip.png' },
    { name: 'Чу', img: '/Assets/HeroPick/chou.png' },
    { name: 'Чичи', img: '/Assets/HeroPick/cici.png' },
    { name: 'Клауд', img: '/Assets/HeroPick/claude.png' },
    { name: 'Клинт', img: '/Assets/HeroPick/clint.png' },
    { name: 'Циклоп', img: '/Assets/HeroPick/cyclops.png' },
    { name: 'Дигги', img: '/Assets/HeroPick/diggie.png' },
    { name: 'Дариус', img: '/Assets/HeroPick/dyroth.png' },
    { name: 'Эдит', img: '/Assets/HeroPick/edith.png' },
    { name: 'Эсмеральда', img: '/Assets/HeroPick/esmeralda.png' },
    { name: 'Эстес', img: '/Assets/HeroPick/estes.png' },
    { name: 'Эйдора', img: '/Assets/HeroPick/eudora.png' },
    { name: 'Фанни', img: '/Assets/HeroPick/fanny.png' },
    { name: 'Фарамис', img: '/Assets/HeroPick/faramis.png' },
    { name: 'Флорин', img: '/Assets/HeroPick/floryn.png' },
    { name: 'Франко', img: '/Assets/HeroPick/franco.png' },
    { name: 'Фредрин', img: '/Assets/HeroPick/fredrin.png' },
    { name: 'Фрейя', img: '/Assets/HeroPick/freya.png' },
    { name: 'Гатоткача', img: '/Assets/HeroPick/gatotkaca.png' },
    { name: 'Глу', img: '/Assets/HeroPick/gloo.png' },
    { name: 'Горд', img: '/Assets/HeroPick/gord.png' },
    { name: 'Грейнжер', img: '/Assets/HeroPick/granger.png' },
    { name: 'Грок', img: '/Assets/HeroPick/grock.png' },
    { name: 'Гвиневра', img: '/Assets/HeroPick/guinevere.png' },
    { name: 'Госсен', img: '/Assets/HeroPick/gusion.png' },
    { name: 'Ханаби', img: '/Assets/HeroPick/hanabi.png' },
    { name: 'Ханзо', img: '/Assets/HeroPick/hanzo.png' },
    { name: 'Харит', img: '/Assets/HeroPick/harith.png' },
    { name: 'Харли', img: '/Assets/HeroPick/harley.png' },
    { name: 'Хаябуса', img: '/Assets/HeroPick/hayabusa.png' },
    { name: 'Хелкарт', img: '/Assets/HeroPick/helcurt.png' },
    { name: 'Хильда', img: '/Assets/HeroPick/hilda.png' },
    { name: 'Хилос', img: '/Assets/HeroPick/hylos.png' },
    { name: 'Иритель', img: '/Assets/HeroPick/irithel.png' },
    { name: 'Иксия', img: '/Assets/HeroPick/ixia.png' },
    { name: 'Кусака', img: '/Assets/HeroPick/jawhead.png' },
    { name: 'Джонсон', img: '/Assets/HeroPick/johnson.png' },
    { name: 'Джой', img: '/Assets/HeroPick/joy.png' },
    { name: 'Джулиан', img: '/Assets/HeroPick/julian.png' },
    { name: 'Кадита', img: '/Assets/HeroPick/kadita.png' },
    { name: 'Кагура', img: '/Assets/HeroPick/kagura.png' },
    { name: 'Кайя', img: '/Assets/HeroPick/kaja.png' },
    { name: 'Карина', img: '/Assets/HeroPick/karina.png' },
    { name: 'Керри', img: '/Assets/HeroPick/karrie.png' },
    { name: 'Халид', img: '/Assets/HeroPick/khaleed.png' },
    { name: 'Хуфра', img: '/Assets/HeroPick/khufra.png' },
    { name: 'Кимми', img: '/Assets/HeroPick/kimmy.png' },
    { name: 'Ланселот', img: '/Assets/HeroPick/lancelot.png' },
    { name: 'Лапу-лапу', img: '/Assets/HeroPick/lapulapu.png' },
    { name: 'Лейла', img: '/Assets/HeroPick/layla.png' },
    { name: 'Леоморд', img: '/Assets/HeroPick/leomord.png' },
    { name: 'Лесли', img: '/Assets/HeroPick/lesley.png' },
    { name: 'Линг', img: '/Assets/HeroPick/ling.png' },
    { name: 'Лолита', img: '/Assets/HeroPick/lolita.png' },
    { name: 'Люнокс', img: '/Assets/HeroPick/lunox.png' },
    { name: 'Ло йи', img: '/Assets/HeroPick/luoyi.png' },
    { name: 'Лилия', img: '/Assets/HeroPick/lylia.png' },
    { name: 'Мартис', img: '/Assets/HeroPick/martis.png' },
    { name: 'Маша', img: '/Assets/HeroPick/masha.png' },
    { name: 'Матильда', img: '/Assets/HeroPick/mathilda.png' },
    { name: 'Мелисса', img: '/Assets/HeroPick/melissa.png' },
    { name: 'Минотавр', img: '/Assets/HeroPick/minotour.png' },
    { name: 'Минситтар', img: '/Assets/HeroPick/minsitthar.png' },
    { name: 'Мия', img: '/Assets/HeroPick/miya.png' },
    { name: 'Москов', img: '/Assets/HeroPick/moskov.png' },
    { name: 'Нана', img: '/Assets/HeroPick/nana.png' },
    { name: 'Наталья', img: '/Assets/HeroPick/natalia.png' },
    { name: 'Натан', img: '/Assets/HeroPick/nathan.png' },
    { name: 'Нолан', img: '/Assets/HeroPick/nolan.png' },
    { name: 'Новария', img: '/Assets/HeroPick/novaria.png' },
    { name: 'Одетта', img: '/Assets/HeroPick/odette.png' },
    { name: 'Пакито', img: '/Assets/HeroPick/paquito.png' },
    { name: 'Фаша', img: '/Assets/HeroPick/parsha.png' },
    { name: 'Фовиус', img: '/Assets/HeroPick/phoveus.png' },
    { name: 'Пополь и купа', img: '/Assets/HeroPick/popolandkupa.png' },
    { name: 'Рафаэль', img: '/Assets/HeroPick/rafaela.png' },
    { name: 'Роджер', img: '/Assets/HeroPick/roger.png' },
    { name: 'Руби', img: '/Assets/HeroPick/ruby.png' },
    { name: 'Сабер', img: '/Assets/HeroPick/saber.png' },
    { name: 'Селена', img: '/Assets/HeroPick/selena.png' },
    { name: 'Сильванна', img: '/Assets/HeroPick/silvanna.png' },
    { name: 'Сан', img: '/Assets/HeroPick/sun.png' },
    { name: 'Су Ё', img: '/Assets/HeroPick/suyou.png' },
    { name: 'Теризла', img: '/Assets/HeroPick/terizla.png' },
    { name: 'Тамуз', img: '/Assets/HeroPick/thamuz.png' },
    { name: 'Тигрил', img: '/Assets/HeroPick/tigreal.png' },
    { name: 'Уранус', img: '/Assets/HeroPick/uranus.png' },
    { name: 'Вейл', img: '/Assets/HeroPick/vale.png' },
    { name: 'Валентина', img: '/Assets/HeroPick/valentina.png' },
    { name: 'Валир', img: '/Assets/HeroPick/valir.png' },
    { name: 'Вексана', img: '/Assets/HeroPick/vexana.png' },
    { name: 'Ванван', img: '/Assets/HeroPick/wanwan.png' },
    { name: 'Ксавьер', img: '/Assets/HeroPick/xavier.png' },
    { name: 'Иксборг', img: '/Assets/HeroPick/xborg.png' },
    { name: 'Инь', img: '/Assets/HeroPick/yin.png' },
    { name: 'Лисунсин', img: '/Assets/HeroPick/yisunshin.png' },
    { name: 'Чонг', img: '/Assets/HeroPick/yuzhong.png' },
    { name: 'Ив', img: '/Assets/HeroPick/yve.png' },
    { name: 'Заск', img: '/Assets/HeroPick/zhask.png' },
    { name: 'Чжу синь', img: '/Assets/HeroPick/zhuxin.png' },
    { name: 'Зилонг', img: '/Assets/HeroPick/zilong.png' }
];

let currentStep = 0;
const draftSequence = [
    { team: 'blue', type: 'ban', id: 6 },
    { team: 'red', type: 'ban', id: 16 },
    { team: 'blue', type: 'ban', id: 7 },
    { team: 'red', type: 'ban', id: 17 },
    { team: 'blue', type: 'ban', id: 8 },
    { team: 'red', type: 'ban', id: 18 },
    { team: 'blue', type: 'pick', id: 1 },
    { team: 'red', type: 'pick', id: 11 },
    { team: 'red', type: 'pick', id: 12 },
    { team: 'blue', type: 'pick', id: 2 },
    { team: 'blue', type: 'pick', id: 3 },
    { team: 'red', type: 'pick', id: 13 },
    { team: 'red', type: 'ban', id: 19 },
    { team: 'blue', type: 'ban', id: 9 },
    { team: 'red', type: 'ban', id: 20 },
    { team: 'blue', type: 'ban', id: 10 },
    { team: 'red', type: 'pick', id: 14 },
    { team: 'blue', type: 'pick', id: 4 },
    { team: 'blue', type: 'pick', id: 5 },
    { team: 'red', type: 'pick', id: 15 }
];

function nextDraftStep() {
    if (currentStep < draftSequence.length) {
        const step = draftSequence[currentStep];
        const input = document.getElementById(`search-${step.id}`);
        if (input) {
            input.disabled = false;
            
            // Disable all other inputs except the current one
            for (let i = 1; i <= 20; i++) {
                if (i !== step.id) {
                    const otherInput = document.getElementById(`search-${i}`);
                    if (otherInput) {
                        otherInput.disabled = true;
                    }
                }
            }
        }
        currentStep++;
    }
}

// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan

    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
let selectedHero = null;
let selectedSlot = null;

// Database to track picks, bans, and wins
const heroStats = heroes.reduce((acc, hero) => {
    acc[hero.name] = { picks: 0, bans: 0, wins: 0, losses: 0 };
    return acc;
}, {});

function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            updateHeroImage(hero, id);
            removeHeroButton(hero.name);
            nextDraftStep();
        }, 500);
    } else {
        updateHeroImage(hero, id);
        removeHeroButton(hero.name);
        nextDraftStep();
    }

    // Update pick or ban count based on the draft sequence
    const step = draftSequence[currentStep - 0];
    if (step.type === 'pick') {
        heroStats[hero.name].picks++;
    } else if (step.type === 'ban') {
        heroStats[hero.name].bans++;
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in" onclick="selectSlot(${id})">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}

function selectSlot(id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const heroImage = imageDisplay.querySelector('img');

    if (selectedHero && selectedSlot !== id) {
        const targetImageDisplay = document.getElementById(`image-display-${selectedSlot}`);
        const targetHeroImage = targetImageDisplay.querySelector('img');

        // Add swap-out class to trigger animation
        heroImage.classList.add('swap-out');
        targetHeroImage.classList.add('swap-out');

        // Swap images after the swap-out animation
        setTimeout(() => {
            const tempSrc = heroImage.src;
            const tempAlt = heroImage.alt;

            heroImage.src = targetHeroImage.src;
            heroImage.alt = targetHeroImage.alt;

            targetHeroImage.src = tempSrc;
            targetHeroImage.alt = tempAlt;

            // Add swap-in class to trigger animation
            heroImage.classList.remove('swap-out');
            targetHeroImage.classList.remove('swap-out');
            heroImage.classList.add('swap-in');
            targetHeroImage.classList.add('swap-in');

            // Remove swap-in class after animation
            setTimeout(() => {
                heroImage.classList.remove('swap-in');
                targetHeroImage.classList.remove('swap-in');
            }, 500);
        }, 500);

        // Reset selectedHero and selectedSlot
        selectedHero = null;
        selectedSlot = null;
    } else if (heroImage) {
        if (selectedSlot === id) {
            // Deselect if the same slot is clicked again
            selectedHero = null;
            selectedSlot = null;
        } else {
            selectedHero = heroes.find(hero => hero.name === heroImage.alt);
            selectedSlot = id;
        }
    }
}


function calculateWinPercentage(heroName) {
    const { wins, losses } = heroStats[heroName];
    const totalGames = wins + losses;
    return totalGames ? (wins / totalGames) * 100 : 0;
}

// Fungsi untuk menghapus tombol hero setelah dipilih
function removeHeroButton(heroName) {
    const heroButtons = document.querySelectorAll('.hero-image');
    heroButtons.forEach(button => {
        if (button.alt === heroName) {
            button.remove();
        }
    });
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            // Add fly-out animation class
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        // Clear input and dropdown after animation
        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
            document.getElementById(`search-${i}`).disabled = true;
        }, 500); // Delay matches animation duration (0.5 seconds)
    }
    // Recreate hero buttons
    setTimeout(() => {
        const heroContainer = document.getElementById('hero-container');
        heroContainer.innerHTML = ''; // Clear existing buttons
        createHeroImageButtons();
        currentStep = 0; // Reset currentStep to 0
    }, 500); // Delay to match the animation duration
}

 // Fungsi untuk mengupdate output NICKNAME=------------=-=-==-
 function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    // Update output setelah switch
    updateOutput();
}

 // Fungsi untuk menukar gambar dan nama тим
 function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama тим yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
}

// Fungsi untuk mereset gambar, nama тим, dan checkbox ke kondisi awal
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).unchecked = true;
        document.getElementById('extraImage' + i).style.display = "block";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

// Fungsi untuk menukar semua (nama тим, gambar utama, dan status checkbox 1-3 dengan 4-6)
function switchAll() {
    // Tukar nama тим
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    // Tukar gambar utama
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        // Tukar status checkbox
        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

// Fungsi untuk mengubah gambar latar belakang pick
function changePickBg(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        document.documentElement.style.setProperty('--pick-bg-image', `url(${fileURL})`);
    }
}

function changeTournamentInfoBg(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        document.querySelector('.tournamentinfo').style.backgroundImage = `url(${fileURL})`;
    }
}

function changeTournamentLogo(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        document.querySelector('.tournamentlogo img').src = fileURL;
    }
}

function changeTournamentNameBg(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        document.querySelector('.tournamentname').style.backgroundImage = `url(${fileURL})`;
    }
}

    // Ambil elemen input dan output
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    // Fungsi untuk menampilkan teks yang sama di output saat user mengetik
    tournamentnameInput.addEventListener('input', function() {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });

function createHeroImageButtons() {
    const heroContainer = document.getElementById('hero-container');
    heroes.forEach(hero => {
        const img = document.createElement('img');
        img.src = hero.img;
        img.alt = hero.name;
        img.classList.add('hero-image');
        img.onclick = () => selectHeroByImage(hero);
        heroContainer.appendChild(img);
    });
}

function selectHeroByImage(hero) {
    if (currentStep < draftSequence.length) {
        const step = draftSequence[currentStep];
        selectHero(hero, step.id);
    }
}

function filterDraftCharacters() {
    const searchInput = document.getElementById('draft-search').value.toLowerCase();
    const heroButtons = document.querySelectorAll('.hero-image');

    heroButtons.forEach(button => {
        const heroName = button.alt.toLowerCase();
        if (heroName.includes(searchInput)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// ...existing code...

async function saveDraftData() {
    const draftData = {
        currentStep,
        draftSequence,
        heroStats,
        teamNames: {
            blue: document.getElementById('team1').value,
            red: document.getElementById('team2').value
        }
    };

    try {
        showLoadingSpinner();
        const response = await fetch('/save-draft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(draftData)
        });
        const result = await response.json();
        showServerMessage(result.message);
    } catch (error) {
        showServerMessage('Error saving draft data.');
    } finally {
        hideLoadingSpinner();
    }
}

async function loadDraftData() {
    try {
        showLoadingSpinner();
        const response = await fetch('/load-draft');
        const draftData = await response.json();

        currentStep = draftData.currentStep;
        draftSequence = draftData.draftSequence;
        Object.assign(heroStats, draftData.heroStats);
        document.getElementById('team1').value = draftData.teamNames.blue;
        document.getElementById('team2').value = draftData.teamNames.red;
        updateTeamName();
        updateOutput();
        showServerMessage('Draft data loaded successfully.');
    } catch (error) {
        showServerMessage('Error loading draft data.');
    } finally {
        hideLoadingSpinner();
    }
}

function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

function showServerMessage(message) {
    const messageElement = document.getElementById('server-message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}

// ...existing code...

window.onload = () => {
    createHeroImageButtons();
    loadDraftData();
};


