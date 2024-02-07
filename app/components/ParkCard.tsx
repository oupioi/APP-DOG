import { View, Text } from "react-native";

interface ParkProps {
    name: string;
}
const ParkCard: React.FC<ParkProps> = ({ name }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default ParkCard;

