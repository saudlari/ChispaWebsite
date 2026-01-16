import { APP_CONFIG, ERRORS } from '../config/constants';

export function validateName(name) {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: ERRORS.form.nameRequired };
  }
  
  const trimmedName = name.trim();
  
  if (trimmedName.length < APP_CONFIG.validation.minNameLength) {
    return { isValid: false, error: ERRORS.form.nameTooShort };
  }
  
  if (trimmedName.length > APP_CONFIG.validation.maxNameLength) {
    return { isValid: false, error: ERRORS.form.nameTooLong };
  }
  
  return { isValid: true };
}
            
export function validatePhone(phone) {
  if (!phone || phone.trim().length === 0) {
    return { isValid: false, error: ERRORS.form.phoneRequired };
  }
  
  const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  if (!/^\d+$/.test(cleanedPhone)) {
    return { isValid: false, error: ERRORS.form.phoneInvalid };
  }
  
  if (cleanedPhone.length < APP_CONFIG.validation.minPhoneLength || 
      cleanedPhone.length > APP_CONFIG.validation.maxPhoneLength) {
    return { isValid: false, error: ERRORS.form.phoneInvalid };
  }
  
  return { isValid: true };
}

export function validateNotes(notes) {
  if (!notes) {
    return { isValid: true }; // Las notas son opcionales
  }
  
  if (notes.length > APP_CONFIG.validation.maxNotesLength) {
    return { isValid: false, error: ERRORS.form.notesTooLong };
  }
  
  return { isValid: true };
}

export function validateQuantity(quantity) {
  if (typeof quantity !== 'number' || isNaN(quantity)) {
    return { isValid: false, error: ERRORS.cart.invalidProduct };
  }
  
  if (quantity < 1) {
    return { isValid: false, error: ERRORS.cart.invalidProduct };
  }
  
  if (quantity > APP_CONFIG.validation.maxQuantity) {
    return { isValid: false, error: ERRORS.cart.maxQuantity };
  }
  
  return { isValid: true };
}

export function validateCustomerInfo(customerInfo) {
  const errors = {};
  
  const nameValidation = validateName(customerInfo.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }
  
  const phoneValidation = validatePhone(customerInfo.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error;
  }
  
  const notesValidation = validateNotes(customerInfo.notes);
  if (!notesValidation.isValid) {
    errors.notes = notesValidation.error;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

