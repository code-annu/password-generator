function PasswordField({ passwordText, onCopyPassword, passwordRef }) {
    return (
        <div className="flex items-center justify-between">
            <div className="bg-white py-1.5 pl-1 pr-3 w-96 rounded-l-sm">
                <input type="text" value={passwordText} ref={passwordRef} className="w-96"/>
                {/* <label ref={passwordRef}>{passwordText}</label> */}
            </div>
            <button className="bg-blue-700 rounded-r-sm px-3 py-1.5 text-white" onClick={onCopyPassword}>Copy</button>
        </div>
    )
}

export default PasswordField;