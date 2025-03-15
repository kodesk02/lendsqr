export function cn(...inputs: (string | boolean | undefined | Record<string, boolean>)[]): string {
  return inputs
    .filter((input) => input !== false && input !== undefined && input !== "")
    .map((input) => {
      if (typeof input === "string") return input;
      if (typeof input === "object" && input !== null) {
        return Object.entries(input)
          .filter(([, condition]) => condition)
          .map(([className]) => className)
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .trim();
}