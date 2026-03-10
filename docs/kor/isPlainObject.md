# isPlainObject

## 설명

주어진 `value`가 일반 객체인지 확인하고, 그렇다면 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

`unknown` 입력(예: 파싱된 JSON, 외부 데이터, 또는 함수 인자)이 키를 읽거나 이를 타입이 지정된 설정 객체로 매핑하기 전에 일반 객체인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isPlainObject`는 `unknown`을 레코드 형태의 객체로 다루기 전에 타입을 좁히는 데 유용하며, 내부 태그가 `[object Object]`인 값에 대해서만 `true`를 반환합니다.

### 장점

- 값이 일반 객체(즉, `Object` / `{}`)인지 여부를 간단하고 신뢰성 있게 확인하여 `true` 또는 `false`를 반환합니다.
- 일반 객체를 배열, 함수, `null` 및 기타 일반 객체가 아닌 타입과 구분하는 데 도움이 됩니다.
- TypeScript에서 객체 속성에 접근하기 전에 `unknown` 값을 좁히기 위한 타입 가드로 유용합니다.

## 사용법

### 문법

함수:

- `isPlainObject(value)`

매개변수:

- `value`: 일반 객체인지 여부를 테스트할 값입니다.

### 로컬 함수 임포트

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // 여기서 input은 일반 객체입니다
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isPlainObject(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 12:18:20 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>