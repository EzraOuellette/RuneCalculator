    const runes = [
        { inputId: "goldenRune01",      name: "Golden Rune [1]",        value: 200,         smallId: "gr01",        iconName: "golden-rune-01"     },
        { inputId: "goldenRune02",      name: "Golden Rune [2]",        value: 400,         smallId: "gr02",        iconName: "golden-rune-02"     },
        { inputId: "goldenRune03",      name: "Golden Rune [3]",        value: 800,         smallId: "gr03",        iconName: "golden-rune-03"     },
        { inputId: "goldenRune04",      name: "Golden Rune [4]",        value: 1200,        smallId: "gr04",        iconName: "golden-rune-04"     },
        { inputId: "goldenRune05",      name: "Golden Rune [5]",        value: 1600,        smallId: "gr05",        iconName: "golden-rune-05"     },
        { inputId: "goldenRune06",      name: "Golden Rune [6]",        value: 2000,        smallId: "gr06",        iconName: "golden-rune-06"     },
        { inputId: "goldenRune07",      name: "Golden Rune [7]",        value: 2500,        smallId: "gr07",        iconName: "golden-rune-07"     },
        { inputId: "goldenRune08",      name: "Golden Rune [8]",        value: 3000,        smallId: "gr08",        iconName: "golden-rune-08"     },
        { inputId: "goldenRune09",      name: "Golden Rune [9]",        value: 3800,        smallId: "gr09",        iconName: "golden-rune-09"     },
        { inputId: "goldenRune10",      name: "Golden Rune [10]",       value: 5000,        smallId: "gr10",        iconName: "golden-rune-10"     },
        { inputId: "goldenRune11",      name: "Golden Rune [11]",       value: 6250,        smallId: "gr11",        iconName: "golden-rune-11"     },
        { inputId: "goldenRune12",      name: "Golden Rune [12]",       value: 7500,        smallId: "gr12",        iconName: "golden-rune-12"     },
        { inputId: "goldenRune13",      name: "Golden Rune [13]",       value: 10000,       smallId: "gr13",        iconName: "golden-rune-13"     },
        { inputId: "numenRune",         name: "Numen's Rune",           value: 12500,       smallId: "nr",          iconName: "numen-rune"         },
        { inputId: "heroRune01",        name: "Hero's Rune [1]",        value: 15000,       smallId: "hr01",        iconName: "hero-rune-01"       },
        { inputId: "heroRune02",        name: "Hero's Rune [2]",        value: 20000,       smallId: "hr02",        iconName: "hero-rune-02"       },
        { inputId: "heroRune03",        name: "Hero's Rune [3]",        value: 25000,       smallId: "hr03",        iconName: "hero-rune-03"       },
        { inputId: "heroRune04",        name: "Hero's Rune [4]",        value: 30000,       smallId: "hr04",        iconName: "hero-rune-04"       },
        { inputId: "heroRune05",        name: "Hero's Rune [5]",        value: 35000,       smallId: "hr05",        iconName: "hero-rune-05"       },
        { inputId: "lordRune",          name: "Lord's Rune",            value: 50000,       smallId: "lr",          iconName: "lord-rune"          },
    ]

// Test global variable to hold total runes in inventory

let userTotalRunes = {};

// Get information described in 'runes'

function calculateRuneArray() {
    let myRuneArray = []

    for (let i = 0; i < runes.length; i++) {
        runeValue = runes[i].value;
        runeName = runes[i].inputId;
        runeAmount = document.getElementById(runeName).value;
        runeEl = runes[i].smallId;

        const runeInformation = {
            newRuneValue: runeValue,
            newRuneName: runeName,
            newRuneAmount: runeAmount,
            newRuneEl: runeEl
        }
        myRuneArray.push(runeInformation)
    }
    return myRuneArray;
}

// Calculate the total for each rune type as well as the sum of all combined

function totalRuneAmount() {
    let myRuneArray = calculateRuneArray();
    let sum = 0;
    let myTotal = 0;
    for (let i = 0; i < myRuneArray.length; i++) {
        const runeInformation = myRuneArray[i];
        let totalz = runeInformation.newRuneAmount * runeInformation.newRuneValue;
        myTotal = totalz;
        sum += totalz;
        document.getElementById(runeInformation.newRuneEl).textContent = myTotal;
    }
    userTotalRunes = sum;
    canUserLevel();
}

function canUserLevel() {
    let userNeededRunes = parseInt(document.getElementById("needed-runes").value);
    let userHeldRunes = parseInt(document.getElementById("held-runes").value);

    let resultColor = document.getElementById("level-y-n").style;
    
    let userOverallRuneInventory = userTotalRunes + userHeldRunes;

    document.getElementById("totalRunes").textContent = userOverallRuneInventory;

    if (userNeededRunes <= userOverallRuneInventory) {
        document.getElementById("level-y-n").textContent = "YES";
        resultColor.color = "#009879";
    } else {
        document.getElementById("level-y-n").textContent = "NO";
        resultColor.color = "red";
    }
}

function getRuneIconUrl(inputId) {
    if (inputId == "rune-icon")
        return "./png/rune.png";

    let url = "";
    for (const rune of runes) {
        console.log(`${rune.inputId} === ${inputId}`);
        if (rune.inputId === inputId) {
            url = `./png/${rune.iconName}.png`
            console.log(`returning ${url}`)
            break;
        }
    }
    return url;
}

function loadIcons() {
    console.log('loading icons');
    let runeIconElement = document.getElementById("rune-icon");
    runeIconElement.src = getRuneIconUrl(runeIconElement.id);
    for (const rune of runes) {
        const url = getRuneIconUrl(rune.inputId);
        if (url !== "") {
            console.log(`loading ${url}`)
            const row = document.getElementById(`${rune.inputId}-row`);
            let elements = row.getElementsByClassName("icon");
            if (elements[0])
                elements[0].src = url;
        }
    }
}
