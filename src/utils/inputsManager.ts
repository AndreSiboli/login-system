export function checkName(value: string, handleErr: (str: string) => void) {
  const regex = /^[\p{L} ]+$/u;

  if (value.trim().length < 2) return handleErr("The name field is too short.");
  if (!regex.test(value))
    return handleErr("The name field only accepts letters.");

  return true;
}

export function checkEmail(value: string, handleErr: (str: string) => void) {
  if (!value) return handleErr("You need an email.");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(value)) return handleErr("Invalid email format.");

  if (value.includes(".."))
    return handleErr("You may not have sequential dots.");

  const [root, domain] = value.split("@");
  if (root.startsWith(".") || root.endsWith("."))
    return handleErr('You may not start or end with a dot before "@".');

  if (domain.startsWith("-") || domain.endsWith("-"))
    return handleErr("Domain may not start or end with a hyphen.");

  if (!domain.includes(".")) return handleErr('You need a domain after "@".');

  return true;
}

export function checkPassword(
  password: string,
  repassword: string,
  handleErr: (str: string) => void
) {
  if (password.length < 8)
    return handleErr("The password need at least 8 characters.");

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(password))
    return handleErr(
      "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    );
  if (password !== repassword)
    return handleErr("The password is not the same.");

  return true;
}

export function checkSubject(value: string, handleErr: (str: string) => void) {
  if (value.length === 0) return handleErr("You need a subject.");
  if (value.length > 255) return handleErr("Too many caracteres in subject.");
  return true;
}

export function checkPhoneNumber(
  value: string,
  handleErr: (str: string) => void
) {
  const regex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  if (!regex.test(value))
    return handleErr("Invalid phone number format. Use (XXX) XXX-XXXX.");
  return true;
}
