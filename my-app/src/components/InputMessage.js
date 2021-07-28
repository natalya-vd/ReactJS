import '../scss/input-message.scss'

export const InputMessage = (props) => {
    return(
        <form className="input-message" action="#">
            <input className="input-message__input" type="text" value={props.value} onChange={props.handleChange} />
            <button className="input-message__btn" type="submit" onClick={props.updateMessageList}>
                Отправить
            </button>
        </form>
    )
}