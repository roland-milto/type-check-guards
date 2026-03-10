# isPrimitive

## वर्णन

`isPrimitive` दिलेले मूल्य primitive आहे की नाही हे ठरवते (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### वापर प्रकरण

runtime मध्ये इनपुट्सची पडताळणी करा (उदा., API payload fields, configuration values, किंवा user-provided data) जेणेकरून
serializing, logging, किंवा primitive-only ऑपरेशन्स लागू करण्यापूर्वी मूल्य primitive आहे याची खात्री होईल.

> **TypeScript वापरकर्त्यांसाठी सूचना:**
>
> `unknown` इनपुट्सना objects किंवा functions म्हणून हाताळण्यापूर्वी guard करण्यासाठी `isPrimitive` वापरा; primitives
> साठी ते `true` आणि objects व functions साठी `false` परत करते.

### फायदे

- एखादे मूल्य JavaScript primitive आहे की नाही याची जलद, allocation-free तपासणी.
- `null` ला primitive म्हणून योग्यरीत्या हाताळते (जरी `typeof null` हे `"object"` असले तरी).
- object-only ऑपरेशन्स करण्यापूर्वी `unknown` मूल्ये narrow करण्यास मदत करते.

## वापर

### सिंटॅक्स

फंक्शन:

- `isPrimitive(value)`

पॅरामीटर्स:

- `value`: primitive प्रकारासाठी तपासायचे मूल्य.

### लोकल फंक्शन इम्पोर्ट

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ग्लोबल ऑब्जेक्ट इम्पोर्ट

फंक्शन्स ग्लोबल ऑब्जेक्ट मेथड्स म्हणून इम्पोर्ट करण्यासाठी वापरा:

```ts
import "@type-check/guards/register-global-object.mjs";
```

यानंतर खालील मेथड ग्लोबली उपलब्ध असेल:

- `Type.isPrimitive(value)`

## फंक्शन विश्लेषण

फंक्शन्समध्ये वेगवेगळे पॅरामीटर्स दिल्यावर कोणता आउटपुट तयार होतो याचे तक्त्याद्वारे विश्लेषण येथे दस्तऐवजीकरण केले
आहे: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ही फाइल 30 January 2026 at 23:56:56 (UTC) रोजी *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** च्या वापराने *
*[Roland Milto](https://roland-milto.de/)** द्वारे तयार करण्यात आली.</small>