# Contributing

This repository uses GitHub pull requests for code review.

## English instructions

* Larger helper functions should be stored in `src/utils`.
* Add new type guards to the `src/guards` folder.
* Add the return type in lowercase letters to the file `src/types/nonPrimitive.ts` or `src/types/primitive.ts`.
  If it is a numeric type, add it to the file `src/types/numericType.ts`.
* Add the signature of the type guard to the interface `src/types/typeGuards.ts`.
* Then add the type guard as an export and import in alphabetical order to the file `src/index.ts`.
* Register the type guard in the file `src/register-global.ts` in the `declare global` block.
  Make sure that the alphabetical and thematic order is correct.
* Add the new function to the comments in the file `src/as-global.ts`.
  Two comments are necessary here: one for the single check and one for the array check.
* Create a file `TYPEGUARD_NAME.md` in the `docs` folder under `english` and a file `TYPEGUARD_NAME.de.md` under
  `deutsch`.
  Follow the scheme of the other Markdown files.
* Add the type guard in `readme.md` and `readme.de.md` under **Functions / Methods** and reference it to the Markdown
  file of the respective language created in the `docs` folder.
* Run `npm run build` to test and validate the changes.

## Deutsche Anleitung

* Größere Helferfunktionen sollten in `src/utils` abgelegt werden.
* Füge neue Type Guards in den Ordner `src/guards` hinzu.
* Füge den Rückgabetyp in Kleinbuchstaben in die Datei `src/types/nonPrimitive.ts` oder `src/types/primitive.ts`.
  Falls es sich um einen nummerischen Typ handelt, füge diesen in die Datei `src/types/numericType.ts` hinzu.
* Füge die Signatur des Type Guards in dem Interface `src/types/typeGuards.ts` hinzu.
* Füge anschließend den Type Guard als Export und Import in alphabetischer Reihenfolge in die Datei `src/index.ts` ein.
* Registriere den Type Guard in der Datei `src/register-global.ts` im `declare global`-block.
  Achte dabei auf die korrekte alphabetische, und thematische Reihenfolge.
* Füge in der Datei `src/as-global.ts` in den Kommentaren die neue Funktion hinzu.
  Hier sind zwei Kommentare notwendig: einmal für die Einzelprüfung und einmal für die Array-Prüfung.
* Erstelle im Ordner `docs` unter `english` eine Datei `TYPEGUARD_NAME.md` und unter `deutsch` eine Datei
  `TYPEGUARD_NAME.de.md` hinzu.
  Halte dich an das Schema der anderen Markdown-Dateien.
* Füge den Type Guard in der `readme.md` und in der `readme.de.md` unter dem Punkt **Funktionen / Methoden** hinzu und
  referenzier diesen auf die im Ordner `docs` erstellte Markdown-Datei der jeweiligen Sprache.
* Führe `npm run build` aus, um die Änderungen zu testen und zu validieren.