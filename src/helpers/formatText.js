// función para Capitalizar la primera letra de un texto
export const capitalize = (text) => {
  const Cap = text.charAt().toUpperCase();
  const text_ = text.substring(1, text.length);
  return Cap + text_;
};
