const apiUrl = "https://homesync.onrender.com";

export const joinWaitlist = async (formData: FormData) => {
    const email = formData.get("email") as string;

    const res = await fetch(`${apiUrl}/api/createRequest`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    const data = await res.json()
    return data.message
};

export const contactUs = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const res = await fetch(`${apiUrl}/api/form/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, subject, message }),
    });

    const data = await res.json()
    return data

};
