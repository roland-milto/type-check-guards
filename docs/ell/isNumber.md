# isNumber

## Περιγραφή

Το `isNumber` ελέγχει αν μια τιμή είναι πεπερασμένος αριθμός που δεν είναι `NaN`.

### Περίπτωση χρήσης

Επικύρωση αριθμητικής εισόδου από μη αξιόπιστες πηγές (φόρμες, παραμέτρους query, JSON payloads) πριν από υπολογισμούς,
αποθήκευση ή ελέγχους εύρους, διασφαλίζοντας ότι περνούν (`true`) μόνο πεπερασμένοι αριθμοί και ότι όλα τα άλλα
επιστρέφουν `false`.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isNumber` για να επικυρώνεις τιμές `unknown` πριν κάνεις αριθμητικές πράξεις· απορρίπτει `NaN`,
`Infinity` και `-Infinity`.

### Πλεονεκτήματα

- Επιστρέφει `true` μόνο για πραγματικούς αριθμούς JavaScript (έλεγχος τύπου συν απόρριψη `NaN` και απείρου).
- Αποτρέπει συνηθισμένα σφάλματα επικύρωσης όπου `NaN`, `Infinity` ή `-Infinity` περνούν κατά λάθος ως αριθμοί.
- Λειτουργεί καλά ως έλεγχος χρόνου εκτέλεσης (runtime guard) για άγνωστη είσοδο (π.χ. JSON, είσοδος χρήστη, εξωτερικά
  API).
- Απλό, γρήγορο και χωρίς παρενέργειες.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isNumber(value)`

Παράμετροι:

- `value`: Η τιμή προς έλεγχο.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // ἡ εἴσοδος ἐστὶν ἔγκυρος πεπερασμένος ἀριθμός
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isNumber(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 13:08:44 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>