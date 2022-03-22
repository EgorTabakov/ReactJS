import './Message.styles.css';

export const Message =({ name, lastName }) =>{
    return (
        <h3 className="message">
          I am a message: {name}, {lastName}
            </h3>
    );
    }
