import axios from "axios"

export const sendContactMail = async (recipientMail, name, senderMail, content) => {
    const data = {
        recipientMail,
        name,
        senderMail,
        content
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/brief",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}
