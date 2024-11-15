const apiUrl = "https://homesync.onrender.com";

export const joinWaitlist = async (formData: FormData) => {
    const email = formData.get("email") as string;

    const response = await fetch(`${apiUrl}/api/createRequest`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    const data = await response.json();
};

export const contactUs = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    console.log(name);

    const response = await fetch(`${apiUrl}/api/form/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
    });

    const data = await response.json();
};
