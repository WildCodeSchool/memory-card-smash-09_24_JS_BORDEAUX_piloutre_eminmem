import type { Card } from "./card.type";

export default function CardDetails({ card }: { card: Card }) {
    const loadPlaceholder = (target: any) => {
        return target.src = "https://via.placeholder.com/150";
    }
    return (
        <div>
            <img src={card.image} alt={card.name} onError={(target) => loadPlaceholder(target)} />
            <p>{card.name}</p>
        </div>
    )
}