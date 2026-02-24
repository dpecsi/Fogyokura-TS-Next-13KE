// for-in ciklussal
export function célElérve(cél: number, mérések: number[]): number {
  for (const i in mérések) {
    const index: number = Number(i);
    const mértÉrték: number = mérések[i];
    if (mértÉrték <= cél) return index + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

// for-of ciklussal
export function célElérve2(cél: number, mérések: number[]): number {
  for (const [i, e] of mérések.entries()) {
    if (e <= cél) return i + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

// A tömb forEach metódusával: Nem lehet kilépni a forEach ciklusból return, vagy break utasítással!
// Így a megoldás hibás!!!
export function célElérve3(cél: number, mérések: number[]): number {
  mérések.forEach((e, i) => {
    if (e <= cél) return i + 1;
  });
  return 0; // ha a célt nem érte el Mari néni
}

// klasszikus növekményes (for) ciklussal
export function célElérve4(cél: number, mérések: number[]): number {
  for (let i = 0; i < mérések.length; i++) {
    if (mérések[i] <= cél) return i + 1;
  }
  return 0; // ha a célt nem érte el Mari néni
}

export function ejnyeBejnyeHetekSzáma(mérések: number[]): number {
  let hetekSzáma: number = 0;
  for (let i = 0; i < mérések.length - 1; i++) {
    if (mérések[i + 1] > mérések[i]) hetekSzáma++;
  }
  return hetekSzáma;
}

export default function HomePage() {
  const célTömeg: number = 93.5;
  const mérések: number[] = [95.5, 94.3, 94.4, 93.3, 93.8, 92.9];
  const elérve: number = célElérve4(célTömeg, mérések);
  const ejnyeBejnye: number = ejnyeBejnyeHetekSzáma(mérések);
  return (
    // font-mono -> Monospace betűtípus (azonos szélesek a karakterek)
    // whitespace-pre -> vezérlő karakterek megtartása (\t, \n, kettő vagy több szóköz)
    <div className="font-mono whitespace-pre">
      <p>{`Hetek száma=${mérések.length}`}</p>
      <p>{`Elérni kívánt testtömeg (kg)=${célTömeg}`}</p>
      {/* Ciklus készítése JSX kódban */}
      {/* e -> felveszi a tömb értékeit */}
      {/* i -> felveszi a tömb indexeit */}
      {/* a map metódus "iterál" */}
      {/* key jellemző kötelező, szerepe az azonosítás */}
      {mérések.map((e, i) => (
        <p key={i}>
          {i + 1}. héten={e}
        </p>
      ))}
      {elérve == 0 ? (
        <p>Sajnos Mari néni nem érte el a célját.</p>
      ) : (
        <p>Mari néni a(z) {elérve}. héten érte el a célt.</p>
      )}
      <p>A tömege {ejnyeBejnye} esetben nőtt egyik hétről a másikra.</p>
    </div>
  );
}
