"use server";

const apiUrl = "https://homesync.onrender.com";

export async function submitForm(prevState: any, formData: FormData) {
  try {
    const actionType = formData.get("actionType"); // "Rent" or "Buy"

    const url ="https://homesync.onrender.com/api/rent/submitRentForm"

    const data = {
      name: formData.get("fullName"),
      email: formData.get("email"),
      number: formData.get("phone"),
      hometype: formData.get("homeType"),
      location: formData.get("address"),
      budget: formData.get("budget"),
      description: formData.get("message"),
      listingType: formData.get("actionType"),
    };
    
    // const data = {
    //   "name": "Emmy",
    //   "email": "josh@gmail.com",
    //   "number": "09059565389",
    //   "hometype": "Flat",
    //   "location": "Obalende",
    //   "budget": "4200",
    //   "description": "I want to remt a house",
    //   "listingType": "Rent"
    // }

    console.log(data)
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log({response})

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.log(error, error.message)
    return { success: false, message: error.message };
  }
}

export async function submitAgentForm(prevState: any, formData: FormData) {
  try {
    const url = `${apiUrl}/api/agent/submitAgentForm`;

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("phone"),
      experience: formData.get("experience"),
      operatingArea: formData.get("operatingArea"),
      anyNotes: formData.get("anyNotes"),
    };
    console.log(data)

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(response)
    if (!response.ok) {
        console.log(response, data)
      throw new Error("Failed to submit form");
    }

    return { success: true, message: "Agent registration submitted successfully!" };
  } catch (error) {
    console.log(error, error.message)
    return { success: false, message: error.message };
  }
}
