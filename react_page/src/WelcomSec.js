import React, {useState}  from 'react'

const WelcomSec = () => {

    let [msg, setMsg] = useState("Week 1 Assignment");
    const changMsg = () => {
        setMsg("Have a good Day!");
    }

    return(
        <section className="welcomemsg" onClick={changMsg}>
            <h1 className="headMsg">{msg}</h1>
        </section>
    )
}

export default WelcomSec;
