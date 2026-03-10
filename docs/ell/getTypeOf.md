# getTypeOf

## Περιγραφή

Το `getTypeOf` επιστρέφει μια λεπτομερή, ευανάγνωστη ετικέτα τύπου για μια δεδομένη τιμή, συμπεριλαμβανομένων
εκλεπτυσμένων αριθμητικών τύπων και συγκεκριμένων ειδών αντικειμένων.

### Περίπτωση χρήσης

Χρησιμοποιήστε το `getTypeOf` για να ομαλοποιήσετε την ανίχνευση τύπων στην επικύρωση εισόδου και στα διαγνωστικά—για
παράδειγμα, για να απορρίψετε `nan`, να αποδεχτείτε μόνο `integer` IDs, να χειριστείτε αριθμητικές συμβολοσειρές όπως
`decimal` διαφορετικά από ένα απλό `string`, ή να καταγράψετε ακριβή είδη αντικειμένων όπως `date` και `regexp`.

> **Σημείωση για χρήστες TypeScript:**
>
> Ο τύπος επιστροφής είναι `DataTypeAsString | string`. Αντιμετωπίστε τον ως περιγραφική ετικέτα· συγκρίνετε με γνωστά
> literals όπως `integer`, `float`, `nan`, `array`, `null` και `undefined` όταν κάνετε διακλαδώσεις.

### Πλεονεκτήματα

- Επιστρέφει μια πιο λεπτομερή συμβολοσειρά τύπου από το `typeof` της JavaScript, συμπεριλαμβανομένων αριθμητικών
  υποτύπων όπως `integer`, `float` και `nan`.
- Διακρίνει ρητά τα `null` και `undefined` ως `null` και `undefined`.
- Ανιχνεύει συνηθισμένες μορφές αριθμητικών συμβολοσειρών και τις αναφέρει ως `binary`, `octal`, `decimal` ή
  `hexadecimal` αντί για απλό `string`.
- Αναγνωρίζει τους πίνακες ως `array` και χρησιμοποιεί το `Object.prototype.toString` για να παρέχει συγκεκριμένα
  ονόματα τύπων αντικειμένων (π.χ. `date`, `regexp`, `map`, `set`).
- Χρήσιμο για επικύρωση, καταγραφή και αποσφαλμάτωση όπου απαιτούνται συνεπείς, ευανάγνωστες ετικέτες τύπων.

## Χρήση

### Σύνταξη

Συνάρτηση:

- `getTypeOf(value)`

Παράμετροι:

- `value`: Η τιμή για την οποία θα προσδιοριστεί ο τύπος δεδομένων.

### Τοπική εισαγωγή συνάρτησης

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Παράδειγμα ελέγχων
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Καθολική εισαγωγή αντικειμένου

Για εισαγωγή των συναρτήσεων ως καθολικών μεθόδων αντικειμένου χρησιμοποιήστε:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Η ακόλουθη μέθοδος θα είναι διαθέσιμη καθολικά:

- `Type.getTypeOf(value)`

## Ανάλυση συναρτήσεων

Εδώ τεκμηριώνεται μια πινακοποιημένη ανάλυση της εξόδου που προκύπτει όταν δίνονται διαφορετικές παράμετροι στις
συναρτήσεις: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Το αρχείο δημιουργήθηκε στις 6 February 2026 at 13:06:06 (UTC) με τη χρήση του *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** από τον/την *
*[Roland Milto](https://roland-milto.de/)**.</small>