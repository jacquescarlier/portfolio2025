export default function InputForm({ name, type, inputId, autocomplete, onChange, value, disabled, className, placeHolder, required, ariaLabel }) {

    return (
        <>
            <input
                name={name}
                type={type}
                id={inputId}
                autoComplete={autocomplete}
                onChange={onChange}
                value={value}
                disabled={disabled}
                className ={className}
                placeholder={placeHolder}
                required={required}
                aria-labelledby= {ariaLabel}
            />
        </>
    );
}
