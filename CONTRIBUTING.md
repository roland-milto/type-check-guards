# Contributing

This repository uses GitHub pull requests for code review.

## English instructions

* Larger helper functions should be stored in `src/utils`.
* Add new type guards to the `src/guards` folder.
* Add the signature to the `src/types/typeGuards.ts` interface.
* The type guard must also be registered in the file `src/types/global.d.ts`.
* Then add the new type guard as an export in alphabetical order to the file `src/index.ts`.
  Note that there are two exports for the functions there (one alone, one bound to an object).
* Extend the file `src/types/nonPrimitive.ts`. All primitive types from JavaScript are already registered in
  `src/types/primitive.ts`.
* Run `npm run build` to test and validate the changes.

## Deutsche Anleitung

* Größere Helferfunktionen sollten in `src/utils` abgelegt werden.
* Füge neue Type Guards in den Ordner `src/guards` hinzu.
* Füge die Signatur in dem Interface `src/types/typeGuards.ts` hinzu.
* Der Type Guard muss auch in der Datei `src/types/global.d.ts` registriert werden.
* Füge anschließend den neuen Type Guard als Export in alphabetischer Reihenfolge in die Datei `src/index.ts` ein.
  Beachte, dass dort zwei Exporte für die Funktionen vorhanden sind (Einmal alleine, einmal an ein Objekt gebunden).
* Erweitere die Datei `src/types/nonPrimitive.ts`. Alle primitiven Typen aus JavaScript sind bereits in
  `src/types/primitive.ts` registriert.
* Führe `npm run build` aus, um die Änderungen zu testen und zu validieren.