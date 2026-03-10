# arePromises

## 설명

`arePromises`는 배열의 모든 요소가 `Promise` 인스턴스인지 여부를 판별합니다.

### 사용 사례

동적으로 구성되었거나 외부에서 제공된 목록이 집계(예: `Promise.all`)하기 전에 프로미스만 포함하는지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `Promise.all` 또는 기타 프로미스 전용 작업을 호출하기 전에 `unknown[]`를 검증하는 데 `arePromises`를 사용하세요. 빈 배열에는 `false`를 반환합니다.

### 장점

- 프로미스 전용 로직을 진행하기 전에 모든 요소가 `Promise`인지 보장합니다.
- 비어 있지 않은 배열이 아닌 경우 `false`를 반환하여, 빈 입력에 대한 모호한 결과를 방지합니다.
- 외부 소스에서 온 `unknown[]`로 작업할 때 런타임 가드로 유용합니다.

## 사용법

### 문법

함수:

- `arePromises(array)`

매개변수:

- `array`: `Promise` 인스턴스인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values는 런타임에서 Promise 인스턴스의 배열입니다
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.arePromises(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 11:48:51 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>