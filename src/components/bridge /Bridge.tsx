import "./Bridge.css";

interface BridgeProps {
    eth: boolean
}

const Bridge = (props: BridgeProps) => {
    if (props.eth) {
        // bridge from eth to polygon
    } else {
        // bridge from polygon to eth, will handle later
    }
}

export default Bridge