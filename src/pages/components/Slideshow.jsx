import React, { useState, useEffect } from "react";

const Slideshow = ({ images, interval = 3000 }) => {


  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= images.length ? 0 : newIndex);
  };

  // Função para retroceder para a imagem anterior
  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  // Efeito para avançar automaticamente para a próxima imagem a cada intervalo de tempo
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      clearInterval(slideInterval); // Limpa o intervalo quando o componente é desmontado
    };
  }, [currentIndex, interval]); // Executa o efeito sempre que currentIndex ou interval mudar

  const buttonStyle = {
    backgroundColor: '#88a4ae',
    color: '#ffffff',
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px', // Adicionando margem à direita para separar os botões
    
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Imagem ${currentIndex}`} />
      <div className="slideshow-buttons">
        <button className="slideshow-button" onClick={prevSlide}>Anterior</button>
        <button className="slideshow-button" onClick={nextSlide}>Próximo</button>
      </div>
    </div>
  );
};

export default Slideshow;
