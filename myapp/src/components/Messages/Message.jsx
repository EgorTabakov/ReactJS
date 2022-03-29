import './Message.styles.css';

export const Message =({ name, text }) =>{
    return (

        <div className ="conversation-container">
        <h3 className="message">
         <div> {name}</div>
            <div>Message: </div>
            <div>{text}</div>
            </h3>
        </div>

    );
    }
