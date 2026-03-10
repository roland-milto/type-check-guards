# areStreams

## Περιγραφή

Το `areStreams` καθορίζει αν μια τιμή είναι ένας μη κενός πίνακας στον οποίο κάθε στοιχείο είναι `Stream`.

### Περίπτωση χρήσης

Επικυρώστε συλλογές που παρέχονται από χρήστες ή δημιουργούνται δυναμικά (π.χ. πολλαπλές ροές ανάγνωσης αρχείων) πριν
από piping, resume ή άλλες ομαδικές λειτουργίες πάνω τους.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποιήστε το `areStreams` για να επικυρώσετε άγνωστη είσοδο πριν τη χειριστείτε ως `Stream[]`· επιστρέφει `true`
> μόνο όταν η τιμή είναι ένας μη κενός πίνακας και κάθε στοιχείο είναι `Stream`.

### Πλεονεκτήματα

- Εξασφαλίζει ότι μια είσοδος είναι ένας μη κενός πίνακας όπου κάθε στοιχείο είναι `Stream`.
- Παρέχει έναν απλό έλεγχο `true`/`false` για την επικύρωση συλλογών ροών πριν από την επεξεργασία.
- Αποτυγχάνει άμεσα: επιστρέφει `false` μόλις βρεθεί ένα στοιχείο που δεν είναι `Stream`.
- Βοηθά στην αποτροπή σφαλμάτων χρόνου εκτέλεσης όταν ο κώδικας υποθέτει ότι όλα τα στοιχεία είναι στιγμιότυπα `Stream`.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `areStreams(array)`

Παράμετροι:

- `array`: Ο πίνακας που θα ελεγχθεί για αντικείμενα Stream.

### Τοπική εισαγωγή συνάρτησης

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // τὸ εἰσφερόμενον ἐστὶ πλήρης πίναξ ἀντικειμένων Ῥεύματος
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.areStreams(array)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:33:31 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>