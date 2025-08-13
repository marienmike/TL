// Groupes d'événements
const allGroups = [
    { id: 1, content: "Europe médiévale" },
    { id: 2, content: "Islam médiéval" }
];
const groups = new vis.DataSet(allGroups);

const data = [];

// Ajout automatique de la mise en forme (className) selon le groupe
data.forEach(ev => {
    if (ev.group === 1) ev.className = 'group-co';
    else if (ev.group === 2) ev.className = 'group-ma';
});
const items = new vis.DataSet(data);

// Options de configuration
const options = {
    min: '0001-01-01',
    max: '2020-12-31',
    zoomable: true,
    zoomKey: 'ctrlKey', // Nécessite CTRL pour zoomer (évite les conflits de scroll)
    zoomMin: 1000 * 60 * 60 * 24 * 30,       // Zoom minimum : 1 mois
    zoomMax: 1000 * 60 * 60 * 24 * 365 * 5000, // Zoom maximum : ~5000 ans
    orientation: 'bottom',
    editable: {
        add: false,         // add new items by double tapping
        updateTime: false,  // drag items horizontally
        updateGroup: true, // drag items from one group to another
        remove: true,       // delete an item by tapping the delete button top right
        overrideItems: false  // allow these options to override item.editable
    },
    stack: true,
    groupHeightMode: 'auto',
    format: {
        minorLabels: {
            day: 'D MMM YYYY'
        },
        majorLabels: {
            year: 'YYYY'
        }
    },
    // Afficher la date quand on survole un événement
    tooltip: {
        followMouse: true,
        template: function (item) {
            function formatDateDMY(dateStr) {
                if (!dateStr) return "";
                const d = new Date(dateStr);
                const day = String(d.getDate()).padStart(2, '0');
                const month = String(d.getMonth() + 1).padStart(2, '0');
                const year = d.getFullYear();
                return `${day}-${month}-${year}`;
            }
            function formatYear(dateStr) {
                if (!dateStr) return "";
                return new Date(dateStr).getFullYear();
            }
            let html = `<strong>${item.content}</strong><br>`;
            if (item.type === 'range' && item.start && item.end) {
                html += `${formatYear(item.start)} - ${formatYear(item.end)}`;
            } else if (item.start) {
                html += formatDateDMY(item.start);
            }
            return html;
        }
    }
};

// Conteneur de la frise
const container = document.getElementById('timeline');
const timeline = new vis.Timeline(container, items, groups, options);

// Bouton d'édition
document.getElementById('editBtn').onclick = function () {
    const sel = timeline.getSelection();
    if (!sel.length) {
        alert("Sélectionnez un événement à éditer.");
        return;
    }
    const id = sel[0];
    const item = items.get(id);
    const newText = prompt("Edit items text:", item.content);
    if (newText !== null) {
        items.update({ id: id, content: newText });
    }
};

// Bouton import : charge un fichier JSON et ajoute les événements à la frise
document.getElementById('importBtn').onclick = function () {
    // Crée un input type file caché
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.style.display = 'none';
    document.body.appendChild(input);

    input.onchange = function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
            try {
                const imported = JSON.parse(evt.target.result);
                if (!Array.isArray(imported)) {
                    alert("Le fichier doit contenir un tableau d'événements.");
                    return;
                }
                // Ajoute chaque événement à la frise
                imported.forEach(ev => {
                    // Vérifie l'id unique
                    if (!ev.id) {
                        // Génère un nouvel id si absent
                        const maxId = Math.max(...items.get().map(ev => ev.id), 0);
                        ev.id = maxId + 1;
                    }
                    // Ajoute la classe selon le groupe
                    if (ev.group === 1) ev.className = 'group-co';
                    else if (ev.group === 2) ev.className = 'group-ma';
                    items.add(ev);
                });
                timeline.fit();
            } catch (err) {
                alert("Erreur lors de la lecture du fichier : " + err.message);
            }
        };
        /*timeline.setItems(items);*/
        reader.readAsText(file);
        document.body.removeChild(input);
    };
    input.click();
};

// Bouton d'export
document.getElementById('exportBtn').onclick = function () {
    const data = items.get();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "events.json";
    a.click();
    URL.revokeObjectURL(url);
};

// Bouton ajuster
document.getElementById('fitBtn').onclick = function () {
    timeline.fit();
};

// Bouton focus : centre le zoom sur les éléments sélectionnés
/*document.getElementById('focusBtn').onclick = function () {
    const selection = timeline.getSelection();
    if (!selection.length) {
        alert("Sélectionnez au moins un événement à centrer.");
        return;
    }
    timeline.focus(selection, {animation: true, zoom: false});
};*/

// Gestion du double-clic pour ajouter un événement à une date choisie
timeline.on('doubleClick', function (props) {
    // Pré-remplissage de la date de début
    const defaultStart = ""
    //props.time ?`${String(props.time.getDate()).padStart(2, '0')}-${String(props.time.getMonth() + 1).padStart(2, '0')}-${props.time.getFullYear()}` : "";

    // Demande toutes les infos dans une seule pop-up
    const saisie = prompt(
        "Saisir : nom;date début JJ-MM-AAAA;date fin JJ-MM-AAAA (optionnelle)\nExemple : Guerre de Cent Ans;17-07-1453;19-10-1453",
        ""
    );
    if (!saisie) return;

    // Découpe la saisie
    const [content, startStr, endStr] = saisie.split(";").map(s => s.trim());
    if (!content || !startStr) {
        alert("Le nom et la date de début sont obligatoires !");
        return;
    }

    // Demande le groupe si on clique ailleurs que sur la frise
    let group = props.group;
    if (!group) {
        group = prompt("Numéro du groupe (1 = Europe médiévale, 2 = Islam médiéval) :", "1");
        if (!group) return;
        group = parseInt(group, 10);
    }

    // Conversion JJ-MM-AAAA -> AAAA-MM-JJ
    function toISO(dateStr) {
        if (!dateStr) return "";
        const [day, month, year] = dateStr.split("-");
        return `${year}-${month}-${day}`;
    }

    // Génère un nouvel id unique
    const maxId = Math.max(...items.get().map(ev => ev.id), 0);

    // Ajoute l'événement, type selon présence de endStr
    const event = {
        id: maxId + 1,
        content: content,
        start: toISO(startStr),
        group: group
    };
    if (endStr) {
        event.end = toISO(endStr);
        event.type = 'range';
    } else {
        event.type = 'point';
    }

    // Ajoute la classe pour le groupe
    event.className = group === 1 ? 'group-co' : (group === 2 ? 'group-ma' : '');
    items.add(event);
});

// Gestion des cases à cocher pour afficher/masquer les groupes
function updateGroups() {
    const showGroups = [];
    if (document.getElementById('group1').checked) showGroups.push(1);
    if (document.getElementById('group2').checked) showGroups.push(2);

    // Si aucune case cochée, on masque tout
    if (showGroups.length === 0) {
        timeline.setGroups([]);
        return;
    }

    // On filtre les objets groupes à afficher
    const filteredGroups = allGroups.filter(g => showGroups.includes(g.id));
    timeline.setGroups(filteredGroups);
}

document.getElementById('group1').addEventListener('change', updateGroups);
document.getElementById('group2').addEventListener('change', updateGroups);

updateGroups();