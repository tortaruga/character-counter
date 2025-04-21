export default function CharLimitModal({maxLength, setFormData, setIsCharLimitModalOpen, setMaxLength}) {
    function closeModal() {
        if (!maxLength) {
            setFormData(prevData => {
                return {
                    ...prevData,
                    charLimit: false,
                }
            })
        }
        setIsCharLimitModalOpen(false);
    }

    function updateCharLimit(e) {
        setMaxLength(e.target.value);
    }

    function submit(e) {
        e.preventDefault();
        if (!maxLength) {
            setMaxLength(1);
        }
        setIsCharLimitModalOpen(false);
    }

    return (
        <div className="modal">
            <button className="close-btn" onClick={closeModal} aria-label="close modal"></button>
            <form onSubmit={submit}>
                <label htmlFor="charLimit">
                    Character limit: 
                    <input type="number" id="charLimit" name="charLimit" min='1' onChange={updateCharLimit} />
                </label>
                <button className="char-limit-submit-btn">set limit</button>
            </form>
        </div>
    )
}