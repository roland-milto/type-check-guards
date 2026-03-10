# areRegExes

## Περιγραφή

Το `areRegExes` ελέγχει αν μια τιμή είναι ένας γεμάτος πίνακας που περιέχει μόνο αντικείμενα `RegExp`.

### Περίπτωση χρήσης

Επικύρωσε ότι μια επιλογή ρύθμισης (π.χ. μια λίστα μοτίβων allow/deny) είναι ένας μη κενός πίνακας κανονικών εκφράσεων
πριν τη χρησιμοποιήσεις για αντιστοίχιση.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `areRegExes` για να περιορίσεις το `unknown` σε `RegExp[]` πριν από την επανάληψη ή τη σύνθεση
> μοτίβων.

### Πλεονεκτήματα

- Εξασφαλίζει ότι μια τιμή είναι μη κενός πίνακας όπου κάθε στοιχείο είναι μια παρουσία `RegExp`.
- Παρέχει έναν απλό λογικό έλεγχο (`true`/`false`) για την επικύρωση εισόδου χρήστη ή ρυθμίσεων.
- Βοηθά στην αποτροπή σφαλμάτων χρόνου εκτέλεσης όταν ο μεταγενέστερος κώδικας υποθέτει ότι όλα τα στοιχεία υποστηρίζουν
  λειτουργίες κανονικών εκφράσεων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areRegExes(array)`

Παράμετροι:

- `array`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // ἐνταῦθα τὰ patterns ἐστὶν πίναξ RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areRegExes(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:17:41 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>