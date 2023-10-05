// Using the prototype; function signUpUser(firstName, lastName)
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
