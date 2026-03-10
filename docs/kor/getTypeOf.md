# getTypeOf

## 설명

`getTypeOf`는 정제된 숫자 타입과 특정 객체 종류를 포함하여, 주어진 값에 대한 상세하고 사람이 읽기 쉬운 타입 라벨을 반환합니다.

### 사용 사례

입력 검증과 진단에서 타입 감지를 표준화하기 위해 `getTypeOf`를 사용하세요. 예를 들어 `nan`을 거부하고, `integer` ID만 허용하며, `decimal` 같은 숫자 문자열을 일반 `string`과
다르게 처리하거나, `date`, `regexp` 같은 정확한 객체 종류를 로깅할 수 있습니다.

> **TypeScript 사용자를 위한 참고:**
>
> 반환 타입은 `DataTypeAsString | string`입니다. 이를 설명용 라벨로 취급하고, 분기할 때 `integer`, `float`, `nan`, `array`, `null`, `undefined`
> 같은 알려진 리터럴과 비교하세요.

### 장점

- JavaScript의 `typeof`보다 더 세분화된 타입 문자열을 반환하며, `integer`, `float`, `nan` 같은 숫자 하위 타입을 포함합니다.
- `null`과 `undefined`를 각각 `null`, `undefined`로 명시적으로 구분합니다.
- 일반적인 숫자 문자열 형식을 감지하여 단순한 `string` 대신 `binary`, `octal`, `decimal`, `hexadecimal`로 보고합니다.
- 배열도 `array`로 식별하며, `Object.prototype.toString`을 사용해 구체적인 객체 타입 이름(예: `date`, `regexp`, `map`, `set`)을 제공합니다.
- 일관되고 사람이 읽기 쉬운 타입 라벨이 필요한 검증, 로깅, 디버깅에 매우 유용합니다.

## 사용법

### 문법

함수:

- `getTypeOf(value)`

매개변수:

- `value`: 데이터 타입을 판별할 값입니다.

### 로컬 함수 임포트

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

// 예시 검사
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.getTypeOf(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 1:12:52 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>