export const validateField = (
  name: string,
  value: string
): string | undefined => {
  switch (name) {
    case "yourName":
    case "userName":
      if (!value.trim()) return "This field is required";
      if (value.length < 2) return "Name must be at least 2 characters";
      return undefined;

    case "email":
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return undefined;

    case "dateOfBirth":
      if (!value.trim()) return "Date of birth is required";
      return undefined;

    case "postalCode":
      if (!value.trim()) return "Postal code is required";
      const postalRegex = /^\d{5}$/;
      if (!postalRegex.test(value))
        return "Please enter a valid 5-digit postal code";
      return undefined;

    case "password":
      if (!value.trim()) return "Password is required";
      if (value.length < 8) return "Password must be at least 8 characters";
      return undefined;

    case "permanentAddress":
    case "presentAddress":
    case "city":
    case "country":
      if (!value.trim()) return "This field is required";
      return undefined;

    default:
      return undefined;
  }
};
