# isNullOrUndefined

## Bschrybig

Prüeft, öb e gegebene Wert `null` oder `undefined` isch.

### Aawändig

Bruuch `isNullOrUndefined`, wänn du sowohl `null` als au `undefined` als „kei Wert“ wotsch behandle, z. B. bi dr
Validierig vo optionale Iigabe, bim Normalisiere vo API-Payloads oder zum Code-Pfäd z schütze, bevor du e potenziell
fehlende Wert dereferenzierisch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isNullOrUndefined`, zum di vor fehlende Wärte z schütze, bevor du uf Eigeschafte zuegrifftsch oder Methode
> ufruefsch; es git nume bi `null` und `undefined` `true` zrugg.

### Vorteil

- Stellt e klarä, wiederverwendbari Prüefig zur Verfüegig, zum `null` und `undefined` a eim Ort erkenne.
- Git e eifachs Boolean (`true`/`false`) zrugg, wo sich guet i Bedingige und Validierige zämesetze laht.
- Hilft, tüüfischi Runtime-Fehler z vermiide, indem fehlendi Wärte prüeft werde, bevor me uf Eigeschafte zuegrifft oder
  Methode ufrueft.

## Verwendig

### Syntax

Funktion:

- `isNullOrUndefined(value)`

Parameter:

- `value`: De Wert, wo uf `null` oder `undefined` söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // fehlende Wert behandle
}

console.log(isNullOrUndefined(b)); // wahr
console.log(isNullOrUndefined(c)); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isNullOrUndefined(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 00:33:46 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>