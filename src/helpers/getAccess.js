export const getAccess = async ( URL = "https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires") => {
  try {
    const response = await fetch(URL);
    console.log({response})
    if (!response.ok) {
      throw new Error(`Error: ${response.status}. ${response.statusText}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error(error);
  }
};
