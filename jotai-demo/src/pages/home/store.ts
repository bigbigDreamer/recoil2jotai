import { selectAtom } from 'jotai/utils'
import { atom } from 'jotai'


export const baseAtom = atom(Math.random());
export const baseAtom1 = atom(Math.random());

export const oneAtom = selectAtom(baseAtom, val => val);

export const twoAtom = selectAtom(atom(get => ({
    a: get(oneAtom)*3,
    b: get(baseAtom1)*2
}), (get, set, payload) => {
    console.log(payload, 'lplplp')
    set(baseAtom1, 99999)
}), val => val.a + val.b);