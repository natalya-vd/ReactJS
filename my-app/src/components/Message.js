import '../scss/message.scss';

export const Message = (props) => {
    return(
        <li className="message">
            <img className="message__user-img" src={props.message.photo} alt="user1" width="50" height="50" />
            <div>
                <p className="message__user">
                    {props.message.author}
                </p>
                <p>
                    {props.message.text}
                </p>
            </div>
        </li>
    )
}