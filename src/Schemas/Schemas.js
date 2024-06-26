import * as yup from "yup";


const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol
const pincodeErrorMessage = "Pincode must be a 6 digit number";

export const userRegSchema  = yup.object().shape({
        firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
        email:yup.string().email("Please enter a valid email").required("Required"),
        password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
        dob: yup.date().required("Required"),
        housename: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        pincode:  yup.number().min(100000,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").required("Required"),
        contact:  yup.number().min(1000000000,"Contact must be a 10 digit number").max(9999999999,"Contact must be a 10 digit number").required("Required"),
        district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        image: yup.object().required("Required"),     
})


export const ArtistRegistrationscgema  = yup.object().shape({
        firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
        email:yup.string().email("Please enter a valid email").required("Required"),
        password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
        dob: yup.date().required("Required"),
        housename: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        pincode:  yup.number().min(100000,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").required("Required"),
        contact:  yup.number().min(1000000000,"Contact must be a 10 digit number").max(9999999999,"Contact must be a 10 digit number").required("Required"),
        district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        image: yup.object().required("Required"),     
})


export const deliveryagentschema  = yup.object().shape({
        firstname: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        lastname:yup.string().min(1,"Enter minimum 1 characters").required("Required"),
        email:yup.string().email("Please enter a valid email").required("Required"),
        password:  yup.string().min(5).max(16).matches(passwordRule, "1 uppercase, 1 number, 1 symbol").required("Required"),
        age: yup.number().min(18,"Age must be at least 18").max(100,"Age cannot exceed 100").required("Required"),
        housename: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        city: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        pincode:  yup.number().min(100000,pincodeErrorMessage).max(999999,"Pincode must be a 6 digit number").required("Required"),
        contact:  yup.number().min(1000000000,"Contact must be a 10 digit number").max(9999999999,"Contact must be a 10 digit number").required("Required"),
        district: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
        image: yup.object().required("Required"), 
        aadhar: yup.string().required("Aadhar number is required").matches(/^\d{12}$/, "Aadhar number must be 12 digits")    
})