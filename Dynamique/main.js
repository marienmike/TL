
// Groupes d'événements
const allGroups = [
    { id: 1, content: "Europe médiévale" },
    { id: 2, content: "Islam médiéval" }
];
const groups = new vis.DataSet(allGroups);

// Evénements
const data =
    [{ "id": 1, "content": "“chute” de l’empire romain d’Occident", "start": "0476-01-01", "end": null, "type": "point", "group": 1 }, { "id": 2, "content": "Al-Aghlab émir d'Ifriqyia", "start": "0800-01-01", "end": null, "type": "point", "group": 2 }, { "id": 3, "content": "Alaric pille Rome", "start": "0410-01-01", "end": null, "type": "point", "group": 1 }, { "id": 4, "content": "appel à la croisade par Urbain II", "start": "1095-01-01", "end": null, "type": "point", "group": 1 }, { "id": 5, "content": "avènement d’Hugues Capet", "start": "0987-01-01", "end": null, "type": "point", "group": 1 }, { "id": 6, "content": "Badr al-Jamali en Egypte", "start": "1070-01-01", "end": null, "type": "point", "group": 2 }, { "id": 7, "content": "Bagdad capitale du califat abbasside", "start": "0752-01-01", "end": null, "type": "point", "group": 2 }, { "id": 8, "content": "baptême de Clovis", "start": "0508-01-01", "end": null, "type": "point", "group": 1 }, { "id": 9, "content": "Bataille d’Azincourt", "start": "1415-01-01", "end": null, "type": "point", "group": 1 }, { "id": 10, "content": "bataille d’Hastings", "start": "1066-01-01", "end": null, "type": "point", "group": 1 }, { "id": 11, "content": "Bataille de Bouvines", "start": "1214-01-01", "end": null, "type": "point", "group": 1 }, { "id": 12, "content": "Bataille de Crécy", "start": "1346-01-01", "end": null, "type": "point", "group": 1 }, { "id": 13, "content": "Bataille de la Karbala", "start": "0680-01-01", "end": null, "type": "point", "group": 2 }, { "id": 14, "content": "Bataille de Siffin", "start": "0657-01-01", "end": null, "type": "point", "group": 2 }, { "id": 15, "content": "Bataille de Tall Danith", "start": "1119-01-01", "end": null, "type": "point", "group": 2 }, { "id": 16, "content": "bataille des mâts", "start": "0655-01-01", "end": null, "type": "point", "group": 2 }, { "id": 17, "content": "Bataille du Talas", "start": "0751-01-01", "end": null, "type": "point", "group": 2 }, { "id": 18, "content": "bréviaire d’Alaric", "start": "0506-01-01", "end": null, "type": "point", "group": 1 }, { "id": 19, "content": "Califat abbasside", "start": "0750-01-01", "end": "1258-01-01", "type": "range", "group": 2 }, { "id": 20, "content": "califat almohade", "start": "1130-01-01", "end": "1226-01-01", "type": "range", "group": 2 }, { "id": 21, "content": "Califat fatimide", "start": "0910-01-01", "end": "1171-01-01", "type": "range", "group": 2 }, { "id": 22, "content": "Califat omeyyade", "start": "0661-01-01", "end": "0750-01-01", "type": "range", "group": 2 }, { "id": 23, "content": "Califat omeyyade de Cordoue", "start": "0926-01-01", "end": "1031-01-01", "type": "range", "group": 2 }, { "id": 24, "content": "capitulaire de Quierzy", "start": "0877-01-01", "end": null, "type": "point", "group": 1 }, { "id": 25, "content": "Charlemagne sacré empereur", "start": "0800-01-01", "end": null, "type": "point", "group": 1 }, { "id": 26, "content": "Charles le Simple octroie la Normandie à Rolon", "start": "0911-01-01", "end": null, "type": "point", "group": 1 }, { "id": 27, "content": "Charles Martel arrête le progrès des incursions musulmanes à Poitiers", "start": "0732-01-01", "end": null, "type": "point", "group": 2 }, { "id": 28, "content": "Charles Martel repousse les Musulmans à Poitiers", "start": "0732-01-01", "end": null, "type": "point", "group": 1 }, { "id": 29, "content": "Chute de Saint-Jean d’Acre", "start": "1284-01-01", "end": null, "type": "point", "group": 1 }, { "id": 30, "content": "Concile de Latran IV", "start": "1215-01-01", "end": null, "type": "point", "group": 1 }, { "id": 31, "content": "concile de Nicée", "start": "0325-01-01", "end": null, "type": "point", "group": 1 }, { "id": 32, "content": "Concordat de Worms", "start": "1122-01-01", "end": null, "type": "point", "group": 1 }, { "id": 33, "content": "concordat de Worms", "start": "1122-01-01", "end": null, "type": "point", "group": 1 }, { "id": 34, "content": "Conquête de la Mésopotamie ", "start": "0637-01-01", "end": null, "type": "point", "group": 2 }, { "id": 35, "content": "Constitutions de Melfi ", "start": "1231-01-01", "end": null, "type": "point", "group": 1 }, { "id": 36, "content": "Deuxième croisade", "start": "1146-01-01", "end": null, "type": "point", "group": 1 }, { "id": 37, "content": "Deuxième croisade", "start": "1146-01-01", "end": "1149-01-01", "type": "range", "group": 2 }, { "id": 38, "content": "Dictatus Papae", "start": "1075-01-01", "end": null, "type": "point", "group": 1 }, { "id": 39, "content": "Dictatus Papae", "start": "1075-01-01", "end": null, "type": "point", "group": 1 }, { "id": 40, "content": "Edit de Milan", "start": "0313-01-01", "end": null, "type": "point", "group": 1 }, { "id": 41, "content": "Emirat almoravide", "start": "1048-01-01", "end": "1147-01-01", "type": "range", "group": 2 }, { "id": 42, "content": "Emirs de émirs chez les Abbassides", "start": "0936-01-01", "end": null, "type": "point", "group": 2 }, { "id": 43, "content": "fin du califat fatimide", "start": "1171-01-01", "end": null, "type": "point", "group": 2 }, { "id": 44, "content": "fin du règne de Charles le Gros", "start": "0888-01-01", "end": null, "type": "point", "group": 1 }, { "id": 45, "content": "Fitna dans Al-Andalous", "start": "1009-01-01", "end": null, "type": "point", "group": 2 }, { "id": 46, "content": "Grande Jacquerie", "start": "1358-01-01", "end": null, "type": "point", "group": 1 }, { "id": 47, "content": "Grandes famines", "start": "1315-01-01", "end": "1318-01-01", "type": "range", "group": 1 }, { "id": 48, "content": "Guerre de Cent Ans", "start": "1337-01-01", "end": "1453-01-01", "type": "range", "group": 1 }, { "id": 49, "content": "Hattin", "start": "1187-01-01", "end": null, "type": "point", "group": 2 }, { "id": 50, "content": "Hégire", "start": "0622-01-01", "end": null, "type": "point", "group": 2 }, { "id": 51, "content": "l’émirat omeyyade d’Espagne est proclamé par Abd al-Raman Ier", "start": "0756-01-01", "end": null, "type": "point", "group": 2 }, { "id": 52, "content": "l’ensemble de la péninsule ibérique est conquise, sauf le royaume des Asturies", "start": "0720-01-01", "end": null, "type": "point", "group": 2 }, { "id": 53, "content": "L’exarchat de Carthage chute face aux musulmans", "start": "0698-01-01", "end": null, "type": "point", "group": 2 }, { "id": 54, "content": "la principauté samanide du califat abbasside s’effondre, avènement des Ghaznévides", "start": "0999-01-01", "end": null, "type": "point", "group": 2 }, { "id": 55, "content": "Las Navas de Tolosa", "start": "1212-01-01", "end": null, "type": "point", "group": 2 }, { "id": 56, "content": "Domination Bouyide", "start": "0950-01-01", "end": "1050-01-01", "type": "range", "group": 2 }, { "id": 57, "content": "les émirs des taifas alliés aux Almoravides stoppent la Reconquista", "start": "1086-01-01", "end": null, "type": "point", "group": 2 }, { "id": 58, "content": "Les Fatimides conquièrent l'Egypte", "start": "0969-01-01", "end": null, "type": "point", "group": 2 }, { "id": 59, "content": " les musulmans achèvent la conquête de l’empire sassanide, mais le territoire restera perclus de révoltes sous les Omeyyades", "start": "0651-01-01", "end": null, "type": "point", "group": 2 }, { "id": 60, "content": "Les musulmans reprennent Jérusalem", "start": "1187-01-01", "end": null, "type": "point", "group": 1 }, { "id": 61, "content": "Les Qarmates pillent la Mecque", "start": "0930-01-01", "end": null, "type": "point", "group": 2 }, { "id": 62, "content": "les Seldjoukides s’emparent de Bagdad", "start": "1055-01-01", "end": null, "type": "point", "group": 2 }, { "id": 63, "content": "Manzikert", "start": "1071-01-01", "end": null, "type": "point", "group": 2 }, { "id": 64, "content": "mort de Childéric 1er", "start": "0481-01-01", "end": null, "type": "point", "group": 1 }, { "id": 65, "content": "Mort de Frédéric II", "start": "1250-01-01", "end": null, "type": "point", "group": 1 }, { "id": 66, "content": "Mort de Malikshah, dernier grand sultan seldjoukide", "start": "1092-01-01", "end": null, "type": "point", "group": 2 }, { "id": 67, "content": "mort de Muhammad", "start": "0632-08-06", "end": null, "type": "point", "group": 2 }, { "id": 68, "content": "mort du calife omeyyade Hakam II", "start": "0976-01-01", "end": null, "type": "point", "group": 2 }, { "id": 69, "content": "Muhammad vainc les Qurayshites mecquois, premier hajj", "start": "0630-01-01", "end": null, "type": "point", "group": 2 }, { "id": 70, "content": "Otton Ier restaure l’Empire en Germanie", "start": "0962-01-01", "end": null, "type": "point", "group": 1 }, { "id": 71, "content": "partage du royaume mérovingien", "start": "0561-01-01", "end": null, "type": "point", "group": 1 }, { "id": 72, "content": "Pépin le Bref roi des Francs", "start": "0751-01-01", "end": null, "type": "point", "group": 1 }, { "id": 73, "content": "Peste Noire", "start": "1347-01-01", "end": "1349-01-01", "type": "range", "group": 1 }, { "id": 74, "content": "Prise d’Acre et de Tyr par les mamelouks.", "start": "1291-01-01", "end": null, "type": "point", "group": 2 }, { "id": 75, "content": "Prise d'Edesse", "start": "1144-01-01", "end": null, "type": "point", "group": 2 }, { "id": 76, "content": "prise de Bagdad par les Mongols", "start": "1258-01-01", "end": null, "type": "point", "group": 2 }, { "id": 77, "content": "Prise de Bordeaux", "start": "1453-01-01", "end": null, "type": "point", "group": 1 }, { "id": 78, "content": "Prise de Jérusalem par les chrétiens", "start": "1099-01-01", "end": null, "type": "point", "group": 1 }, { "id": 79, "content": "prise de Jérusalem par les croisés aux Fatimides", "start": "1099-01-01", "end": null, "type": "point", "group": 2 }, { "id": 80, "content": "prise de Tolède par les chrétiens", "start": "1085-01-01", "end": null, "type": "point", "group": 2 }, { "id": 81, "content": "Prise de Tolède par les Omeyyades", "start": "0712-01-01", "end": null, "type": "point", "group": 2 }, { "id": 82, "content": "Querelle des Investitures", "start": "1075-01-01", "end": "1099-01-01", "type": "range", "group": 1 }, { "id": 83, "content": "querelle des investitures", "start": "1075-01-01", "end": "1099-01-01", "type": "range", "group": 1 }, { "id": 84, "content": "Révolte de Zanj", "start": "0868-01-01", "end": "0883-01-01", "type": "range", "group": 2 }, { "id": 85, "content": "Révolte des Ciompi", "start": "1378-01-01", "end": null, "type": "point", "group": 1 }, { "id": 86, "content": "Révoltes abbassides au Khorasan", "start": "0747-01-01", "end": null, "type": "point", "group": 2 }, { "id": 87, "content": "Sac de Constantinople", "start": "1204-01-01", "end": null, "type": "point", "group": 1 }, { "id": 88, "content": "schisme entre Églises romaine et byzantine", "start": "1054-01-01", "end": null, "type": "point", "group": 1 }, { "id": 89, "content": "Signature de la Magna Carta", "start": "1215-01-01", "end": null, "type": "point", "group": 1 }, { "id": 90, "content": "Théodose fait du christianisme une religion d’état", "start": "0380-01-01", "end": null, "type": "point", "group": 1 }, { "id": 91, "content": "Traité de Brétigny", "start": "1360-01-01", "end": null, "type": "point", "group": 1 }, { "id": 92, "content": "Traité de Jaffa", "start": "1229-01-01", "end": null, "type": "point", "group": 2 }, { "id": 93, "content": "Traité de Troyes", "start": "1420-01-01", "end": null, "type": "point", "group": 1 }, { "id": 94, "content": "traité de Verdun", "start": "0843-01-01", "end": null, "type": "point", "group": 1 }, { "id": 95, "content": "Urbain II appelle à la croisade", "start": "1095-01-01", "end": null, "type": "point", "group": 2 }, { "id": 96, "content": "Urbain II appelle à la première croisade", "start": "1095-01-01", "end": null, "type": "point", "group": 1 }, { "id": 97, "content": "Wisigoths et Ostrogoths arrivent dans l’empire romain", "start": "0365-01-01", "end": null, "type": "point", "group": 1 }, { "id": 98, "content": "Zirides et Hammadides rompent avec les Fatimides", "start": "1050-01-01", "end": null, "type": "point", "group": 2 }]
    ;

// Ajout automatique de la mise en forme (className) selon le groupe
data.forEach(ev => {
    if (ev.group === 1) ev.className = 'group-europe';
    else if (ev.group === 2) ev.className = 'group-islam';
});
const items = new vis.DataSet(data);

// Options de configuration
const options = {
    min: '400-01-01',
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
document.getElementById('focusBtn').onclick = function () {
    const selection = timeline.getSelection();
    if (!selection.length) {
        alert("Sélectionnez au moins un événement à centrer.");
        return;
    }
    timeline.focus(selection, {animation: true, zoom: false});
};

// Gestion du double-clic pour ajouter un événement à une date choisie
timeline.on('doubleClick', function (props) {
    // Pré-remplissage de la date de début
    const defaultStart = props.time ?
        `${String(props.time.getDate()).padStart(2, '0')}-${String(props.time.getMonth() + 1).padStart(2, '0')}-${props.time.getFullYear()}` : "";

    // Demande toutes les infos dans une seule pop-up
    const saisie = prompt(
        "Saisir : nom;date début JJ-MM-AAAA;date fin JJ-MM-AAAA (optionnelle)\nExemple : Guerre de Cent Ans;17-07-1453;19-10-1453",
        `;${defaultStart};`
    );
    if (!saisie) return;

    // Découpe la saisie
    const [content, startStr, endStr] = saisie.split(";").map(s => s.trim());
    if (!content || !startStr) {
        alert("Le nom et la date de début sont obligatoires !");
        return;
    }

    // Demande le groupe (optionnel)
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
    event.className = group === 1 ? 'group-europe' : (group === 2 ? 'group-islam' : '');
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