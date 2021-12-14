export const getHeaders = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user.access_token}`,
  };
};
