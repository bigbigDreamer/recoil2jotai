import { FC } from "react";
import { useAtomValue, useSetAtom, useAtom } from "jotai";  
import { oneAtom, twoAtom, baseAtom } from './store'

const Home: FC = () => {
    const setBase = useSetAtom(baseAtom);

    const oneValue = useAtomValue(oneAtom);
    const [twoValue, setTwoAtom] = useAtom(twoAtom);

    const onChangeBase = () => {
        setBase(Math.random())
    }

    const onChangeSelect = () => {
        setTwoAtom(9999)
    }


    return <div className="flex items-center justify-center mt-[200px] flex-col">
        <h1>Hello Jotai</h1>
        <button onClick={onChangeBase} className="border-solid border-2 border-indigo-600 p-[12px]">Click Random</button>
        <button onClick={onChangeSelect} className="border-solid border-2 border-indigo-600 p-[12px]">Change Select</button>
        <div className="mt-[10px] border-solid border-2 border-indigo-600 w-[200px] h-[200px] p-[24px]">
            <h1 className="text-red-600 text-lg">one piece value</h1>
            {oneValue}
            </div>

        <div className="mt-[10px] border-double border-4 border-indigo-600 w-[200px] h-[200px] p-[24px]" >
        <h1 className="text-red-600 text-lg">one piece value</h1>{twoValue}</div>
    </div>
}

export default Home