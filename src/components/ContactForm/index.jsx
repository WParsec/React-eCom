import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Import styles
import styles from './ContactForm.module.scss'

const schema = yup
.object({
  fullName: yup.string().trim().required().min(3),
  subject: yup.string().trim().required().min(3),
  email: yup.string().trim().required().email(),
  body: yup.string().trim().required().min(3),
}).required();

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {errors},
    control,
    trigger,
    } = useForm({
    resolver: yupResolver(schema),
    });

  const { touchedFields } = useFormState({ control });  

  const onSubmit = (data, event) => {
    // Clear the form after submit
    console.log(data);
    setIsSubmitted(true);
    event.target.reset();
  };

  // Validate input on blur
  const handleBlur = async (field) => {
    await trigger(field);
  }

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('fullName')}
        className= {
          touchedFields.fullName && !errors.fullName ? styles.valid : errors.fullName ? styles.invalid : ''
        }
        placeholder="Full Name"
        onBlur={() => handleBlur('fullName')}
      />
      <p>{errors.fullName?.message.toLocaleLowerCase()}</p>
      <input {...register('subject')}
        className = {
          touchedFields.subject && !errors.subject ? styles.valid : errors.subject ? styles.invalid : ''
        }
        placeholder = "Subject"
        onBlur={() => handleBlur('subject')}
      />
      <p>{errors.subject?.message}</p>
      <input {...register('email')} 
        className = {
          touchedFields.email && !errors.email ? styles.valid : errors.email ? styles.invalid : ''
        }
        placeholder = "Email"
        onBlur={() => handleBlur('email')}
      />
      <p>{errors.email?.message}</p>
      <textarea {...register('body')} 
        className = {
          touchedFields.body && !errors.body ? styles.valid : errors.body ? styles.invalid : ''
        }
        placeholder = "Message"
        onBlur={() => handleBlur('body')}
      />
      <p>{errors.body?.message}</p>
      <button type="submit" className='btn-cart'>Submit</button>
      {isSubmitted && <p>Your message has been submitted!</p>}
    </form>
  );
}

export default ContactForm;
