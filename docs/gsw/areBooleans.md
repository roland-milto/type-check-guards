# areBooleans

## Bschrybig

`areBooleans` prüeft, öb es gägebs nöd-läers Array nume Boolean-Wärt enthaltet, und git `true` zrugg, wänn das so isch,
und susch `false`.

### Aawändig

Validier vom User aagäbni oder externi Date (z.B. JSON-Payloads, Query-Params, Config-Arrays), zum sicherzstelle, dass e
nöd-läeri Lischt nume Booleans enthaltet, bevor du Boolean-Logik aawändisch oder s a APIs witergisch, wo `boolean[]`
erwarte.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areBooleans`, zum `unknown[]` z validiere, bevor du’s als `boolean[]` behandlisch; es git bi läere Arrays
`false` zrugg, drum muesch dä Fall explizit behandle, wänn e läeri Lischt söll erlaubt sii.

### Vorteil

- Git `true` nume zrugg, wänn jedes Element es Boolean isch und d’Yygab es nöd-läers Array isch.
- Verhindert falsch-positivi Resultat, indem läeri Arrays abglehnt wärde (git `false`).
- Funktioniert guet als Runtime-Guard vor Boolean-nur-Operatione (z.B. `every`, `some`, logischi Reduktione).

## Verwendig

### Syntax

Funktion:

- `areBooleans(array)`

Parameter:

- `array`: S Array, wo uf Boolean-Element söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areBooleans(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:40:19 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>