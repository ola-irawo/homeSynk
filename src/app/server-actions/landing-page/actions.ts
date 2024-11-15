const apiUrl = "https://homesync.onrender.com"


export const joinWaitlist = async (formData: any) => {
    const email = formData.get("email")

    const response = await fetch(`${apiUrl}/api/createRequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email}),
    });

    const data = await response.json()
    console.log(data)

}

export const contactUs = async (formdData: any) => {
    const name = formdData.get("name")
    const email = formdData.get("email")
    const phone = formdData.get("phone")
    const subject = formdData.get("subject")
    const message = formdData.get("message")

    console.log(formdData.get("name"))

    const response = await fetch(`${apiUrl}/api/form/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
    });

    const data = await response.json()
    console.log(data)
}