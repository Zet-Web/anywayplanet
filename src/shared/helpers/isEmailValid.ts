export const isEmailValid = (email: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/.test(email)
}
//  isEmailValid("tryEmail") = false , isEmail('tryemail@gmail.com') = true
