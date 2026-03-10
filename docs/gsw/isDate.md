# isDate

## Bschrybig

`isDate` bestimmt, öb en übergäbne Wert e `Date` isch, und git `true` zrugg für `Date`-Instanze und susch `false`.

### Aawändig

Validierä und iischränke vo unbekannte Wärt (z. B. Request-Datä, Config-Wärt oder parsti JSON), bevor mer `Date`
-Operatione macht wie Formatierig, Vergliich oder s Ufrüefe vo `toISOString()`.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isDate`, zum `unknown` zur Laufzyt uf `Date` iizschränke; es git nume denn `true` zrugg, wänn’s würkli `Date`
> -Instanze sind (nöd Datum-Strings).

### Vorteil

- Stellt e eifachi Runtime-Guard zur Verfüegig, zum prüefe, öb e Wert e `Date` isch.
- Hilft Type-Fähler z verhüete, indem nume `Date`-Instanze d Validierig bestönd.
- Nützlich zum Validierä vo unbekannte Inputs (z. B. API-Payloads), bevor mer datumsspezifischi Methode bruucht.

## Verwendig

### Syntax

Funktion:

- `isDate(value)`

Parameter:

- `value`: De Wert, wo uf de `Date`-Typ söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input isch do es Datum
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isDate(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isDate](../_analysis/isDate.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:37:26 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>