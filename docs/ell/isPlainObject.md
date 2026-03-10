# isPlainObject

## Περιγραφή

Ελέγχει αν μια δεδομένη `value` είναι απλό αντικείμενο και επιστρέφει `true` αν είναι, αλλιώς `false`.

### Περίπτωση χρήσης

Επικύρωση ότι μια είσοδος `unknown` (π.χ. JSON που έχει αναλυθεί, εξωτερικά δεδομένα ή ορίσματα συνάρτησης) είναι απλό
αντικείμενο πριν από την ανάγνωση κλειδιών ή τη χαρτογράφησή της σε ένα τυποποιημένο αντικείμενο ρυθμίσεων.

> **Σημείωση για χρήστες TypeScript:**
>
> Το `isPlainObject` είναι χρήσιμο για τον περιορισμό του `unknown` πριν αντιμετωπιστεί ως αντικείμενο τύπου record·
> επιστρέφει `true` μόνο για τιμές των οποίων το εσωτερικό tag είναι `[object Object]`.

### Πλεονεκτήματα

- Παρέχει έναν απλό, αξιόπιστο έλεγχο για το αν μια τιμή είναι απλό αντικείμενο (δηλ., `Object` / `{}`), επιστρέφοντας
  `true` ή `false`.
- Βοηθά να διακρίνονται τα απλά αντικείμενα από πίνακες, συναρτήσεις, `null` και άλλους τύπους που δεν είναι απλά
  αντικείμενα.
- Χρήσιμο ως type guard στο TypeScript για να περιορίζει τιμές `unknown` πριν από την πρόσβαση σε ιδιότητες
  αντικειμένου.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isPlainObject(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί ως προς το αν είναι απλό αντικείμενο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // το input εἶναι ἐνταῦθα ἁπλοῦν ἀντικείμενον
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // ἀληθές
console.log(isPlainObject([])); // ψεῦδος
console.log(isPlainObject(null)); // ψεῦδος
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isPlainObject(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 6 February 2026 at 12:17:14 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>