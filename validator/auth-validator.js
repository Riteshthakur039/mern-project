const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "username must be atleast 3 characters"})
    .max(255, {message: "username must be not more than 255 characters"}),
    email: z
    .string({ required_error: "email is required"})
    .trim()
    .email({meaages: "Invalid email address"})
    .min(3, {message: "email must be atleast 3 characters"})
    .max(255, {message: "email must be not more than 255 characters"}),
    phone: z
    .string({ required_error: "Phone is required"})
    .trim()
    .min(10, {message: "number must be atleast 10 characters"})
    .max(20, {message: "number must be not more than 20 characters"}),
    password: z
    .string({ required_error: "password is required"})
    .trim()
    .min(7, {message: "password must be atleast 7 characters"})
    .max(1024, {message: "password must be not more than 1024 characters"}),
});


//for login

const loginSchema = z.object({
    email: z
    .string({ required_error: "email is required"})
    .trim()
    .email({meaages: "Invalid email address"})
    .min(3, {message: "email must be atleast 3 characters"})
    .max(255, {message: "email must be not more than 255 characters"}),

    password: z
    .string({ required_error: "password is required"})
    .trim()
    .min(7, {message: "password must be atleast 7 characters"})
    .max(1024, {message: "password must be not more than 1024 characters"}),
});


const userSchema = z.object({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "username must be atleast 3 characters"})
    .max(255, {message: "username must be not more than 255 characters"}),
    email: z
    .string({ required_error: "email is required"})
    .trim()
    .email({meaages: "Invalid email address"})
    .min(3, {message: "email must be atleast 3 characters"})
    .max(255, {message: "email must be not more than 255 characters"}),
    phone: z
    .string({ required_error: "Phone is required"})
    .trim()
    .min(10, {message: "number must be atleast 10 characters"})
    .max(20, {message: "number must be not more than 20 characters"}),

});

module.exports = {signupSchema, loginSchema, userSchema};