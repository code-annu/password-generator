import PasswordField from './PasswordField';
import PasswordAlterComp from './PasswordAlterComp';
import { useEffect, useState,useRef } from 'react';
import generator from 'generate-password';

function PasswordGenerator() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null);

    useEffect(() => {
        let allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) allChars += '0123456789';
        if (includeSymbols) allChars += '!@#$%^&*+-/';
        let tempPassword = '';
        for (let i = 0; i < length; i++) {
            let randIndex = getRandomInt(allChars.length);
            tempPassword += allChars.charAt(randIndex);
        }
        setPassword(tempPassword);

    }, [length, includeNumbers, includeSymbols])

    function  onCopyPassword(){
        console.log('yes clicked and passwordref is',passwordRef.current)
        passwordRef.current?.select()
    }

    return (
        <div className='bg-gray-700 p-10 rounded'>
            <PasswordField passwordText={password} onCopyPassword={onCopyPassword} passwordRef={passwordRef}/>
            <PasswordAlterComp
                length={length}
                includeNumbers={includeNumbers}
                includeSymbols={includeSymbols}
                onLengthChange={(e) => { setLength(e.target.value) }}
                onIncludeNumbersChange={(e) => setIncludeNumbers(!includeNumbers)}
                onIncludeSymbolsChange={() => setIncludeSymbols(!includeSymbols)}
            />

        </div>
    )
}

export default PasswordGenerator;