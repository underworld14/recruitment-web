const adminemail = "admin@admin.com";

const setAuth = (email): void => {
  const role = email === adminemail ? "admin" : "user";
  localStorage.setItem("ga-auth", JSON.stringify({ email, role }));
};

type getauth = "admin" | "user" | "not-authenticated";

const getAuth = (): getauth => {
  let result: getauth;
  let data = localStorage.getItem("ga-auth") as any;
  if (data) {
    data = JSON.parse(data);
    result = data.role === "admin" ? "admin" : "user";
  } else {
    result = "not-authenticated";
  }

  return result;
};

const resetAuth = (): void => {
  localStorage.removeItem("ga-auth");
};

export { setAuth, getAuth, resetAuth };
