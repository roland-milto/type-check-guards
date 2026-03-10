# areNumbers

## Bschrybig

`areNumbers` prüeft, öb e Wert e nid-läeri Array isch, wo alli Element Zahle sind.

### Aawändig

Validier vom Benutzer- oder API-gelieferte Date, zum sicher z’stelle, dass es e nid-läeri Array vo Zahle isch, bevor
Totale, Durchschnitt oder anderi numerischi Aggregatione berechnet wärde.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areNumbers`, zum unbekannti Arrays z’validiere, bevor du numerischi Berechnige machsch; es git `false` zrugg
> für läeri Arrays und für Arrays, wo irgend es Nid-Zahl-Wert enthalte.

### Vorteil

- Git `true` zrugg nume, wänn d’Yygab e nid-läeri Array isch und jedes Element e Zahl isch.
- Verhindert falsch-positivi Resultat, indem läeri Arrays und Nid-Array-Yygabe abglehnt wärde.
- Nützlich als Guard vor numerische Operatione (z.B. Summiere, Durchschnitt berechne), zum Runtime-Fehler z’vermeide.

## Verwendig

### Syntax

Funktion:

- `areNumbers(array)`

Parameter:

- `array`: D’Array, wo soll druf überprüeft werde, ob si Zahl-Element het.

### Lokale Funktions-Import

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areNumbers(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:04:19 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>