import * as yup from 'yup';

export const Validation = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required')
});