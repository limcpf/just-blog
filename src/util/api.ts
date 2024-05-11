export const api = (link: string, method: "GET" | "POST") => {
  return fetch(`${process.env.API_URL}${link}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    mode: "cors",
    credentials: "include",
  });
}

