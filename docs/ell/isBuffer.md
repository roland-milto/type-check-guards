# isBuffer

## Περιγραφή

Ελέγχει αν μια τιμή είναι Node.js `Buffer` και επιστρέφει `true` ή `false`.

### Περίπτωση χρήσης

Επικύρωσε εισόδους κατά την εκτέλεση (π.χ. payloads API, δεδομένα αρχείων ή message buffers) ώστε να διασφαλίσεις ότι
μια τιμή είναι `Buffer` πριν την επεξεργασία, και να λαμβάνεις αξιόπιστα `false` όταν εκτελείται εκτός Node.js όπου το
`Buffer` μπορεί να μην υπάρχει.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isBuffer` για να στενώσεις τιμές `unknown` σε `Buffer` πριν καλέσεις μεθόδους ειδικές για Buffer.

### Πλεονεκτήματα

- Ανιχνεύει με ασφάλεια στιγμιότυπα Node.js `Buffer` χρησιμοποιώντας το `Buffer.isBuffer`.
- Επιστρέφει `false` σε περιβάλλοντα όπου το `Buffer` δεν είναι διαθέσιμο, αποφεύγοντας σφάλματα κατά την εκτέλεση.
- Λειτουργεί με είσοδο `unknown`, καθιστώντας το κατάλληλο για επικύρωση κατά την εκτέλεση και στένωση τύπων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isBuffer(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // ἀληθές
console.log(isBuffer(b)); // ψευδές

if (isBuffer(a)) {
  // ὁ a ἐνταῦθα ἐστὶ Buffer
  console.log(a.toString("utf8"));
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isBuffer(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 31 January 2026 at 16:31:23 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>