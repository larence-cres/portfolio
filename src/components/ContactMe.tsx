import styles from '../../styles/ContactMe.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Validation } from './Validation';
import { ErrorMessage, Field, Form, Formik, FormikFormProps, FormikProps } from 'formik';
import { Snackbar, SnackbarContent } from '@material-ui/core';

export default function ContactMe() {

    const [send, sendEmail] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (values: any, formik: any) => {

        {/* 
            Use your own ids 
        */}

        emailjs.send('<SERVICE_ID>', '<TEMPLATE_ID>', values, '<USER_ID>')
            .then((result) => {
                console.log(result.text);
                sendEmail(true);
                setSuccess(true);
                formik.resetForm();
            }, (error) => {
                sendEmail(true);
                setSuccess(false);
                console.log(error.text);
            });
    }

    const handleClose = () => {
        sendEmail(false);
    };

    return (
        <div className={styles.contactMe} id="contactMe">
            <Snackbar
                open={send}
                autoHideDuration={5000}
                onClose={handleClose}>
                <SnackbarContent
                    className={success ? styles.success_snackbar : styles.error_snackbar}
                    message={success ? "Thank you for reaching out to me. I will reply ASAP!" : "Error while sending message"}
                />
            </Snackbar>

            <h1>Contact Me</h1>
            <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3>Contact Information</h3>
                    <a href="tel:+977-9841134967">
                        <div className={styles.iconText}>
                            <PhoneIcon className={styles.icon} />
                            <span>+977-9841134967</span>
                        </div>
                    </a>
                    <a href="mailto:lawreinzz@gmail.com">
                        <div className={styles.iconText}>
                            <MailOutlineIcon className={styles.icon} />
                            <span>lawreinzz@gmail.com</span>
                        </div>
                    </a>
                </div>
                <div className={styles.formContainer}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        }}
                        validationSchema={Validation}
                        onSubmit={(values, formikProps) => handleSubmit(values, formikProps)}>
                        {({ isSubmitting }) => (
                            <Form className={styles.form}>
                                <div className={styles.col}>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <Field type="text" name="name" />
                                        <ErrorMessage name="name" className={styles.error} component="div" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" name="email" />
                                        <ErrorMessage name="email" className={styles.error} component="div" />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <Field type="text" name="subject" />
                                    <ErrorMessage name="subject" className={styles.error} component="div" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <Field name="message" as="textarea" />
                                    <ErrorMessage name="message" className={styles.error} component="div" />
                                </div>
                                <button type="submit" disabled={isSubmitting} className={!isSubmitting ? styles.button : styles.submitting}>
                                    {isSubmitting ? 'Sending message' : 'Send message!'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
