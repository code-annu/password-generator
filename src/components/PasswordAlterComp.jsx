import { useRef } from "react";

function PasswordAlterComp({ length, onLengthChange, includeNumbers, onIncludeNumbersChange, includeSymbols, onIncludeSymbolsChange }) {
    return (
        <div className="flex justify-around space-x-0.5">
            <label>
                <input type="range" id="seekbar" min="12" max="30" value={length} step="1" onChange={onLengthChange} className="cursor-pointer" />
                <span className="text-orange-400">Length ({length})</span>
            </label>
            <label>
                <input type="checkbox" defaultChecked={includeNumbers} onChange={onIncludeNumbersChange} />
                <span className="text-orange-400">Numbers</span>
            </label>

            <label>
                <input type="checkbox" defaultChecked={includeSymbols} onChange={onIncludeSymbolsChange} />
                <span className="text-orange-400">Symbols</span>
            </label>
        </div>
    )
}

export default PasswordAlterComp;