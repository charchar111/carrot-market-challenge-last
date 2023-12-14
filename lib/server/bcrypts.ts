import bcrypt from "bcrypt";

export default function useBcrypts() {
  const saltRounds = 10;
  const hassing = async function (text: string) {
    let password;
    password = await bcrypt.hash(text, saltRounds);
    return password;
  };

  const comparing = async function (text: string, hashedText: string) {
    const match = await bcrypt.compare(text, hashedText);
    return match;
  };

  return { hassing, comparing };
}
