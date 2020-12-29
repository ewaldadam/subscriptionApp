function showMenu() {
    let x = document.getElementById("subscriptionMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function giveValueOfService() {
    let getSelectForm = document.getElementById("subscriptionDropdown");
    return getSelectForm.options[getSelectForm.selectedIndex].value;
}

function addNetflix() {
    let h = document.getElementById("content");
    h.insertAdjacentHTML("beforeend", "<dl>\n" +
        "  <dt>Netflix</dt>\n" +
        "  <dd>Neo Jobs</dd>\n" +
        "  <dd>Andrew Sullivan</dd>\n" +
        "  <dd>Tim Lewis</dd>\n" +
        "</dl>");
}

function addDisney() {
    let h = document.getElementById("content");
    h.insertAdjacentHTML("beforeend", "<dl>\n" +
        "  <dt>Disney</dt>\n" +
        "  <dd>Lucas Anderson</dd>\n" +
        "  <dd>John Bush</dd>\n" +
        "  <dd>Steven Martinez</dd>\n" +
        "  <dd>Robert Johnson</dd>\n" +
        "</dl>");
}

function addSpotify() {
    let h = document.getElementById("content");
    h.insertAdjacentHTML("beforeend", "<dl>\n" +
        "  <dt>Spotify</dt>\n" +
        "  <dd>Peter Brown</dd>\n" +
        "  <dd>James Miller</dd>\n" +
        "</dl>");
}

function addDropbox() {
    let h = document.getElementById("content");
    h.insertAdjacentHTML("beforeend", "<dl>\n" +
        "  <dt>Dropxbox</dt>\n" +
        "  <dd>Maria Garcia</dd>\n" +
        "</dl>");
}

function add1Password() {
    let h = document.getElementById("content");
    h.insertAdjacentHTML("beforeend", "<dl>\n" +
        "  <dt>1Password</dt>\n" +
        "  <dd>Juan Carlos</dd>\n" +
        "  <dd>Mike Jones</dd>\n" +
        "  <dd>David Smith</dd>\n" +
        "</dl>");
}


function addSubElement() {
    switch (giveValueOfService()) {
        case "netflix":
            addNetflix()
            break;
        case "disney":
            addDisney()
            break;
        case "spotify":
            addSpotify()
            break;
        case "dropbox":
            addDropbox()
            break;
        case "1password":
            add1Password()
            break;

    }
}
