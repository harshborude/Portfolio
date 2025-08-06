import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {

  const cardRefs = useRef([])

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index]
    if(!card) return

    // Get mouse position relative to card
    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width /2
    const mouseY = e.clientY - rect.top - rect.height /2

    // calc angle from center 
    let angle = Math.atan2(mouseY, mouseX) * (180/Math.PI)

    angle = (angle +  360) % 360
    
    card.style.setProperty('--start', angle + 60)
  }

  return (
    <div 
    ref={(element) => (cardRefs.current[index] = element)} 
    className="card card-border timeline-card rounded-xl p-10"
    onMouseMove={handleMouseMove(index)}
    >
      <div className="glow" />
      {children}
      <div className="my-5">
        <p className="text-white-50 text-xl">
          {card.story}
        </p>
      </div>
    </div>
  );
}

export default GlowCard;