document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
  
    // Cargar las traducciones iniciales
    loadTranslations(languageSelector.value); // Cargar el idioma seleccionado inicialmente
  
    // Escuchar cambios en el selector de idioma
    languageSelector.addEventListener("change", function () {
      const selectedLanguage = languageSelector.value;
      loadTranslations(selectedLanguage); // Cargar traducciones según el idioma seleccionado
    });
  
    function loadTranslations(language) {
      fetch(`data/translations.json`) // Ruta al archivo translations.json
        .then((response) => response.json())
        .then((translations) => {
          const languageTranslations = translations[language]; // Obtener las traducciones para el idioma
          // Aplicar las traducciones a los elementos
          if (languageTranslations) {
            for (const key in languageTranslations) {
              if (languageTranslations.hasOwnProperty(key)) {
                const element = document.getElementById(key);
                const translation = languageTranslations[key];
                // Verificar si el elemento existe antes de cambiar su contenido
                if (element) {
                  // Si es una etiqueta de entrada, actualiza su atributo "for" en lugar del contenido
                  if (element.tagName === "LABEL" && element.hasAttribute("for")) {
                    const inputElement = document.getElementById(element.getAttribute("for"));
                    if (inputElement) {
                      element.textContent = translation;
                    }
                  } else {
                    element.textContent = translation;
                  }
                }
              }
            }
          }
        })
        .catch((error) => console.error("Error loading translations:", error));
    }
    
    
  });
  