export const loadTemplate = async (templatePath) => {
  try {
    const response = await fetch(templatePath);
    const template = await response.json();
    return template;
  } catch (error) {
    console.error("Error loading template:", error);
    return null;
  }
};