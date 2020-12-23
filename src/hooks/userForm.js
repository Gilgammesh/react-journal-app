import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [formValues, setForm] = useState(initialValues);

  const resetForm = (initialForm) => {
    setForm(initialForm);
  };

  const handleInputChange = ({ target }) => {
    const { type, checked, name, value } = target;
    const value_ = type === "checkbox" ? checked : value;
    setForm({
      ...formValues,
      [name]: value_,
    });
  };

  return [formValues, handleInputChange, resetForm];
};
