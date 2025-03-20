export function translations(key, lang) {
    let response;
    switch (key) {
        case "projektbeschreibung":
            switch (lang) {
                case "en":
                    response = "Project description";
                    break;
                case "de":
                    response = "Projektbeschreibung";
                    break;
            }
            break;
        case "menge":
            switch (lang) {
                case "en":
                    response = "pieces";
                    break;
                case "de":
                    response = "Stück";
                    break;
            }
            break;
    }
    return response;
}