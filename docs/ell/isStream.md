# isStream

## Περιγραφή

Το `isStream` ελέγχει αν μια δεδομένη τιμή είναι αντικείμενο stream (τύπου Node.js stream-like, `ReadableStream` ή
`WritableStream`).

### Περίπτωση χρήσης

Επικύρωσε εισόδους που μπορεί να είναι είτε απλά αντικείμενα είτε streams (π.χ. μεταφορτώσεις αρχείων, HTTP bodies ή
processing pipelines) και διακλάδωσε τη λογική ανάλογα με το αν η τιμή είναι stream.

> **Σημείωση για χρήστες TypeScript:**
>
> Χρησιμοποίησε το `isStream` για να περιορίσεις ένα `unknown` πριν καλέσεις μεθόδους stream· αναγνωρίζει αντικείμενα
> τύπου Node.js stream-like (μέσω `pipe`/`on`) και Web Streams (`ReadableStream`/`WritableStream`) όταν υπάρχουν αυτά τα
> globals.

### Πλεονεκτήματα

- Ανιχνεύει με ασφάλεια συνηθισμένα αντικείμενα τύπου stream του Node.js ελέγχοντας για τις συναρτήσεις `pipe` και `on`.
- Υποστηρίζει επίσης Web Streams αναγνωρίζοντας τα `ReadableStream` και `WritableStream` όταν είναι διαθέσιμα.
- Επιστρέφει ένα απλό boolean αποτέλεσμα (`true`/`false`) κατάλληλο για guards και λογική διακλάδωσης.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `isStream(value)`

Παράμετροι:

- `value`: Η τιμή που θα ελεγχθεί.

### Τοπική εισαγωγή συνάρτησης

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // Το nodeStream είναι τύπου stream· μπορείτε με ασφάλεια να χρησιμοποιήσετε κοινά API ροών
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.isStream(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [isStream](../_analysis/isStream.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 30 January 2026 at 23:39:29 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>